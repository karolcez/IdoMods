const express = require("express");
const axios = require("axios");
const sqlite3 = require("sqlite3").verbose();
const path = require('path');
const fs = require('fs');
const basicAuth = require("express-basic-auth");
const { Parser } = require("json2csv");
const cron = require("node-cron");
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = 3000;

const FETCH_ENDOPOINT = "https://zooart6.yourtechnicaldomain.com/api/admin/v5/orders/orders";

const TABLE = {
  ORDERS : "orders"
}

app.use(cors());

app.use(
  basicAuth({
    users: { [process.env.USER]: process.env.PASSWORD },
    challenge: true,
  })
);


class Order {
  constructor(orderID, products, orderWorth) {
    this.orderID = orderID;
    this.products = products;
    this.orderWorth = orderWorth;
  }
}

class OrderFetcher {
  constructor(apiKey,url) {
    this.apiKey = apiKey;
    this.url = url;
  }

  async fetchOrders(callback) {
    try {
      const options = {
        method: "GET",
        url: this.url,
        headers: {
          accept: "application/json",
          "X-API-KEY": this.apiKey,
        },
        params: {
          limit: 2000,
        },
      };

      const response = await axios.request(options);
      callback(response);

    } catch (err) {
      console.error("Error fetching orders:", err.response?.data || err);
    }
  }
}

function initializeDatabase() {
  const dbFolderPath = path.join(__dirname, 'database');
  const dbFilePath = path.join(dbFolderPath, 'orders.db');

  if (!fs.existsSync(dbFolderPath)) {
    fs.mkdirSync(dbFolderPath);
  }

  return new sqlite3.Database(dbFilePath, (err) => {
    if (err) {
      console.error("Database connection error:", err);
      return;
    }
    database.run(`CREATE TABLE IF NOT EXISTS ${TABLE.ORDERS} (id TEXT PRIMARY KEY, data TEXT)`, (err) => {
      if (err) {
        console.error('Table creation error:', err);
      }
    });
  });
}

const database = initializeDatabase();

const orderFetcher = new OrderFetcher(process.env.API_KEY, FETCH_ENDOPOINT);
const fetch = () => orderFetcher.fetchOrders(response => putIntoDatabase( parseOrders(response)));


const parseOrders = (response) => response.data.Results.map((order) => {
  let totalPrice = 0;

  const products = order.orderDetails.productsResults.map((p) => {
    const { productId, productOrderPrice, productQuantity } = p;

    const price = parseFloat(productOrderPrice) || 0;
    const quantity = parseInt(productQuantity, 10) || 0;

    totalPrice += price * quantity;

    return {
      productID: productId,
      quantity,
    };
  });

  return new Order(order.orderId, products, totalPrice);
});

const putIntoDatabase = (orders) => {
  orders.forEach((order) => {
    database.run(`REPLACE INTO ${TABLE.ORDERS} (id, data) VALUES (?, ?)`, [
      order.orderID,
      JSON.stringify(order),
    ]);
  });
}

const validateOrderID = (id) => {
  if (!id || typeof id !== 'string') {
    return false;
  }
  const idPattern = /^[a-zA-Z0-9@.-]+$/;
  return idPattern.test(id);
};

app.get("/orders/csv", (req, res) => {
  database.all(`SELECT data FROM ${TABLE.ORDERS}`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const orders = rows.map((row) => JSON.parse(row.data));
    const parser = new Parser({ fields: ["orderID", "orderWorth"] });
    const csv = parser.parse(orders);
    res.header("Content-Type", "text/csv");
    res.attachment("orders.csv");
    res.send(csv);
  });
});

app.get("/orders", (req, res) => {
  const { minWorth, maxWorth } = req.query;
  let query = `SELECT data FROM ${TABLE.ORDERS}`;
  let params = [];

  const min = parseFloat(minWorth) || 0;
  const max = parseFloat(maxWorth) || Number.MAX_SAFE_INTEGER;

  if (min || max !== Number.MAX_SAFE_INTEGER) {
    query += " WHERE json_extract(data, '$.orderWorth') BETWEEN ? AND ?";
    params.push(min, max);
  }

  database.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows.map((row) => JSON.parse(row.data)));
  });
});


app.get("/orders/:id", (req, res) => {
  const orderId = req.params.id;

  if (!validateOrderID(orderId)) {
    return res.status(400).json({ error: "Invalid order ID" });
  }

  database.get("SELECT data FROM orders WHERE id = ?", [orderId], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Order not found" });
    res.json(JSON.parse(row.data));
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

fetch();
cron.schedule("0 0 * * *", fetch);

