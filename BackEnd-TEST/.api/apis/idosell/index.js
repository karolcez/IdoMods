"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'idosell/v5.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Method that enables extracting customer balance information from existing customer
     * accounts.
     *
     * @summary clients/balance
     */
    SDK.prototype.clientsBalanceGet = function (metadata) {
        return this.core.fetch('/clients/balance', 'get', metadata);
    };
    /**
     * Method that allows for customer account balance operations.
     *
     * @summary clients/balance
     */
    SDK.prototype.clientsBalancePost = function (body) {
        return this.core.fetch('/clients/balance', 'post', body);
    };
    /**
     * Method that enables extracting customer account details.
     *
     * @summary clients/clients
     */
    SDK.prototype.clientsClientsGet = function (metadata) {
        return this.core.fetch('/clients/clients', 'get', metadata);
    };
    /**
     * Method that enables adding new customer accounts to the IdoSell Shop administration
     * panel.
     *
     * @summary clients/clients
     */
    SDK.prototype.clientsClientsPost = function (body) {
        return this.core.fetch('/clients/clients', 'post', body);
    };
    /**
     * Method enables modifying existing customer account data.
     *
     * @summary clients/clients
     */
    SDK.prototype.clientsClientsPut = function (body) {
        return this.core.fetch('/clients/clients', 'put', body);
    };
    /**
     * The method allows to download information about customers from the CRM module assigned
     * to stores to which the user has rights.
     *
     * @summary clients/crm/search
     */
    SDK.prototype.clientsCrmSearchPost = function (body) {
        return this.core.fetch('/clients/crm/search', 'post', body);
    };
    /**
     * The method allows you to delete unused delivery addresses for customer accounts in the
     * IdoSell Shop administration panel
     *
     * @summary clients/deliveryAddress/delete
     */
    SDK.prototype.clientsDeliveryAddressDeletePost = function (body) {
        return this.core.fetch('/clients/deliveryAddress/delete', 'post', body);
    };
    /**
     * Method that enables extracting information about delivery addresses assigned to existing
     * customer accounts.
     *
     * @summary clients/deliveryAddress
     */
    SDK.prototype.clientsDeliveryAddressGet = function (metadata) {
        return this.core.fetch('/clients/deliveryAddress', 'get', metadata);
    };
    /**
     * Method that enables adding delivery address details to existing customer accounts.
     *
     * @summary clients/deliveryAddress
     */
    SDK.prototype.clientsDeliveryAddressPost = function (body) {
        return this.core.fetch('/clients/deliveryAddress', 'post', body);
    };
    /**
     * Method that enables editing the delivery address details for existing customer accounts.
     *
     * @summary clients/deliveryAddress
     */
    SDK.prototype.clientsDeliveryAddressPut = function (body) {
        return this.core.fetch('/clients/deliveryAddress', 'put', body);
    };
    /**
     * Method that enables setting external system codes for existing customer accounts.
     *
     * @summary clients/externalCode
     */
    SDK.prototype.clientsExternalCodePut = function (body) {
        return this.core.fetch('/clients/externalCode', 'put', body);
    };
    /**
     * Enables gift card blocking
     *
     * @summary clients/giftcards/block
     */
    SDK.prototype.clientsGiftcardsBlockPut = function (body) {
        return this.core.fetch('/clients/giftcards/block', 'put', body);
    };
    /**
     * Enables deleting a single or a list of gift cards
     *
     * @summary clients/giftcards/delete
     */
    SDK.prototype.clientsGiftcardsDeletePost = function (body) {
        return this.core.fetch('/clients/giftcards/delete', 'post', body);
    };
    /**
     * Enables adding new gift cards with the selected card type
     *
     * @summary clients/giftcards
     */
    SDK.prototype.clientsGiftcardsPost = function (body) {
        return this.core.fetch('/clients/giftcards', 'post', body);
    };
    /**
     * Enables editing gift parameters, e.g. changing its balance, validity date, number or PIN
     *
     * @summary clients/giftcards
     */
    SDK.prototype.clientsGiftcardsPut = function (body) {
        return this.core.fetch('/clients/giftcards', 'put', body);
    };
    /**
     * Enables searching for gift cards and retrieving information about indicated gift cards
     *
     * @summary clients/giftcards/search
     */
    SDK.prototype.clientsGiftcardsSearchPost = function (body) {
        return this.core.fetch('/clients/giftcards/search', 'post', body);
    };
    /**
     * Allows for downloading all types of gift cards defined in the administration panel
     *
     * @summary clients/giftcards/types
     */
    SDK.prototype.clientsGiftcardsTypesGet = function (metadata) {
        return this.core.fetch('/clients/giftcards/types', 'get', metadata);
    };
    /**
     * Enables gift card unblocking
     *
     * @summary clients/giftcards/unblock
     */
    SDK.prototype.clientsGiftcardsUnblockPut = function (body) {
        return this.core.fetch('/clients/giftcards/unblock', 'put', body);
    };
    /**
     * Method that enables extracting information about loyalty cards available in the
     * administration panel.
     *
     * @summary clients/membershipCards
     */
    SDK.prototype.clientsMembershipCardsGet = function (metadata) {
        return this.core.fetch('/clients/membershipCards', 'get', metadata);
    };
    /**
     * Method that enables assigning loyalty cards to customer accounts.
     *
     * @summary clients/membershipCards
     */
    SDK.prototype.clientsMembershipCardsPut = function (body) {
        return this.core.fetch('/clients/membershipCards', 'put', body);
    };
    /**
     * Method that enables extracting a list of customer accounts that agreed / did not agree
     * to receiving email newsletters.
     *
     * @summary clients/newsletter/email/search
     */
    SDK.prototype.clientsNewsletterEmailSearchPost = function (body) {
        return this.core.fetch('/clients/newsletter/email/search', 'post', body);
    };
    /**
     * Method that enables extracting a list of customer accounts that agreed / did not agree
     * to receiving text message newsletters.
     *
     * @summary clients/newsletter/sms/search
     */
    SDK.prototype.clientsNewsletterSmsSearchPost = function (body) {
        return this.core.fetch('/clients/newsletter/sms/search', 'post', body);
    };
    /**
     * The method allows you to delete unused buyer addresses for customer accounts in the
     * IdoSell Shop administration panel
     *
     * @summary clients/payerAddress/delete
     */
    SDK.prototype.clientsPayerAddressDeletePost = function (body) {
        return this.core.fetch('/clients/payerAddress/delete', 'post', body);
    };
    /**
     * The method allows to retrieve buyer's addresses from sales documents, for existing
     * customer accounts in the IdoSell administration panel.
     *
     * @summary clients/payerAddress
     */
    SDK.prototype.clientsPayerAddressGet = function (metadata) {
        return this.core.fetch('/clients/payerAddress', 'get', metadata);
    };
    /**
     * The method allows to add buyer's addresses to sales documents, for existing customer
     * accounts in the IdoSell administration panel.
     *
     * @summary clients/payerAddress
     */
    SDK.prototype.clientsPayerAddressPost = function (body) {
        return this.core.fetch('/clients/payerAddress', 'post', body);
    };
    /**
     * The method allows to modify buyer's addresses in sales documents, for existing customer
     * accounts in the IdoSell administration panel.
     *
     * @summary clients/payerAddress
     */
    SDK.prototype.clientsPayerAddressPut = function (body) {
        return this.core.fetch('/clients/payerAddress', 'put', body);
    };
    /**
     * The getClients method returns a list of customer IDs assigned to an individual price
     * list
     *
     * @summary clients/pricelists/clients
     */
    SDK.prototype.clientsPricelistsClientsGet = function (metadata) {
        return this.core.fetch('/clients/pricelists/clients', 'get', metadata);
    };
    /**
     * The setClients method allows you to assign customers to an individual price list
     *
     * @summary clients/pricelists/clients
     */
    SDK.prototype.clientsPricelistsClientsPut = function (body) {
        return this.core.fetch('/clients/pricelists/clients', 'put', body);
    };
    /**
     * The delete method enables to delete an individual pricelist. The pricelist must not be
     * associated with any customer. In order to check the clients related to the given group,
     * the getClients method shall be used.
     *
     * @summary clients/pricelists/delete
     */
    SDK.prototype.clientsPricelistsDeletePost = function (body) {
        return this.core.fetch('/clients/pricelists/delete', 'post', body);
    };
    /**
     * The get method allows you to download individual price lists available in the
     * administration panel
     *
     * @summary clients/pricelists
     */
    SDK.prototype.clientsPricelistsGet = function (metadata) {
        return this.core.fetch('/clients/pricelists', 'get', metadata);
    };
    /**
     * The insert method enables you to add a new individual price list to the administration
     * panel
     *
     * @summary clients/pricelists
     */
    SDK.prototype.clientsPricelistsPost = function (body) {
        return this.core.fetch('/clients/pricelists', 'post', body);
    };
    /**
     * The update method allows you to change the individual price list.
     *
     * @summary clients/pricelists
     */
    SDK.prototype.clientsPricelistsPut = function (body) {
        return this.core.fetch('/clients/pricelists', 'put', body);
    };
    /**
     * The getProducts method enables the retrieval of products from an individual price list
     * together with the price
     *
     * @summary clients/pricelists/products
     */
    SDK.prototype.clientsPricelistsProductsGet = function (metadata) {
        return this.core.fetch('/clients/pricelists/products', 'get', metadata);
    };
    /**
     * The setProducts method allows you to add goods to an individual price list and specify
     * their price
     *
     * @summary clients/pricelists/products
     */
    SDK.prototype.clientsPricelistsProductsPut = function (body) {
        return this.core.fetch('/clients/pricelists/products', 'put', body);
    };
    /**
     * The rename method enables changing the name of an individual price list
     *
     * @summary clients/pricelists/rename
     */
    SDK.prototype.clientsPricelistsRenamePut = function (body) {
        return this.core.fetch('/clients/pricelists/rename', 'put', body);
    };
    /**
     * Method that enables getting information about active customer loyalty cards assigned to
     * customer accounts in the administration panel.
     *
     * @summary clients/prices/activeCard
     */
    SDK.prototype.clientsPricesActiveCardGet = function () {
        return this.core.fetch('/clients/prices/activeCard', 'get');
    };
    /**
     * Method that enables extracting information about discount groups configured in the
     * administration panel.
     *
     * @summary clients/prices/discountGroups
     */
    SDK.prototype.clientsPricesDiscountGroupsGet = function (metadata) {
        return this.core.fetch('/clients/prices/discountGroups', 'get', metadata);
    };
    /**
     * Method that allows for extracting information about individual discounts assigned to
     * customer accounts.
     *
     * @summary clients/prices/discounts
     */
    SDK.prototype.clientsPricesDiscountsGet = function (metadata) {
        return this.core.fetch('/clients/prices/discounts', 'get', metadata);
    };
    /**
     * Method that enables assigning individual discount to existing customer accounts.
     *
     * @summary clients/prices/discounts
     */
    SDK.prototype.clientsPricesDiscountsPut = function (body) {
        return this.core.fetch('/clients/prices/discounts', 'put', body);
    };
    /**
     * Method that enables extracting information about the amount of loyalty points collected
     * by customers in a loyalty program.
     *
     * @summary clients/profitPoints
     */
    SDK.prototype.clientsProfitPointsGet = function (metadata) {
        return this.core.fetch('/clients/profitPoints', 'get', metadata);
    };
    /**
     * Method that allows for adding loyalty points to the balances of existing customer
     * accounts.
     *
     * @summary clients/profitPoints
     */
    SDK.prototype.clientsProfitPointsPost = function (body) {
        return this.core.fetch('/clients/profitPoints', 'post', body);
    };
    /**
     * The method allows to retrieve the list of administrative regions available in the
     * IdoSell administration panel.
     *
     * @summary clients/provinceList
     */
    SDK.prototype.clientsProvinceListGet = function (metadata) {
        return this.core.fetch('/clients/provinceList', 'get', metadata);
    };
    /**
     * This call is used to remove client's personal data and blocks the account.
     *
     * @summary clients/remove
     */
    SDK.prototype.clientsRemoveDelete = function (metadata) {
        return this.core.fetch('/clients/remove', 'delete', metadata);
    };
    /**
     * Use this method to delete all tags assigned to a customer
     *
     * @summary clients/tags/clear/delete
     */
    SDK.prototype.clientsTagsClearDeletePost = function (body) {
        return this.core.fetch('/clients/tags/clear/delete', 'post', body);
    };
    /**
     * Use this method to delete selected tags assigned to a customer
     *
     * @summary clients/tags/delete
     */
    SDK.prototype.clientsTagsDeletePost = function (body) {
        return this.core.fetch('/clients/tags/delete', 'post', body);
    };
    /**
     * Use this method to retrieve all tags assigned to a client
     *
     * @summary clients/tags
     */
    SDK.prototype.clientsTagsGet = function (metadata) {
        return this.core.fetch('/clients/tags', 'get', metadata);
    };
    /**
     * Use this method to add new tags and their associated values to the client
     *
     * @summary clients/tags
     */
    SDK.prototype.clientsTagsPost = function (body) {
        return this.core.fetch('/clients/tags', 'post', body);
    };
    /**
     * The method is used to update the value of the tags assigned to the client. A tag with
     * value 0 is detached from the client
     *
     * @summary clients/tags
     */
    SDK.prototype.clientsTagsPut = function (body) {
        return this.core.fetch('/clients/tags', 'put', body);
    };
    /**
     * This call returns config variables for given module (type)
     *
     * @summary config/variables
     */
    SDK.prototype.configVariablesGet = function (metadata) {
        return this.core.fetch('/config/variables', 'get', metadata);
    };
    /**
     * Use this operation to update snippet campaigns.
     *
     * @summary config/variables
     */
    SDK.prototype.configVariablesPut = function (body) {
        return this.core.fetch('/config/variables', 'put', body);
    };
    /**
     * This call is used to remove defined configuration variables.
     *
     * @summary config/variables
     */
    SDK.prototype.configVariablesDelete = function (metadata) {
        return this.core.fetch('/config/variables', 'delete', metadata);
    };
    /**
     * Retrieves information about assigned couriers to delivery profiles
     *
     * @summary couriers/assignedToShippingProfiles
     */
    SDK.prototype.couriersAssignedToShippingProfilesGet = function () {
        return this.core.fetch('/couriers/assignedToShippingProfiles', 'get');
    };
    /**
     * Method that returns all couriers available for a given country. It also returns
     * information whether the courier service handles personal collections.
     *
     * @summary couriers/couriers
     */
    SDK.prototype.couriersCouriersGet = function (metadata) {
        return this.core.fetch('/couriers/couriers', 'get', metadata);
    };
    /**
     * The method enables cancelling personal collection points within your own collection
     * points chain. It does not allow for modifying integrated couriers collection points.
     *
     * @summary couriers/pickupPoints/delete
     */
    SDK.prototype.couriersPickupPointsDeletePost = function (body) {
        return this.core.fetch('/couriers/pickupPoints/delete', 'post', body);
    };
    /**
     * The method returns personal collection points within its own network of collection
     * points and for integrated couriers.
     *
     * @summary couriers/pickupPoints
     */
    SDK.prototype.couriersPickupPointsGet = function (metadata) {
        return this.core.fetch('/couriers/pickupPoints', 'get', metadata);
    };
    /**
     * The method enables adding personal collection points within your own collection points
     * chain. It does not allow for modifying integrated couriers collection points.
     *
     * @summary couriers/pickupPoints
     */
    SDK.prototype.couriersPickupPointsPost = function (body) {
        return this.core.fetch('/couriers/pickupPoints', 'post', body);
    };
    /**
     * The method enables updating personal collection points within your own collection points
     * chain. It does not allow for modifying integrated couriers collection points.
     *
     * @summary couriers/pickupPoints
     */
    SDK.prototype.couriersPickupPointsPut = function (body) {
        return this.core.fetch('/couriers/pickupPoints', 'put', body);
    };
    /**
     * This call returns all CPA campaigns.
     *
     * @summary cpa/campaign
     */
    SDK.prototype.cpaCampaignGet = function (metadata) {
        return this.core.fetch('/cpa/campaign', 'get', metadata);
    };
    /**
     * Use this operation to create cpa campaigns.
     *
     * @summary cpa/campaign
     */
    SDK.prototype.cpaCampaignPost = function (body) {
        return this.core.fetch('/cpa/campaign', 'post', body);
    };
    /**
     * Use this operation to update CPA campaigns.
     *
     * @summary cpa/campaign
     */
    SDK.prototype.cpaCampaignPut = function (body) {
        return this.core.fetch('/cpa/campaign', 'put', body);
    };
    /**
     * This call is used to remove CPA program campaign.
     *
     * @summary cpa/campaign
     */
    SDK.prototype.cpaCampaignDelete = function (metadata) {
        return this.core.fetch('/cpa/campaign', 'delete', metadata);
    };
    /**
     * This call returns all cpa programs.
     *
     * @summary cpa/cpa
     */
    SDK.prototype.cpaCpaGet = function (metadata) {
        return this.core.fetch('/cpa/cpa', 'get', metadata);
    };
    /**
     * Use this operation to create code snippet.
     *
     * @summary cpa/cpa
     */
    SDK.prototype.cpaCpaPost = function (body) {
        return this.core.fetch('/cpa/cpa', 'post', body);
    };
    /**
     * Use this operation to update code snippet.
     *
     * @summary cpa/cpa
     */
    SDK.prototype.cpaCpaPut = function (body) {
        return this.core.fetch('/cpa/cpa', 'put', body);
    };
    /**
     * This call is used to remove CPA programs.
     *
     * @summary cpa/cpa
     */
    SDK.prototype.cpaCpaDelete = function (metadata) {
        return this.core.fetch('/cpa/cpa', 'delete', metadata);
    };
    /**
     * The method allows to set the default delivery profile for the given region.
     *
     * @summary deliveries/defaultProfiles
     */
    SDK.prototype.deliveriesDefaultProfilesPut = function (body) {
        return this.core.fetch('/deliveries/defaultProfiles', 'put', body);
    };
    /**
     * Allows to download all of the delivery profiles defined in the administration panel
     *
     * @summary deliveries/profiles
     */
    SDK.prototype.deliveriesProfilesGet = function (metadata) {
        return this.core.fetch('/deliveries/profiles', 'get', metadata);
    };
    /**
     * The method allows to download a list of regions supporting deliveries.
     *
     * @summary deliveries/regions
     */
    SDK.prototype.deliveriesRegionsGet = function (metadata) {
        return this.core.fetch('/deliveries/regions', 'get', metadata);
    };
    /**
     * Allows you to add a region to the indicated country
     *
     * @summary deliveries/regions
     */
    SDK.prototype.deliveriesRegionsPost = function (body) {
        return this.core.fetch('/deliveries/regions', 'post', body);
    };
    /**
     * Returns the list of customer IDs assigned to an indicated discount group. In order to
     * assign a discount group, use setClients method in API Clients.
     *
     * @summary discounts/groups/clients
     */
    SDK.prototype.discountsGroupsClientsGet = function (metadata) {
        return this.core.fetch('/discounts/groups/clients', 'get', metadata);
    };
    /**
     * Allows to remove a discount group. The condition for conducting this process is no
     * customers assigned to the indicated group. In order to check the assigned customers use
     * getClientsAssignedToDiscountGroup method.
     *
     * @summary discounts/groups/delete
     */
    SDK.prototype.discountsGroupsDeletePost = function (body) {
        return this.core.fetch('/discounts/groups/delete', 'post', body);
    };
    /**
     * Method that enables extracting information about discount groups configured in the
     * administration panel.
     *
     * @summary discounts/groups
     */
    SDK.prototype.discountsGroupsGet = function (metadata) {
        return this.core.fetch('/discounts/groups', 'get', metadata);
    };
    /**
     * Allows to add a new discount group in the administration panel. The discount group is
     * added by default with the setting "Discount for products - yes, but different for
     * indicated groups".
     *
     * @summary discounts/groups
     */
    SDK.prototype.discountsGroupsPost = function (body) {
        return this.core.fetch('/discounts/groups', 'post', body);
    };
    /**
     * Allows to change a discount group name
     *
     * @summary discounts/groups
     */
    SDK.prototype.discountsGroupsPut = function (body) {
        return this.core.fetch('/discounts/groups', 'put', body);
    };
    /**
     * The method allows the removal of products from a discount group
     *
     * @summary discounts/groups/products/delete
     */
    SDK.prototype.discountsGroupsProductsDeletePost = function (body) {
        return this.core.fetch('/discounts/groups/products/delete', 'post', body);
    };
    /**
     * The method allows products to be added to a discount group and their price to be
     * specified in the discount group
     *
     * @summary discounts/groups/products
     */
    SDK.prototype.discountsGroupsProductsPut = function (body) {
        return this.core.fetch('/discounts/groups/products', 'put', body);
    };
    /**
     * Allows to block an indicated discount card, eg. when it is assumed that its number has
     * been made available publicly. The blocked card can be unblocked with the method
     * unblockRebateCard.
     *
     * @summary discounts/rebates/blockCard
     */
    SDK.prototype.discountsRebatesBlockCardPut = function (body) {
        return this.core.fetch('/discounts/rebates/blockCard', 'put', body);
    };
    /**
     * Method allows to quickly delete all the discount codes, which have never been used by
     * customers, from an indicated rebate campaign. Codes which have been used at least once,
     * will not be deleted.
     *
     * @summary discounts/rebates/card/delete
     */
    SDK.prototype.discountsRebatesCardDeletePost = function (body) {
        return this.core.fetch('/discounts/rebates/card/delete', 'post', body);
    };
    /**
     * Allows to upload new card numbers to already existing discount card types in the
     * administration panel. Cards uploaded such way retrieve settings, regarding the discount
     * amount, from the type of cards to which they are uploaded. Every card can also have
     * individual, independent discount settings which can be set in the administration panel..
     *
     * @summary discounts/rebates/card
     */
    SDK.prototype.discountsRebatesCardPost = function (body) {
        return this.core.fetch('/discounts/rebates/card', 'post', body);
    };
    /**
     * Allows to quickly delete all the discount codes, which have never been used by
     * customers, from an indicated rebate campaign. Codes which have been used at least once,
     * will not be deleted.
     *
     * @summary discounts/rebates/code/delete
     */
    SDK.prototype.discountsRebatesCodeDeletePost = function (body) {
        return this.core.fetch('/discounts/rebates/code/delete', 'post', body);
    };
    /**
     * Allows to upload new code numbers to already existing rebate campaigns in the
     * administration panel. The codes uploaded in such way retrieve settings, regarding the
     * discount amount, from a campaign to which they are uploaded. Each discount code can also
     * have individual, independent discount settings which can be set in the administration
     * panel.
     *
     * @summary discounts/rebates/code
     */
    SDK.prototype.discountsRebatesCodePost = function (body) {
        return this.core.fetch('/discounts/rebates/code', 'post', body);
    };
    /**
     * unblockRebateCard method - allows to unblock discount cards. Block cards with the
     * blockRebateCard method.
     *
     * @summary discounts/rebates/unblockCard
     */
    SDK.prototype.discountsRebatesUnblockCardPut = function (body) {
        return this.core.fetch('/discounts/rebates/unblockCard', 'put', body);
    };
    /**
     * Enables deleting blog or news entry
     *
     * @summary entries/entries/delete
     */
    SDK.prototype.entriesEntriesDeletePost = function (body) {
        return this.core.fetch('/entries/entries/delete', 'post', body);
    };
    /**
     * Enables downloading blog or news entry data
     *
     * @summary entries/entries
     */
    SDK.prototype.entriesEntriesGet = function (metadata) {
        return this.core.fetch('/entries/entries', 'get', metadata);
    };
    /**
     * Enables adding blog or news entry
     *
     * @summary entries/entries
     */
    SDK.prototype.entriesEntriesPost = function (body) {
        return this.core.fetch('/entries/entries', 'post', body);
    };
    /**
     * Enables changing blog or news entry in the shop
     *
     * @summary entries/entries
     */
    SDK.prototype.entriesEntriesPut = function (body) {
        return this.core.fetch('/entries/entries', 'put', body);
    };
    /**
     * Allows you to download a list of sites on which a blog entry or a news item can be
     * published.
     *
     * @summary entries/pagesToDisplay
     */
    SDK.prototype.entriesPagesToDisplayGet = function (metadata) {
        return this.core.fetch('/entries/pagesToDisplay', 'get', metadata);
    };
    /**
     * This call returns all entry sources with options.
     *
     * @summary entries/sources
     */
    SDK.prototype.entriesSourcesGet = function (metadata) {
        return this.core.fetch('/entries/sources', 'get', metadata);
    };
    /**
     * The method returns information about filter settings in menu nodes.
     *
     * @summary menu/filter
     */
    SDK.prototype.menuFilterGet = function (metadata) {
        return this.core.fetch('/menu/filter', 'get', metadata);
    };
    /**
     * The method allows you to manage filter settings in menu nodes.
     *
     * @summary menu/filter
     */
    SDK.prototype.menuFilterPut = function (body) {
        return this.core.fetch('/menu/filter', 'put', body);
    };
    /**
     * Method that enables deleting existing menu elements.
     *
     * @summary menu/menu/delete
     */
    SDK.prototype.menuMenuDeletePost = function (body) {
        return this.core.fetch('/menu/menu/delete', 'post', body);
    };
    /**
     * Method that returns information about menus and menu elements.
     *
     * @summary menu/menu
     */
    SDK.prototype.menuMenuGet = function (metadata) {
        return this.core.fetch('/menu/menu', 'get', metadata);
    };
    /**
     * Method that enables adding new menu elements.
     *
     * @summary menu/menu
     */
    SDK.prototype.menuMenuPost = function (body) {
        return this.core.fetch('/menu/menu', 'post', body);
    };
    /**
     * Method that enables editing existing menu elements.
     *
     * @summary menu/menu
     */
    SDK.prototype.menuMenuPut = function (body) {
        return this.core.fetch('/menu/menu', 'put', body);
    };
    /**
     * Method that enables sorting of menu elements.
     *
     * @summary menu/sort
     */
    SDK.prototype.menuSortPut = function (body) {
        return this.core.fetch('/menu/sort', 'put', body);
    };
    /**
     * The method is used to retrieve information about the margins of the goods of the order.
     *
     * @summary orders/analytics
     */
    SDK.prototype.ordersAnalyticsGet = function (metadata) {
        return this.core.fetch('/orders/analytics', 'get', metadata);
    };
    /**
     * Method that enables getting information about external listings assigned to orders in
     * the administration panel.
     *
     * @summary orders/auctionDetails
     */
    SDK.prototype.ordersAuctionDetailsGet = function (metadata) {
        return this.core.fetch('/orders/auctionDetails', 'get', metadata);
    };
    /**
     * orders/client
     *
     */
    SDK.prototype.ordersClientPut = function (body) {
        return this.core.fetch('/orders/client', 'put', body);
    };
    /**
     * Method that enables changing the courier handling the shipment for an order.
     *
     * @summary orders/courier
     */
    SDK.prototype.ordersCourierPut = function (body) {
        return this.core.fetch('/orders/courier', 'put', body);
    };
    /**
     * Method that enables editing the delivery address details for an order in the
     * administration panel.
     *
     * @summary orders/deliveryAddress
     */
    SDK.prototype.ordersDeliveryAddressPut = function (body) {
        return this.core.fetch('/orders/deliveryAddress', 'put', body);
    };
    /**
     * Method for division order
     *
     * @summary orders/devide
     */
    SDK.prototype.ordersDevidePut = function (body) {
        return this.core.fetch('/orders/devide', 'put', body);
    };
    /**
     * The method allows to generate documents to the order in the IdoSell administration
     * panel.
     *
     * @summary orders/documents/create
     */
    SDK.prototype.ordersDocumentsCreatePost = function (body) {
        return this.core.fetch('/orders/documents/create', 'post', body);
    };
    /**
     * The method allows to delete documents added to the order in the IdoSell administration
     * panel.
     *
     * @summary orders/documents/delete
     */
    SDK.prototype.ordersDocumentsDeletePost = function (body) {
        return this.core.fetch('/orders/documents/delete', 'post', body);
    };
    /**
     * Method that enables extracting information about documents issued for orders in the
     * administration panel.
     *
     * @summary orders/documents
     */
    SDK.prototype.ordersDocumentsGet = function (metadata) {
        return this.core.fetch('/orders/documents', 'get', metadata);
    };
    /**
     * The method allows to add TIFF, BMP, PNG, JPG, JPEG, GIF or PDF documents to the order in
     * the IdoSell Shop administration panel.
     *
     * @summary orders/documents
     */
    SDK.prototype.ordersDocumentsPost = function (body) {
        return this.core.fetch('/orders/documents', 'post', body);
    };
    /**
     * This method returns sales and warehouse documents in the universal EDI (Electronic Data
     * Interchange) format.
     *
     * @summary orders/exportdocuments/EPP
     */
    SDK.prototype.ordersExportdocumentsEPPGet = function (metadata) {
        return this.core.fetch('/orders/exportdocuments/EPP', 'get', metadata);
    };
    /**
     * Method returns sales and warehouse documents in universal JPK format.
     *
     * @summary orders/exportdocuments/JPK
     */
    SDK.prototype.ordersExportdocumentsJPKGet = function (metadata) {
        return this.core.fetch('/orders/exportdocuments/JPK', 'get', metadata);
    };
    /**
     * Method that enables getting information about the handler currently assigned to an
     * order.
     *
     * @summary orders/handler
     */
    SDK.prototype.ordersHandlerGet = function (metadata) {
        return this.core.fetch('/orders/handler', 'get', metadata);
    };
    /**
     * Method that enabled assigning a handler to an order.
     *
     * @summary orders/handler
     */
    SDK.prototype.ordersHandlerPut = function (body) {
        return this.core.fetch('/orders/handler', 'put', body);
    };
    /**
     * Method allows to retrieve orders history from the IdoSell Shop panel
     *
     * @summary orders/history
     */
    SDK.prototype.ordersHistoryGet = function (metadata) {
        return this.core.fetch('/orders/history', 'get', metadata);
    };
    /**
     * Method allows to remove image attachments from the details of the specified order.
     *
     * @summary orders/images/delete
     */
    SDK.prototype.ordersImagesDeletePost = function (body) {
        return this.core.fetch('/orders/images/delete', 'post', body);
    };
    /**
     * Method allows downloading image attachment data from the details of the specified order.
     *
     * @summary orders/images
     */
    SDK.prototype.ordersImagesGet = function (metadata) {
        return this.core.fetch('/orders/images', 'get', metadata);
    };
    /**
     * Method allows to add image attachments to the details of the specified order.
     *
     * @summary orders/images
     */
    SDK.prototype.ordersImagesPost = function (body) {
        return this.core.fetch('/orders/images', 'post', body);
    };
    /**
     * The method is used to generate parcels and printouts for a courier.
     *
     * @summary orders/labels
     */
    SDK.prototype.ordersLabelsGet = function (metadata) {
        return this.core.fetch('/orders/labels', 'get', metadata);
    };
    /**
     * The method allows for downloading information about reviews issued for orders available
     * in the IdoSell Shop administration panel.
     *
     * @summary orders/opinions/search
     */
    SDK.prototype.ordersOpinionsSearchPost = function (body) {
        return this.core.fetch('/orders/opinions/search', 'post', body);
    };
    /**
     * Evaluation of the usefulness of opinions issued for orders.
     *
     * @summary orders/opinionsRate
     */
    SDK.prototype.ordersOpinionsRateGet = function (metadata) {
        return this.core.fetch('/orders/opinionsRate', 'get', metadata);
    };
    /**
     * Method that enables extracting information about orders present in the IdoSell Shop
     * administration panel.
     *
     * @summary orders/orders
     */
    SDK.prototype.ordersOrdersGet = function (metadata) {
        return this.core.fetch('/orders/orders', 'get', metadata);
    };
    /**
     * Method that is used for adding new retail or wholesale orders to a shop in the
     * administration panel.
     *
     * @summary orders/orders
     */
    SDK.prototype.ordersOrdersPost = function (body) {
        return this.core.fetch('/orders/orders', 'post', body);
    };
    /**
     * Method that enables editing an order in the administration panel. It allows, for
     * example, to change the products included in the order or change its status.
     *
     * @summary orders/orders
     */
    SDK.prototype.ordersOrdersPut = function (body) {
        return this.core.fetch('/orders/orders', 'put', body);
    };
    /**
     * Method that enables extracting information about orders present in the IdoSell Shop
     * administration panel.
     *
     * @summary orders/orders/search
     */
    SDK.prototype.ordersOrdersSearchPost = function (body) {
        return this.core.fetch('/orders/orders/search', 'post', body);
    };
    /**
     * Method that enables getting a list of parcels assigned to an order.
     *
     * @summary orders/packages
     */
    SDK.prototype.ordersPackagesGet = function (metadata) {
        return this.core.fetch('/orders/packages', 'get', metadata);
    };
    /**
     * Method that enables editing parcels already assigned to an order.
     *
     * @summary orders/packages
     */
    SDK.prototype.ordersPackagesPost = function (body) {
        return this.core.fetch('/orders/packages', 'post', body);
    };
    /**
     * Method that enables editing parcels already assigned to an order.
     *
     * @summary orders/packages
     */
    SDK.prototype.ordersPackagesPut = function (body) {
        return this.core.fetch('/orders/packages', 'put', body);
    };
    /**
     * The method allows to change the collection point in the order.
     *
     * @summary orders/pickupPoint
     */
    SDK.prototype.ordersPickupPointPut = function (body) {
        return this.core.fetch('/orders/pickupPoint', 'put', body);
    };
    /**
     * Method that enables getting a VAT invoice issued for an order added to the
     * administration panel by the IAI POS application.
     *
     * @summary orders/printerDocuments
     */
    SDK.prototype.ordersPrinterDocumentsGet = function (metadata) {
        return this.core.fetch('/orders/printerDocuments', 'get', metadata);
    };
    /**
     * Method that enables adding serial numbers to products in an order.
     *
     * @summary orders/productsSerialNumbers
     */
    SDK.prototype.ordersProductsSerialNumbersPut = function (body) {
        return this.core.fetch('/orders/productsSerialNumbers', 'put', body);
    };
    /**
     * Method that enables setting price margins for products in an order.
     *
     * @summary orders/profitMargin
     */
    SDK.prototype.ordersProfitMarginPut = function (body) {
        return this.core.fetch('/orders/profitMargin', 'put', body);
    };
    /**
     * The method is used to retrieve information about the profitability of an order
     *
     * @summary orders/profitability
     */
    SDK.prototype.ordersProfitabilityGet = function (metadata) {
        return this.core.fetch('/orders/profitability', 'get', metadata);
    };
    /**
     * Method that enables editing the delivery costs for an order in the administration panel.
     *
     * @summary orders/shippingCosts
     */
    SDK.prototype.ordersShippingCostsPut = function (body) {
        return this.core.fetch('/orders/shippingCosts', 'put', body);
    };
    /**
     * It allows you to download information about unclosed orders located in the store's
     * administration panel. Orders with a status of false and lost are considered closed.
     * Orders with a status of false and lost are considered closed.
     *
     * @summary orders/unfinished/search
     */
    SDK.prototype.ordersUnfinishedSearchPost = function (body) {
        return this.core.fetch('/orders/unfinished/search', 'post', body);
    };
    /**
     * Method that enables getting information about which warehouse an order is being handled
     * from.
     *
     * @summary orders/warehouse
     */
    SDK.prototype.ordersWarehouseGet = function (metadata) {
        return this.core.fetch('/orders/warehouse', 'get', metadata);
    };
    /**
     * Method that enables setting which warehouse an order is handled from.
     *
     * @summary orders/warehouse
     */
    SDK.prototype.ordersWarehousePut = function (body) {
        return this.core.fetch('/orders/warehouse', 'put', body);
    };
    /**
     * The method allows you to download labels for the courier from orders, complaints and
     * returns.
     *
     * @summary packages/labels
     */
    SDK.prototype.packagesLabelsGet = function (metadata) {
        return this.core.fetch('/packages/labels', 'get', metadata);
    };
    /**
     * The method is used to generate shipments and printouts for the courier in orders,
     * complaints and returns. When generating a label with a default courier configuration, it
     * is not necessary to complete the shipment configuration options. To generate a custom
     * label, you must additionally forward the shipment configuration options available to the
     * courier in a given event (parcelParameters node). Completable configuration options can
     * be checked using the getPackages method.
     *
     * @summary packages/labels
     */
    SDK.prototype.packagesLabelsPost = function (body) {
        return this.core.fetch('/packages/labels', 'post', body);
    };
    /**
     * Method that enables adding parcels to an order.
     *
     * @summary packages/packages
     */
    SDK.prototype.packagesPackagesPost = function (body) {
        return this.core.fetch('/packages/packages', 'post', body);
    };
    /**
     * Method that enables editing parcels already assigned to an order.
     *
     * @summary packages/packages
     */
    SDK.prototype.packagesPackagesPut = function (body) {
        return this.core.fetch('/packages/packages', 'put', body);
    };
    /**
     * Method that enables getting a list of parcels assigned to an order.
     *
     * @summary packages/packages/search
     */
    SDK.prototype.packagesPackagesSearchPost = function (body) {
        return this.core.fetch('/packages/packages/search', 'post', body);
    };
    /**
     * Method that enables cancelling payments for orders in the administration panel.
     *
     * @summary payments/cancel
     */
    SDK.prototype.paymentsCancelPost = function (body) {
        return this.core.fetch('/payments/cancel', 'post', body);
    };
    /**
     * The method allows to send refund requests (so called cashback) for payments managed by
     * external payment systems which have such option available..
     *
     * @summary payments/cashback
     */
    SDK.prototype.paymentsCashbackPost = function (body) {
        return this.core.fetch('/payments/cashback', 'post', body);
    };
    /**
     * Method that enables accepting payments for orders in the administration panel.
     *
     * @summary payments/confirm
     */
    SDK.prototype.paymentsConfirmPut = function (body) {
        return this.core.fetch('/payments/confirm', 'put', body);
    };
    /**
     * Method that enables getting information about payment methods available in the
     * administration panel.
     *
     * @summary payments/forms
     */
    SDK.prototype.paymentsFormsGet = function (metadata) {
        return this.core.fetch('/payments/forms', 'get', metadata);
    };
    /**
     * Method that enables getting information about payments for orders in the administration
     * panel.
     *
     * @summary payments/payments
     */
    SDK.prototype.paymentsPaymentsGet = function (metadata) {
        return this.core.fetch('/payments/payments', 'get', metadata);
    };
    /**
     * Method that enables adding payments to orders in the administration panel.
     *
     * @summary payments/payments
     */
    SDK.prototype.paymentsPaymentsPost = function (body) {
        return this.core.fetch('/payments/payments', 'post', body);
    };
    /**
     * Method that enables editing payments for orders in the administration panel.
     *
     * @summary payments/payments
     */
    SDK.prototype.paymentsPaymentsPut = function (body) {
        return this.core.fetch('/payments/payments', 'put', body);
    };
    /**
     * Allows to download all of the payment profiles defined in the administration panel
     *
     * @summary payments/profiles
     */
    SDK.prototype.paymentsProfilesGet = function (metadata) {
        return this.core.fetch('/payments/profiles', 'get', metadata);
    };
    /**
     * Method that enables adding withdrawals for orders in the administration panel.
     *
     * @summary payments/repayment
     */
    SDK.prototype.paymentsRepaymentPost = function (body) {
        return this.core.fetch('/payments/repayment', 'post', body);
    };
    /**
     * The method allows to download, among others, information on identifiers, names and size
     * codes, their available stock quantity and locations in the warehouse based on scanned
     * bar codes.
     *
     * @summary products/SKUbyBarcode
     */
    SDK.prototype.productsSKUbyBarcodeGet = function (metadata) {
        return this.core.fetch('/products/SKUbyBarcode', 'get', metadata);
    };
    /**
     * Method that enables adding and editing product attachments.
     *
     * @summary products/attachments
     */
    SDK.prototype.productsAttachmentsPut = function (body) {
        return this.core.fetch('/products/attachments', 'put', body);
    };
    /**
     * Allows for downloading information about auctions and auction categories to which the
     * product has been assigned (for a maximum of 100 products in one request)
     *
     * @summary products/auctions
     */
    SDK.prototype.productsAuctionsGet = function (metadata) {
        return this.core.fetch('/products/auctions', 'get', metadata);
    };
    /**
     * The method allows you to remove brands from the administration panel.
     *
     * @summary products/brands/delete
     */
    SDK.prototype.productsBrandsDeletePost = function (body) {
        return this.core.fetch('/products/brands/delete', 'post', body);
    };
    /**
     * The method allows you to download a list of filters for brands (manufacturers) available
     * in the IdoSell administration panel.
     *
     * @summary products/brands/filter
     */
    SDK.prototype.productsBrandsFilterGet = function (metadata) {
        return this.core.fetch('/products/brands/filter', 'get', metadata);
    };
    /**
     * The method allows you to manage filter settings for brands (manufacturers).
     *
     * @summary products/brands/filter
     */
    SDK.prototype.productsBrandsFilterPut = function (body) {
        return this.core.fetch('/products/brands/filter', 'put', body);
    };
    /**
     * Method that returns information about brands available in the IdoSell Shop
     * administration panel.
     *
     * @summary products/brands
     */
    SDK.prototype.productsBrandsGet = function (metadata) {
        return this.core.fetch('/products/brands', 'get', metadata);
    };
    /**
     * The method allows you to update brands information available in the administration
     * panel.
     *
     * @summary products/brands
     */
    SDK.prototype.productsBrandsPost = function (body) {
        return this.core.fetch('/products/brands', 'post', body);
    };
    /**
     * The method allows you to update brands information available in the administration
     * panel.
     *
     * @summary products/brands
     */
    SDK.prototype.productsBrandsPut = function (body) {
        return this.core.fetch('/products/brands', 'put', body);
    };
    /**
     * createBundle method allows to create a new product with a type: set and to assign
     * existing products as a set components. Products added via this gate are hidden from the
     * shop customer by default. To change the visibility of created products use the gate
     * setProducts or set it on a product card in the shop administration panel
     *
     * @summary products/bundles/bundles
     */
    SDK.prototype.productsBundlesBundlesPost = function (body) {
        return this.core.fetch('/products/bundles/bundles', 'post', body);
    };
    /**
     * removeProductsFromBundle method allows to remove indicated set components
     *
     * @summary products/bundles/products/delete
     */
    SDK.prototype.productsBundlesProductsDeletePost = function (body) {
        return this.core.fetch('/products/bundles/products/delete', 'post', body);
    };
    /**
     * addProductsToBundle method allows to add components to existing sets in the
     * administration panel
     *
     * @summary products/bundles/products
     */
    SDK.prototype.productsBundlesProductsPost = function (body) {
        return this.core.fetch('/products/bundles/products', 'post', body);
    };
    /**
     * setProductsQuantityInBundle method allows to indicate quantity of a set component
     *
     * @summary products/bundles/productsQuantity
     */
    SDK.prototype.productsBundlesProductsQuantityPut = function (body) {
        return this.core.fetch('/products/bundles/productsQuantity', 'put', body);
    };
    /**
     * the renewProductsInBundle method allows you to rebuild components of Sets existing in
     * the administration panel
     *
     * @summary products/bundles/renew
     */
    SDK.prototype.productsBundlesRenewPut = function (body) {
        return this.core.fetch('/products/bundles/renew', 'put', body);
    };
    /**
     * Method that returns information about categories configured in the administration panel.
     *
     * @summary products/categories
     */
    SDK.prototype.productsCategoriesGet = function (metadata) {
        return this.core.fetch('/products/categories', 'get', metadata);
    };
    /**
     * Method that enables adding new categories to the administration panel as well editing
     * and deleting of existing categories.
     *
     * @summary products/categories
     */
    SDK.prototype.productsCategoriesPut = function (body) {
        return this.core.fetch('/products/categories', 'put', body);
    };
    /**
     * Method returns information about IdoSell Categories available in store.
     *
     * @summary products/categoriesIdosell/search
     */
    SDK.prototype.productsCategoriesIdosellSearchPost = function (body) {
        return this.core.fetch('/products/categoriesIdosell/search', 'post', body);
    };
    /**
     * The method allows to check if a product with the given identification code (panel ID,
     * IAI code, manufacturer code, external system code) exists in the panel.
     *
     * @summary products/codeExistence
     */
    SDK.prototype.productsCodeExistenceGet = function (metadata) {
        return this.core.fetch('/products/codeExistence', 'get', metadata);
    };
    /**
     * createCollection method allows to create a new product with a type: collection and to
     * assign existing products as a collection components. Products added via this gate are
     * hidden from the shop customer by default. To change the visibility of created products
     * use the gate setProducts or set it on a product card in the shop administration panel
     *
     * @summary products/collections
     */
    SDK.prototype.productsCollectionsPost = function (body) {
        return this.core.fetch('/products/collections', 'post', body);
    };
    /**
     * removeProductsFromCollection method allows to remove indicated collection components
     *
     * @summary products/collections/products/delete
     */
    SDK.prototype.productsCollectionsProductsDeletePost = function (body) {
        return this.core.fetch('/products/collections/products/delete', 'post', body);
    };
    /**
     * addProductsToCollection method allows to add components to existing collections in the
     * administration panel
     *
     * @summary products/collections/products
     */
    SDK.prototype.productsCollectionsProductsPost = function (body) {
        return this.core.fetch('/products/collections/products', 'post', body);
    };
    /**
     * setProductsQuantityInCollection method allows to indicate quantity of a collection
     * component
     *
     * @summary products/collections/products
     */
    SDK.prototype.productsCollectionsProductsPut = function (body) {
        return this.core.fetch('/products/collections/products', 'put', body);
    };
    /**
     * the renewProductsInCollection method allows you to rebuild existing components of
     * Collections in the administration panel
     *
     * @summary products/collections/renew
     */
    SDK.prototype.productsCollectionsRenewPut = function (body) {
        return this.core.fetch('/products/collections/renew', 'put', body);
    };
    /**
     * The method returns the time needed to prepare the product for shipment
     *
     * @summary products/deliveryTime/search
     */
    SDK.prototype.productsDeliveryTimeSearchPost = function (body) {
        return this.core.fetch('/products/deliveryTime/search', 'post', body);
    };
    /**
     * Method that returns text elements for a given product, e.g. product name, long and short
     * description, metadata.
     *
     * @summary products/descriptions
     */
    SDK.prototype.productsDescriptionsGet = function (metadata) {
        return this.core.fetch('/products/descriptions', 'get', metadata);
    };
    /**
     * The method allows for setting text elements for a given product, e.g. product name, long
     * and short description, metadata.
     *
     * @summary products/descriptions
     */
    SDK.prototype.productsDescriptionsPut = function (body) {
        return this.core.fetch('/products/descriptions', 'put', body);
    };
    /**
     * The method allows you to change the main product in a group of products.
     *
     * @summary products/groups/mainProduct
     */
    SDK.prototype.productsGroupsMainProductPut = function (body) {
        return this.core.fetch('/products/groups/mainProduct', 'put', body);
    };
    /**
     * The method allows you to change the order of products in a group of products.
     *
     * @summary products/groups/order
     */
    SDK.prototype.productsGroupsOrderPut = function (body) {
        return this.core.fetch('/products/groups/order', 'put', body);
    };
    /**
     * The method allows you to change the settings for displaying products to a group of
     * products .
     *
     * @summary products/groups/settings
     */
    SDK.prototype.productsGroupsSettingsPut = function (body) {
        return this.core.fetch('/products/groups/settings', 'put', body);
    };
    /**
     * Method that returns information about product IDs, as well as size IDs and names, based
     * on the provided product external system codes.
     *
     * @summary products/idBySizecode
     */
    SDK.prototype.productsIdBySizecodeGet = function (metadata) {
        return this.core.fetch('/products/idBySizecode', 'get', metadata);
    };
    /**
     * This method is used to delete images of products
     *
     * @summary products/images/delete
     */
    SDK.prototype.productsImagesDeletePost = function (body) {
        return this.core.fetch('/products/images/delete', 'post', body);
    };
    /**
     * Method used for adding and editing product pictures.
     *
     * @summary products/images
     */
    SDK.prototype.productsImagesPut = function (body) {
        return this.core.fetch('/products/images', 'put', body);
    };
    /**
     * The method allows you to download available Facebook catalogs in a given store.
     *
     * @summary products/marketing/allFacebookCatalogIds
     */
    SDK.prototype.productsMarketingAllFacebookCatalogIdsGet = function (metadata) {
        return this.core.fetch('/products/marketing/allFacebookCatalogIds', 'get', metadata);
    };
    /**
     * The method allows to download a list of active promotions for the given store.
     *
     * @summary products/marketing/promotion
     */
    SDK.prototype.productsMarketingPromotionGet = function (metadata) {
        return this.core.fetch('/products/marketing/promotion', 'get', metadata);
    };
    /**
     * The method allows you to add promotions from a new module with elements.
     *
     * @summary products/marketing/promotion
     */
    SDK.prototype.productsMarketingPromotionPost = function (body) {
        return this.core.fetch('/products/marketing/promotion', 'post', body);
    };
    /**
     * The method allows you to edit the promotion from the new module with the elements.
     *
     * @summary products/marketing/promotion
     */
    SDK.prototype.productsMarketingPromotionPut = function (body) {
        return this.core.fetch('/products/marketing/promotion', 'put', body);
    };
    /**
     * Allows for getting information about products assigned to marketing hot spots
     *
     * @summary products/marketingZones
     */
    SDK.prototype.productsMarketingZonesGet = function (metadata) {
        return this.core.fetch('/products/marketingZones', 'get', metadata);
    };
    /**
     * Allows for assigning products to marketing hot spots
     *
     * @summary products/marketingZones
     */
    SDK.prototype.productsMarketingZonesPut = function (body) {
        return this.core.fetch('/products/marketingZones', 'put', body);
    };
    /**
     * Allows you to download information about the lowest prices before promotions
     *
     * @summary products/omnibusPrices
     */
    SDK.prototype.productsOmnibusPricesGet = function (metadata) {
        return this.core.fetch('/products/omnibusPrices', 'get', metadata);
    };
    /**
     * Allows for editing product strikethrough price settings
     *
     * @summary products/omnibusPrices
     */
    SDK.prototype.productsOmnibusPricesPut = function (body) {
        return this.core.fetch('/products/omnibusPrices', 'put', body);
    };
    /**
     * The method allows to delete the feedback about the commodity from the panel.
     *
     * @summary products/opinions/opinions/delete
     */
    SDK.prototype.productsOpinionsOpinionsDeletePost = function (body) {
        return this.core.fetch('/products/opinions/opinions/delete', 'post', body);
    };
    /**
     * The method allows for downloading information about reviews issued for products
     * available in the IdoSell Shop administration panel.
     *
     * @summary products/opinions/opinions
     */
    SDK.prototype.productsOpinionsOpinionsGet = function (metadata) {
        return this.core.fetch('/products/opinions/opinions', 'get', metadata);
    };
    /**
     * The method allows for adding reviews of products available in the IdoSell Shop
     * administration panel.
     *
     * @summary products/opinions/opinions
     */
    SDK.prototype.productsOpinionsOpinionsPost = function (body) {
        return this.core.fetch('/products/opinions/opinions', 'post', body);
    };
    /**
     * The method allows to edit opinions about goods available in the IdoSell Shop
     * administration panel.
     *
     * @summary products/opinions/opinions
     */
    SDK.prototype.productsOpinionsOpinionsPut = function (body) {
        return this.core.fetch('/products/opinions/opinions', 'put', body);
    };
    /**
     * Evaluation of the usefulness of opinions issued for products.
     *
     * @summary products/opinions/rate
     */
    SDK.prototype.productsOpinionsRateGet = function (metadata) {
        return this.core.fetch('/products/opinions/rate', 'get', metadata);
    };
    /**
     * The method allows you to delete parameters and their values (for parameters that are not
     * pinned to any product)..
     *
     * @summary products/parameters/delete
     */
    SDK.prototype.productsParametersDeletePost = function (body) {
        return this.core.fetch('/products/parameters/delete', 'post', body);
    };
    /**
     * Method that enables adding and editing of sections and parameters, modifying their
     * values and setting their order.
     *
     * @summary products/parameters
     */
    SDK.prototype.productsParametersPut = function (body) {
        return this.core.fetch('/products/parameters', 'put', body);
    };
    /**
     * Method that enables adding and editing of sections and parameters, modifying their
     * values and setting their order.
     *
     * @summary products/parameters/search
     */
    SDK.prototype.productsParametersSearchPost = function (body) {
        return this.core.fetch('/products/parameters/search', 'post', body);
    };
    /**
     * Method used for deleting products from the IdoSell Shop administration panel.
     *
     * @summary products/products/delete
     */
    SDK.prototype.productsProductsDeletePost = function (body) {
        return this.core.fetch('/products/products/delete', 'post', body);
    };
    /**
     * Method that enables extracting information about non-deleted products available in the
     * administration panel.
     *
     * @summary products/products
     */
    SDK.prototype.productsProductsGet = function (metadata) {
        return this.core.fetch('/products/products', 'get', metadata);
    };
    /**
     * The method is used to add products
     *
     * @summary products/products
     */
    SDK.prototype.productsProductsPost = function (body) {
        return this.core.fetch('/products/products', 'post', body);
    };
    /**
     * Method that enables editing and adding new products to the administration panel.
     *
     * @summary products/products
     */
    SDK.prototype.productsProductsPut = function (body) {
        return this.core.fetch('/products/products', 'put', body);
    };
    /**
     * Method that enables extracting information about non-deleted products available in the
     * administration panel
     *
     * @summary products/products/search
     */
    SDK.prototype.productsProductsSearchPost = function (body) {
        return this.core.fetch('/products/products/search', 'post', body);
    };
    /**
     * The method allows you to add products to the Facebook catalog.
     *
     * @summary products/productsToFacebookCatalog/delete
     */
    SDK.prototype.productsProductsToFacebookCatalogDeletePost = function (body) {
        return this.core.fetch('/products/productsToFacebookCatalog/delete', 'post', body);
    };
    /**
     * The method allows you to retrieve products assigned to the Facebook catalog.
     *
     * @summary products/productsToFacebookCatalog
     */
    SDK.prototype.productsProductsToFacebookCatalogGet = function (metadata) {
        return this.core.fetch('/products/productsToFacebookCatalog', 'get', metadata);
    };
    /**
     * The method allows you to add products to the Facebook catalog.
     *
     * @summary products/productsToFacebookCatalog
     */
    SDK.prototype.productsProductsToFacebookCatalogPost = function (body) {
        return this.core.fetch('/products/productsToFacebookCatalog', 'post', body);
    };
    /**
     * The method allows to remove the products from the promotion.
     *
     * @summary products/productsToPromotion/delete
     */
    SDK.prototype.productsProductsToPromotionDeletePost = function (body) {
        return this.core.fetch('/products/productsToPromotion/delete', 'post', body);
    };
    /**
     * The method allows to add products to an existing special offer.
     *
     * @summary products/productsToPromotion
     */
    SDK.prototype.productsProductsToPromotionPost = function (body) {
        return this.core.fetch('/products/productsToPromotion', 'post', body);
    };
    /**
     * The method allows you to download a list of questions to products available in the
     * IdoSell Shop administration panel.
     *
     * @summary products/questions
     */
    SDK.prototype.productsQuestionsGet = function (metadata) {
        return this.core.fetch('/products/questions', 'get', metadata);
    };
    /**
     * The method allows you to add and edit questions to products available in the IdoSell
     * Shop administration panel.
     *
     * @summary products/questions
     */
    SDK.prototype.productsQuestionsPut = function (body) {
        return this.core.fetch('/products/questions', 'put', body);
    };
    /**
     * It allows to download information about product reservations in orders (for up to 100
     * products in one request).
     *
     * @summary products/reservations
     */
    SDK.prototype.productsReservationsGet = function (metadata) {
        return this.core.fetch('/products/reservations', 'get', metadata);
    };
    /**
     * The method is used to restore deleted products
     *
     * @summary products/restore
     */
    SDK.prototype.productsRestorePost = function (body) {
        return this.core.fetch('/products/restore', 'post', body);
    };
    /**
     * Method allows you to delete a series of products available in the IdoSell administration
     * panel.
     *
     * @summary products/series/delete
     */
    SDK.prototype.productsSeriesDeletePost = function (body) {
        return this.core.fetch('/products/series/delete', 'post', body);
    };
    /**
     * Method allows you to retrieve a list of filters for a series of products available in
     * the IdoSell administration panel..
     *
     * @summary products/series/filter
     */
    SDK.prototype.productsSeriesFilterGet = function (metadata) {
        return this.core.fetch('/products/series/filter', 'get', metadata);
    };
    /**
     * The method allows you to manage the filter settings for the series..
     *
     * @summary products/series/filter
     */
    SDK.prototype.productsSeriesFilterPut = function (body) {
        return this.core.fetch('/products/series/filter', 'put', body);
    };
    /**
     * Method returns information about the product series available in the IdoSell
     * administration panel.
     *
     * @summary products/series
     */
    SDK.prototype.productsSeriesGet = function (metadata) {
        return this.core.fetch('/products/series', 'get', metadata);
    };
    /**
     * Method allows you to update information about product series available in the IdoSell
     * administration panel.
     *
     * @summary products/series
     */
    SDK.prototype.productsSeriesPut = function (body) {
        return this.core.fetch('/products/series', 'put', body);
    };
    /**
     * The method is used to remove sizes
     *
     * @summary products/sizes/delete
     */
    SDK.prototype.productsSizesDeletePost = function (body) {
        return this.core.fetch('/products/sizes/delete', 'post', body);
    };
    /**
     * Method that returns information about product sizes configured in the administration
     * panel
     *
     * @summary products/sizes
     */
    SDK.prototype.productsSizesGet = function (metadata) {
        return this.core.fetch('/products/sizes', 'get', metadata);
    };
    /**
     * This method allows you to edit the size-dependent data
     *
     * @summary products/sizes
     */
    SDK.prototype.productsSizesPut = function (body) {
        return this.core.fetch('/products/sizes', 'put', body);
    };
    /**
     * MetodaPozwalaNaEdycjeDanychDotyczacychIlosci
     *
     * @summary products/stockQuantity
     */
    SDK.prototype.productsStockQuantityPut = function (body) {
        return this.core.fetch('/products/stockQuantity', 'put', body);
    };
    /**
     * Method that enables getting information about product stock levels and warehouse
     * locations.
     *
     * @summary products/stocks
     */
    SDK.prototype.productsStocksGet = function (metadata) {
        return this.core.fetch('/products/stocks', 'get', metadata);
    };
    /**
     * Method that enables setting product stock levels and warehouse locations.
     *
     * @summary products/stocks
     */
    SDK.prototype.productsStocksPut = function (body) {
        return this.core.fetch('/products/stocks', 'put', body);
    };
    /**
     * Allows for getting information about product strikethrough price settings
     *
     * @summary products/strikethroughPrices
     */
    SDK.prototype.productsStrikethroughPricesGet = function (metadata) {
        return this.core.fetch('/products/strikethroughPrices', 'get', metadata);
    };
    /**
     * Allows for editing product strikethrough price settings
     *
     * @summary products/strikethroughPrices
     */
    SDK.prototype.productsStrikethroughPricesPut = function (body) {
        return this.core.fetch('/products/strikethroughPrices', 'put', body);
    };
    /**
     * The method allows to edit supplier data in the IdoSell Shop administration panel.
     *
     * @summary products/supplierCode
     */
    SDK.prototype.productsSupplierCodePut = function (body) {
        return this.core.fetch('/products/supplierCode', 'put', body);
    };
    /**
     * The method allows you to edit the commodity data related to its suppliers.
     *
     * @summary products/supplierProductData
     */
    SDK.prototype.productsSupplierProductDataPut = function (body) {
        return this.core.fetch('/products/supplierProductData', 'put', body);
    };
    /**
     * The method allows you to upload to the goods synchronization module, the offer in a file
     * in IOF 3.0 format.
     *
     * @summary products/synchronization/file
     */
    SDK.prototype.productsSynchronizationFilePost = function (body) {
        return this.core.fetch('/products/synchronization/file', 'post', body);
    };
    /**
     * Method informs commodity synchronization module that uploading of files is complete.
     *
     * @summary products/synchronization/finishUpload
     */
    SDK.prototype.productsSynchronizationFinishUploadPut = function (body) {
        return this.core.fetch('/products/synchronization/finishUpload', 'put', body);
    };
    /**
     * Method allows you to add automatic refund of payments for returns and rma.
     *
     * @summary refunds/addAutomaticRefund
     */
    SDK.prototype.refundsAddAutomaticRefund = function (body) {
        return this.core.fetch('/refunds/addAutomaticRefund', 'post', body);
    };
    /**
     * Method allows you to add automatic refund for order.
     *
     * @summary refunds/addAutomaticRefundForOrder
     */
    SDK.prototype.refundsAddAutomaticRefundForOrder = function (body) {
        return this.core.fetch('/refunds/addAutomaticRefundForOrder', 'post', body);
    };
    /**
     * Method allows you to add manual refund for return and rma.
     *
     * @summary refunds/addManualRefund
     */
    SDK.prototype.refundsAddManualRefund = function (body) {
        return this.core.fetch('/refunds/addManualRefund', 'post', body);
    };
    /**
     * Method allows you to cancel refund.
     *
     * @summary refunds/cancelRefund
     */
    SDK.prototype.refundsCancelRefund = function (body) {
        return this.core.fetch('/refunds/cancelRefund', 'put', body);
    };
    /**
     * Method allows you to confirm refund.
     *
     * @summary refunds/confirmRefund
     */
    SDK.prototype.refundsConfirmRefund = function (body) {
        return this.core.fetch('/refunds/confirmRefund', 'put', body);
    };
    /**
     * Method returns Automatic refunds possible.
     *
     * @summary refunds/getPossibleAutoRefunds
     */
    SDK.prototype.refundsGetPossibleAutoRefunds = function (metadata) {
        return this.core.fetch('/refunds/getPossibleAutoRefunds', 'get', metadata);
    };
    /**
     * Method returns refund status.
     *
     * @summary refunds/getRefundStatus
     */
    SDK.prototype.refundsGetRefundStatus = function (metadata) {
        return this.core.fetch('/refunds/getRefundStatus', 'get', metadata);
    };
    /**
     * Method returns a list of incomplete refunds.
     *
     * @summary refunds/retrieveRefundsList
     */
    SDK.prototype.refundsRetrieveRefundsList = function (metadata) {
        return this.core.fetch('/refunds/retrieveRefundsList', 'get', metadata);
    };
    /**
     * Method allows you to update refund.
     *
     * @summary refunds/updateRefund
     */
    SDK.prototype.refundsUpdateRefund = function (body) {
        return this.core.fetch('/refunds/updateRefund', 'put', body);
    };
    /**
     * This call returns a list of responsible entities.
     *
     * @summary responsibility/entities
     */
    SDK.prototype.responsibilityEntitiesGet = function (metadata) {
        return this.core.fetch('/responsibility/entities', 'get', metadata);
    };
    /**
     * Use this operation to create responsible entities.
     *
     * @summary responsibility/entities
     */
    SDK.prototype.responsibilityEntitiesPost = function (body) {
        return this.core.fetch('/responsibility/entities', 'post', body);
    };
    /**
     * Use this operation to update responsible entities.
     *
     * @summary responsibility/entities
     */
    SDK.prototype.responsibilityEntitiesPut = function (body) {
        return this.core.fetch('/responsibility/entities', 'put', body);
    };
    /**
     * This call is used to remove responsible entities.
     *
     * @summary responsibility/entities
     */
    SDK.prototype.responsibilityEntitiesDelete = function (metadata) {
        return this.core.fetch('/responsibility/entities', 'delete', metadata);
    };
    /**
     * Method that enables getting information about returns issued for orders in the
     * administration panel.
     *
     * @summary returns/returns
     */
    SDK.prototype.returnsReturnsGet = function (metadata) {
        return this.core.fetch('/returns/returns', 'get', metadata);
    };
    /**
     * returns/returns
     *
     */
    SDK.prototype.returnsReturnsPost = function (body) {
        return this.core.fetch('/returns/returns', 'post', body);
    };
    /**
     * returns/returns
     *
     */
    SDK.prototype.returnsReturnsPut = function (body) {
        return this.core.fetch('/returns/returns', 'put', body);
    };
    /**
     * Method that enables setting serial numbers for products included in returns issued for
     * orders in the administration panel.
     *
     * @summary returns/serialNumber
     */
    SDK.prototype.returnsSerialNumberPut = function (body) {
        return this.core.fetch('/returns/serialNumber', 'put', body);
    };
    /**
     * Allows to download all configurable return statuses
     *
     * @summary returns/statuses
     */
    SDK.prototype.returnsStatusesGet = function () {
        return this.core.fetch('/returns/statuses', 'get');
    };
    /**
     * This get method allows you to retrieve data about existing claims
     *
     * @summary rma/rma
     */
    SDK.prototype.rmaRmaGet = function (metadata) {
        return this.core.fetch('/rma/rma', 'get', metadata);
    };
    /**
     * This update method allows to update the data in existing complaints
     *
     * @summary rma/rma
     */
    SDK.prototype.rmaRmaPut = function (body) {
        return this.core.fetch('/rma/rma', 'put', body);
    };
    /**
     * Allows to download all possible complaint statuses
     *
     * @summary rma/statuses
     */
    SDK.prototype.rmaStatusesGet = function () {
        return this.core.fetch('/rma/statuses', 'get');
    };
    /**
     * Method is used for extracting information about a shop language templates.
     *
     * @summary shops/currencies
     */
    SDK.prototype.shopsCurrenciesGet = function () {
        return this.core.fetch('/shops/currencies', 'get');
    };
    /**
     * Method is used for extracting information about a shop language templates.
     *
     * @summary shops/languages
     */
    SDK.prototype.shopsLanguagesGet = function () {
        return this.core.fetch('/shops/languages', 'get');
    };
    /**
     * The method allows the removal of size charts.
     *
     * @summary sizecharts/sizecharts/delete
     */
    SDK.prototype.sizechartsSizechartsDeletePost = function (body) {
        return this.core.fetch('/sizecharts/sizecharts/delete', 'post', body);
    };
    /**
     * The method allows size charts to be downloaded.
     *
     * @summary sizecharts/sizecharts
     */
    SDK.prototype.sizechartsSizechartsGet = function (metadata) {
        return this.core.fetch('/sizecharts/sizecharts', 'get', metadata);
    };
    /**
     * The method allows the size charts settings to be updated.
     *
     * @summary sizecharts/sizecharts
     */
    SDK.prototype.sizechartsSizechartsPut = function (body) {
        return this.core.fetch('/sizecharts/sizecharts', 'put', body);
    };
    /**
     * Method that returns information about product sizes configured in the administration
     * panel. List of size groups (with sizes that belong to particular group) is returned as a
     * result.
     *
     * @summary sizes/sizes
     */
    SDK.prototype.sizesSizesGet = function (metadata) {
        return this.core.fetch('/sizes/sizes', 'get', metadata);
    };
    /**
     * Method that enables creating, deleting and editing product sizes in the administration
     * panel.
     *
     * @summary sizes/sizes
     */
    SDK.prototype.sizesSizesPut = function (body) {
        return this.core.fetch('/sizes/sizes', 'put', body);
    };
    /**
     * This call returns all snippet campaigns (including deleted ones but to readonly).
     *
     * @summary snippets/campaign
     */
    SDK.prototype.snippetsCampaignGet = function (metadata) {
        return this.core.fetch('/snippets/campaign', 'get', metadata);
    };
    /**
     * Use this operation to create snippet campaigns.
     *
     * @summary snippets/campaign
     */
    SDK.prototype.snippetsCampaignPost = function (body) {
        return this.core.fetch('/snippets/campaign', 'post', body);
    };
    /**
     * Use this operation to update snippet campaigns.
     *
     * @summary snippets/campaign
     */
    SDK.prototype.snippetsCampaignPut = function (body) {
        return this.core.fetch('/snippets/campaign', 'put', body);
    };
    /**
     * This call is used to remove campaign snippets.
     *
     * @summary snippets/campaign
     */
    SDK.prototype.snippetsCampaignDelete = function (metadata) {
        return this.core.fetch('/snippets/campaign', 'delete', metadata);
    };
    /**
     * This call returns all cookie definitions related to code snippets.
     *
     * @summary snippets/cookies
     */
    SDK.prototype.snippetsCookiesGet = function (metadata) {
        return this.core.fetch('/snippets/cookies', 'get', metadata);
    };
    /**
     * Use this operation to create a cookie definition for a code snippet.
     *
     * @summary snippets/cookies
     */
    SDK.prototype.snippetsCookiesPost = function (body) {
        return this.core.fetch('/snippets/cookies', 'post', body);
    };
    /**
     * Use this operation to update a cookie definition for a code snippet.
     *
     * @summary snippets/cookies
     */
    SDK.prototype.snippetsCookiesPut = function (body) {
        return this.core.fetch('/snippets/cookies', 'put', body);
    };
    /**
     * This call is used to remove campaign cookies.
     *
     * @summary snippets/cookies
     */
    SDK.prototype.snippetsCookiesDelete = function (metadata) {
        return this.core.fetch('/snippets/cookies', 'delete', metadata);
    };
    /**
     * This call returns all snippets.
     *
     * @summary snippets/snippets
     */
    SDK.prototype.snippetsSnippetsGet = function (metadata) {
        return this.core.fetch('/snippets/snippets', 'get', metadata);
    };
    /**
     * Use this operation to create code snippet.
     *
     * @summary snippets/snippets
     */
    SDK.prototype.snippetsSnippetsPost = function (body) {
        return this.core.fetch('/snippets/snippets', 'post', body);
    };
    /**
     * Use this operation to update code snippet.
     *
     * @summary snippets/snippets
     */
    SDK.prototype.snippetsSnippetsPut = function (body) {
        return this.core.fetch('/snippets/snippets', 'put', body);
    };
    /**
     * This call is used to remove snippets.
     *
     * @summary snippets/snippets
     */
    SDK.prototype.snippetsSnippetsDelete = function (metadata) {
        return this.core.fetch('/snippets/snippets', 'delete', metadata);
    };
    /**
     * Method is used for extracting information about a shop and its most important
     * configuration settings.
     *
     * @summary system/config
     */
    SDK.prototype.systemConfigGet = function () {
        return this.core.fetch('/system/config', 'get');
    };
    /**
     * The method is used to manage the most important settings in the store and in the panel.
     * It enables, among others, configuration of tax and billing settings and configuration of
     * warehouse management.
     *
     * @summary system/config
     */
    SDK.prototype.systemConfigPut = function (body) {
        return this.core.fetch('/system/config', 'put', body);
    };
    /**
     * This method returns the current exchange rate in relation to the currency set in the
     * administration panel.
     *
     * @summary system/currencies
     */
    SDK.prototype.systemCurrenciesGet = function (metadata) {
        return this.core.fetch('/system/currencies', 'get', metadata);
    };
    /**
     * Method that allows for setting currency exchange rates in relation to the currency set
     * in the administration panel.
     *
     * @summary system/currencies
     */
    SDK.prototype.systemCurrenciesPut = function (body) {
        return this.core.fetch('/system/currencies', 'put', body);
    };
    /**
     * It allows you to download the current automation processes configuration .
     *
     * @summary system/processesAutomation
     */
    SDK.prototype.systemProcessesAutomationGet = function (metadata) {
        return this.core.fetch('/system/processesAutomation', 'get', metadata);
    };
    /**
     * The method is used for edit of processes automation settings .
     *
     * @summary system/processesAutomation
     */
    SDK.prototype.systemProcessesAutomationPut = function (body) {
        return this.core.fetch('/system/processesAutomation', 'put', body);
    };
    /**
     * This method returns server status information which is useful in determining whether the
     * server is currently overloaded.
     *
     * @summary system/serverLoad
     */
    SDK.prototype.systemServerLoadGet = function () {
        return this.core.fetch('/system/serverLoad', 'get');
    };
    /**
     * Method that returns the current server time, which is essential for authentication.
     *
     * @summary system/serverTime
     */
    SDK.prototype.systemServerTimeGet = function () {
        return this.core.fetch('/system/serverTime', 'get');
    };
    /**
     * Method is used for extracting information about a shop and its most important
     * configuration settings.
     *
     * @summary system/shopsData
     */
    SDK.prototype.systemShopsDataGet = function () {
        return this.core.fetch('/system/shopsData', 'get');
    };
    /**
     * The method allows units of measurement to be downloaded from the IdoSell administration
     * panel.
     *
     * @summary system/units
     */
    SDK.prototype.systemUnitsGet = function (metadata) {
        return this.core.fetch('/system/units', 'get', metadata);
    };
    /**
     * The method allows existing units of measurement to be updated to the IdoSell
     * administration panel.
     *
     * @summary system/units
     */
    SDK.prototype.systemUnitsPut = function (body) {
        return this.core.fetch('/system/units', 'put', body);
    };
    /**
     * Method that returns information about IdoSell Shop administration panel users.
     *
     * @summary system/users
     */
    SDK.prototype.systemUsersGet = function (metadata) {
        return this.core.fetch('/system/users', 'get', metadata);
    };
    /**
     * Enables gift voucer blocking
     *
     * @summary vouchers/block
     */
    SDK.prototype.vouchersBlockPut = function (body) {
        return this.core.fetch('/vouchers/block', 'put', body);
    };
    /**
     * Allows for downloading all discount code campaigns defined in the administration panel
     *
     * @summary vouchers/types
     */
    SDK.prototype.vouchersTypesGet = function (metadata) {
        return this.core.fetch('/vouchers/types', 'get', metadata);
    };
    /**
     * Enables gift vouchers unblocking
     *
     * @summary vouchers/unblock
     */
    SDK.prototype.vouchersUnblockPut = function (body) {
        return this.core.fetch('/vouchers/unblock', 'put', body);
    };
    /**
     * Enables deleting a single or a list of gift vouchers
     *
     * @summary vouchers/vouchers/delete
     */
    SDK.prototype.vouchersVouchersDeletePost = function (body) {
        return this.core.fetch('/vouchers/vouchers/delete', 'post', body);
    };
    /**
     * Enables searching for vouchers and retrieving information about indicated vouchers
     *
     * @summary vouchers/vouchers
     */
    SDK.prototype.vouchersVouchersGet = function (metadata) {
        return this.core.fetch('/vouchers/vouchers', 'get', metadata);
    };
    /**
     * Enables adding new gift vouchers with the selected voucher type
     *
     * @summary vouchers/vouchers
     */
    SDK.prototype.vouchersVouchersPost = function (body) {
        return this.core.fetch('/vouchers/vouchers', 'post', body);
    };
    /**
     * Enables editing gift voucher, e.g. changing its balance, validity date or number (only
     * for unused vouchers)
     *
     * @summary vouchers/vouchers
     */
    SDK.prototype.vouchersVouchersPut = function (body) {
        return this.core.fetch('/vouchers/vouchers', 'put', body);
    };
    /**
     * Method that enables getting the number of product guarantees available in the
     * administration panel.
     *
     * @summary warranties/countTotal
     */
    SDK.prototype.warrantiesCountTotalGet = function (metadata) {
        return this.core.fetch('/warranties/countTotal', 'get', metadata);
    };
    /**
     * Method that enables editing product warranty language settings.
     *
     * @summary warranties/languageData
     */
    SDK.prototype.warrantiesLanguageDataPut = function (body) {
        return this.core.fetch('/warranties/languageData', 'put', body);
    };
    /**
     * Method that enables deleting product warranties from the administration panel.
     *
     * @summary warranties/warranties/delete
     */
    SDK.prototype.warrantiesWarrantiesDeletePost = function (body) {
        return this.core.fetch('/warranties/warranties/delete', 'post', body);
    };
    /**
     * Method that enables getting a list of product warranties available in the administration
     * panel.
     *
     * @summary warranties/warranties
     */
    SDK.prototype.warrantiesWarrantiesGet = function (metadata) {
        return this.core.fetch('/warranties/warranties', 'get', metadata);
    };
    /**
     * Method that enables adding product warranties to the administration panel.
     *
     * @summary warranties/warranties
     */
    SDK.prototype.warrantiesWarrantiesPost = function (body) {
        return this.core.fetch('/warranties/warranties', 'post', body);
    };
    /**
     * Method that enables editing product warranties available in the administration panel.
     *
     * @summary warranties/warranties
     */
    SDK.prototype.warrantiesWarrantiesPut = function (body) {
        return this.core.fetch('/warranties/warranties', 'put', body);
    };
    /**
     * The method allows to download information about a selected location or all locations in
     * a given warehouse together with a list of product IDs located in these locations.
     *
     * @summary wms/locations
     */
    SDK.prototype.wmsLocationsGet = function (metadata) {
        return this.core.fetch('/wms/locations', 'get', metadata);
    };
    /**
     * The method enables the MM document to be received at the target warehouse.
     *
     * @summary wms/stocksdocuments/acceptMM
     */
    SDK.prototype.wmsStocksdocumentsAcceptMMPut = function (body) {
        return this.core.fetch('/wms/stocksdocuments/acceptMM', 'put', body);
    };
    /**
     * Method that enables closing warehouse documents.
     *
     * @summary wms/stocksdocuments/close
     */
    SDK.prototype.wmsStocksdocumentsClosePut = function (body) {
        return this.core.fetch('/wms/stocksdocuments/close', 'put', body);
    };
    /**
     * Method that enables deleting open warehouse documents.
     *
     * @summary wms/stocksdocuments/documents/delete
     */
    SDK.prototype.wmsStocksdocumentsDocumentsDeletePost = function (body) {
        return this.core.fetch('/wms/stocksdocuments/documents/delete', 'post', body);
    };
    /**
     * The method allows for downloading a list of warehouse documents.
     *
     * @summary wms/stocksdocuments/documents
     */
    SDK.prototype.wmsStocksdocumentsDocumentsGet = function (metadata) {
        return this.core.fetch('/wms/stocksdocuments/documents', 'get', metadata);
    };
    /**
     * Method that enables warehouse document creation.
     *
     * @summary wms/stocksdocuments/documents
     */
    SDK.prototype.wmsStocksdocumentsDocumentsPost = function (body) {
        return this.core.fetch('/wms/stocksdocuments/documents', 'post', body);
    };
    /**
     * The method allows for warehouse documents edit .
     *
     * @summary wms/stocksdocuments/documents
     */
    SDK.prototype.wmsStocksdocumentsDocumentsPut = function (body) {
        return this.core.fetch('/wms/stocksdocuments/documents', 'put', body);
    };
    /**
     * Method that enables getting a list of open warehouse documents.
     *
     * @summary wms/stocksdocuments/openedDocuments
     */
    SDK.prototype.wmsStocksdocumentsOpenedDocumentsGet = function (metadata) {
        return this.core.fetch('/wms/stocksdocuments/openedDocuments', 'get', metadata);
    };
    /**
     * Method that enables deleting products from warehouse documents.
     *
     * @summary wms/stocksdocuments/products/delete
     */
    SDK.prototype.wmsStocksdocumentsProductsDeletePost = function (body) {
        return this.core.fetch('/wms/stocksdocuments/products/delete', 'post', body);
    };
    /**
     * Method that enables getting a list of products present on a warehouse document.
     *
     * @summary wms/stocksdocuments/products
     */
    SDK.prototype.wmsStocksdocumentsProductsGet = function (metadata) {
        return this.core.fetch('/wms/stocksdocuments/products', 'get', metadata);
    };
    /**
     * Method that enables adding products to warehouse documents.
     *
     * @summary wms/stocksdocuments/products
     */
    SDK.prototype.wmsStocksdocumentsProductsPost = function (body) {
        return this.core.fetch('/wms/stocksdocuments/products', 'post', body);
    };
    /**
     * Method that enables, amongst others, editing the quantity of a given product on a
     * warehouse document.
     *
     * @summary wms/stocksdocuments/products
     */
    SDK.prototype.wmsStocksdocumentsProductsPut = function (body) {
        return this.core.fetch('/wms/stocksdocuments/products', 'put', body);
    };
    /**
     * The method allows to withdraw the MM document to the source warehouse.
     *
     * @summary wms/stocksdocuments/rejectMM
     */
    SDK.prototype.wmsStocksdocumentsRejectMMPut = function (body) {
        return this.core.fetch('/wms/stocksdocuments/rejectMM', 'put', body);
    };
    /**
     * The method allows for the removal of suppliers..
     *
     * @summary wms/suppliers/suppliers/delete
     */
    SDK.prototype.wmsSuppliersSuppliersDeletePost = function (body) {
        return this.core.fetch('/wms/suppliers/suppliers/delete', 'post', body);
    };
    /**
     * The method allows to download a list of suppliers along with information about the
     * number of products assigned to them.
     *
     * @summary wms/suppliers/suppliers
     */
    SDK.prototype.wmsSuppliersSuppliersGet = function (metadata) {
        return this.core.fetch('/wms/suppliers/suppliers', 'get', metadata);
    };
    /**
     * The method allows information about suppliers to be updated, including address details,
     * description, order preparation time or supplier working hours..
     *
     * @summary wms/suppliers/suppliers
     */
    SDK.prototype.wmsSuppliersSuppliersPut = function (body) {
        return this.core.fetch('/wms/suppliers/suppliers', 'put', body);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
