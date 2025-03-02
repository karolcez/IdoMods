import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Method that enables extracting customer balance information from existing customer
     * accounts.
     *
     * @summary clients/balance
     */
    clientsBalanceGet(metadata?: types.ClientsBalanceGetMetadataParam): Promise<FetchResponse<200, types.ClientsBalanceGetResponse200> | FetchResponse<207, types.ClientsBalanceGetResponse207>>;
    /**
     * Method that allows for customer account balance operations.
     *
     * @summary clients/balance
     */
    clientsBalancePost(body?: types.ClientsBalancePostBodyParam): Promise<FetchResponse<200, types.ClientsBalancePostResponse200> | FetchResponse<207, types.ClientsBalancePostResponse207>>;
    /**
     * Method that enables extracting customer account details.
     *
     * @summary clients/clients
     */
    clientsClientsGet(metadata?: types.ClientsClientsGetMetadataParam): Promise<FetchResponse<200, types.ClientsClientsGetResponse200> | FetchResponse<207, types.ClientsClientsGetResponse207>>;
    /**
     * Method that enables adding new customer accounts to the IdoSell Shop administration
     * panel.
     *
     * @summary clients/clients
     */
    clientsClientsPost(body?: types.ClientsClientsPostBodyParam): Promise<FetchResponse<200, types.ClientsClientsPostResponse200> | FetchResponse<207, types.ClientsClientsPostResponse207>>;
    /**
     * Method enables modifying existing customer account data.
     *
     * @summary clients/clients
     */
    clientsClientsPut(body?: types.ClientsClientsPutBodyParam): Promise<FetchResponse<200, types.ClientsClientsPutResponse200> | FetchResponse<207, types.ClientsClientsPutResponse207>>;
    /**
     * The method allows to download information about customers from the CRM module assigned
     * to stores to which the user has rights.
     *
     * @summary clients/crm/search
     */
    clientsCrmSearchPost(body?: types.ClientsCrmSearchPostBodyParam): Promise<FetchResponse<200, types.ClientsCrmSearchPostResponse200> | FetchResponse<207, types.ClientsCrmSearchPostResponse207>>;
    /**
     * The method allows you to delete unused delivery addresses for customer accounts in the
     * IdoSell Shop administration panel
     *
     * @summary clients/deliveryAddress/delete
     */
    clientsDeliveryAddressDeletePost(body?: types.ClientsDeliveryAddressDeletePostBodyParam): Promise<FetchResponse<200, types.ClientsDeliveryAddressDeletePostResponse200> | FetchResponse<207, types.ClientsDeliveryAddressDeletePostResponse207>>;
    /**
     * Method that enables extracting information about delivery addresses assigned to existing
     * customer accounts.
     *
     * @summary clients/deliveryAddress
     */
    clientsDeliveryAddressGet(metadata?: types.ClientsDeliveryAddressGetMetadataParam): Promise<FetchResponse<200, types.ClientsDeliveryAddressGetResponse200> | FetchResponse<207, types.ClientsDeliveryAddressGetResponse207>>;
    /**
     * Method that enables adding delivery address details to existing customer accounts.
     *
     * @summary clients/deliveryAddress
     */
    clientsDeliveryAddressPost(body?: types.ClientsDeliveryAddressPostBodyParam): Promise<FetchResponse<200, types.ClientsDeliveryAddressPostResponse200> | FetchResponse<207, types.ClientsDeliveryAddressPostResponse207>>;
    /**
     * Method that enables editing the delivery address details for existing customer accounts.
     *
     * @summary clients/deliveryAddress
     */
    clientsDeliveryAddressPut(body?: types.ClientsDeliveryAddressPutBodyParam): Promise<FetchResponse<200, types.ClientsDeliveryAddressPutResponse200> | FetchResponse<207, types.ClientsDeliveryAddressPutResponse207>>;
    /**
     * Method that enables setting external system codes for existing customer accounts.
     *
     * @summary clients/externalCode
     */
    clientsExternalCodePut(body?: types.ClientsExternalCodePutBodyParam): Promise<FetchResponse<207, types.ClientsExternalCodePutResponse207>>;
    /**
     * Enables gift card blocking
     *
     * @summary clients/giftcards/block
     */
    clientsGiftcardsBlockPut(body?: types.ClientsGiftcardsBlockPutBodyParam): Promise<FetchResponse<200, types.ClientsGiftcardsBlockPutResponse200> | FetchResponse<207, types.ClientsGiftcardsBlockPutResponse207>>;
    /**
     * Enables deleting a single or a list of gift cards
     *
     * @summary clients/giftcards/delete
     */
    clientsGiftcardsDeletePost(body?: types.ClientsGiftcardsDeletePostBodyParam): Promise<FetchResponse<200, types.ClientsGiftcardsDeletePostResponse200> | FetchResponse<207, types.ClientsGiftcardsDeletePostResponse207>>;
    /**
     * Enables adding new gift cards with the selected card type
     *
     * @summary clients/giftcards
     */
    clientsGiftcardsPost(body?: types.ClientsGiftcardsPostBodyParam): Promise<FetchResponse<200, types.ClientsGiftcardsPostResponse200> | FetchResponse<207, types.ClientsGiftcardsPostResponse207>>;
    /**
     * Enables editing gift parameters, e.g. changing its balance, validity date, number or PIN
     *
     * @summary clients/giftcards
     */
    clientsGiftcardsPut(body?: types.ClientsGiftcardsPutBodyParam): Promise<FetchResponse<200, types.ClientsGiftcardsPutResponse200> | FetchResponse<207, types.ClientsGiftcardsPutResponse207>>;
    /**
     * Enables searching for gift cards and retrieving information about indicated gift cards
     *
     * @summary clients/giftcards/search
     */
    clientsGiftcardsSearchPost(body?: types.ClientsGiftcardsSearchPostBodyParam): Promise<FetchResponse<200, types.ClientsGiftcardsSearchPostResponse200> | FetchResponse<207, types.ClientsGiftcardsSearchPostResponse207>>;
    /**
     * Allows for downloading all types of gift cards defined in the administration panel
     *
     * @summary clients/giftcards/types
     */
    clientsGiftcardsTypesGet(metadata?: types.ClientsGiftcardsTypesGetMetadataParam): Promise<FetchResponse<200, types.ClientsGiftcardsTypesGetResponse200> | FetchResponse<207, types.ClientsGiftcardsTypesGetResponse207>>;
    /**
     * Enables gift card unblocking
     *
     * @summary clients/giftcards/unblock
     */
    clientsGiftcardsUnblockPut(body?: types.ClientsGiftcardsUnblockPutBodyParam): Promise<FetchResponse<200, types.ClientsGiftcardsUnblockPutResponse200> | FetchResponse<207, types.ClientsGiftcardsUnblockPutResponse207>>;
    /**
     * Method that enables extracting information about loyalty cards available in the
     * administration panel.
     *
     * @summary clients/membershipCards
     */
    clientsMembershipCardsGet(metadata?: types.ClientsMembershipCardsGetMetadataParam): Promise<FetchResponse<200, types.ClientsMembershipCardsGetResponse200> | FetchResponse<207, types.ClientsMembershipCardsGetResponse207>>;
    /**
     * Method that enables assigning loyalty cards to customer accounts.
     *
     * @summary clients/membershipCards
     */
    clientsMembershipCardsPut(body?: types.ClientsMembershipCardsPutBodyParam): Promise<FetchResponse<200, types.ClientsMembershipCardsPutResponse200> | FetchResponse<207, types.ClientsMembershipCardsPutResponse207>>;
    /**
     * Method that enables extracting a list of customer accounts that agreed / did not agree
     * to receiving email newsletters.
     *
     * @summary clients/newsletter/email/search
     */
    clientsNewsletterEmailSearchPost(body?: types.ClientsNewsletterEmailSearchPostBodyParam): Promise<FetchResponse<200, types.ClientsNewsletterEmailSearchPostResponse200> | FetchResponse<207, types.ClientsNewsletterEmailSearchPostResponse207>>;
    /**
     * Method that enables extracting a list of customer accounts that agreed / did not agree
     * to receiving text message newsletters.
     *
     * @summary clients/newsletter/sms/search
     */
    clientsNewsletterSmsSearchPost(body?: types.ClientsNewsletterSmsSearchPostBodyParam): Promise<FetchResponse<200, types.ClientsNewsletterSmsSearchPostResponse200> | FetchResponse<207, types.ClientsNewsletterSmsSearchPostResponse207>>;
    /**
     * The method allows you to delete unused buyer addresses for customer accounts in the
     * IdoSell Shop administration panel
     *
     * @summary clients/payerAddress/delete
     */
    clientsPayerAddressDeletePost(body?: types.ClientsPayerAddressDeletePostBodyParam): Promise<FetchResponse<200, types.ClientsPayerAddressDeletePostResponse200> | FetchResponse<207, types.ClientsPayerAddressDeletePostResponse207>>;
    /**
     * The method allows to retrieve buyer's addresses from sales documents, for existing
     * customer accounts in the IdoSell administration panel.
     *
     * @summary clients/payerAddress
     */
    clientsPayerAddressGet(metadata?: types.ClientsPayerAddressGetMetadataParam): Promise<FetchResponse<200, types.ClientsPayerAddressGetResponse200> | FetchResponse<207, types.ClientsPayerAddressGetResponse207>>;
    /**
     * The method allows to add buyer's addresses to sales documents, for existing customer
     * accounts in the IdoSell administration panel.
     *
     * @summary clients/payerAddress
     */
    clientsPayerAddressPost(body?: types.ClientsPayerAddressPostBodyParam): Promise<FetchResponse<200, types.ClientsPayerAddressPostResponse200> | FetchResponse<207, types.ClientsPayerAddressPostResponse207>>;
    /**
     * The method allows to modify buyer's addresses in sales documents, for existing customer
     * accounts in the IdoSell administration panel.
     *
     * @summary clients/payerAddress
     */
    clientsPayerAddressPut(body?: types.ClientsPayerAddressPutBodyParam): Promise<FetchResponse<200, types.ClientsPayerAddressPutResponse200> | FetchResponse<207, types.ClientsPayerAddressPutResponse207>>;
    /**
     * The getClients method returns a list of customer IDs assigned to an individual price
     * list
     *
     * @summary clients/pricelists/clients
     */
    clientsPricelistsClientsGet(metadata?: types.ClientsPricelistsClientsGetMetadataParam): Promise<FetchResponse<200, types.ClientsPricelistsClientsGetResponse200> | FetchResponse<207, types.ClientsPricelistsClientsGetResponse207>>;
    /**
     * The setClients method allows you to assign customers to an individual price list
     *
     * @summary clients/pricelists/clients
     */
    clientsPricelistsClientsPut(body?: types.ClientsPricelistsClientsPutBodyParam): Promise<FetchResponse<200, types.ClientsPricelistsClientsPutResponse200> | FetchResponse<207, types.ClientsPricelistsClientsPutResponse207>>;
    /**
     * The delete method enables to delete an individual pricelist. The pricelist must not be
     * associated with any customer. In order to check the clients related to the given group,
     * the getClients method shall be used.
     *
     * @summary clients/pricelists/delete
     */
    clientsPricelistsDeletePost(body?: types.ClientsPricelistsDeletePostBodyParam): Promise<FetchResponse<207, types.ClientsPricelistsDeletePostResponse207>>;
    /**
     * The get method allows you to download individual price lists available in the
     * administration panel
     *
     * @summary clients/pricelists
     */
    clientsPricelistsGet(metadata?: types.ClientsPricelistsGetMetadataParam): Promise<FetchResponse<200, types.ClientsPricelistsGetResponse200> | FetchResponse<207, types.ClientsPricelistsGetResponse207>>;
    /**
     * The insert method enables you to add a new individual price list to the administration
     * panel
     *
     * @summary clients/pricelists
     */
    clientsPricelistsPost(body?: types.ClientsPricelistsPostBodyParam): Promise<FetchResponse<200, types.ClientsPricelistsPostResponse200> | FetchResponse<207, types.ClientsPricelistsPostResponse207>>;
    /**
     * The update method allows you to change the individual price list.
     *
     * @summary clients/pricelists
     */
    clientsPricelistsPut(body?: types.ClientsPricelistsPutBodyParam): Promise<FetchResponse<207, types.ClientsPricelistsPutResponse207>>;
    /**
     * The getProducts method enables the retrieval of products from an individual price list
     * together with the price
     *
     * @summary clients/pricelists/products
     */
    clientsPricelistsProductsGet(metadata?: types.ClientsPricelistsProductsGetMetadataParam): Promise<FetchResponse<200, types.ClientsPricelistsProductsGetResponse200> | FetchResponse<207, types.ClientsPricelistsProductsGetResponse207>>;
    /**
     * The setProducts method allows you to add goods to an individual price list and specify
     * their price
     *
     * @summary clients/pricelists/products
     */
    clientsPricelistsProductsPut(body?: types.ClientsPricelistsProductsPutBodyParam): Promise<FetchResponse<200, types.ClientsPricelistsProductsPutResponse200> | FetchResponse<207, types.ClientsPricelistsProductsPutResponse207>>;
    /**
     * The rename method enables changing the name of an individual price list
     *
     * @summary clients/pricelists/rename
     */
    clientsPricelistsRenamePut(body?: types.ClientsPricelistsRenamePutBodyParam): Promise<FetchResponse<207, types.ClientsPricelistsRenamePutResponse207>>;
    /**
     * Method that enables getting information about active customer loyalty cards assigned to
     * customer accounts in the administration panel.
     *
     * @summary clients/prices/activeCard
     */
    clientsPricesActiveCardGet(): Promise<FetchResponse<200, types.ClientsPricesActiveCardGetResponse200> | FetchResponse<207, types.ClientsPricesActiveCardGetResponse207>>;
    /**
     * Method that enables extracting information about discount groups configured in the
     * administration panel.
     *
     * @summary clients/prices/discountGroups
     */
    clientsPricesDiscountGroupsGet(metadata?: types.ClientsPricesDiscountGroupsGetMetadataParam): Promise<FetchResponse<200, types.ClientsPricesDiscountGroupsGetResponse200> | FetchResponse<207, types.ClientsPricesDiscountGroupsGetResponse207>>;
    /**
     * Method that allows for extracting information about individual discounts assigned to
     * customer accounts.
     *
     * @summary clients/prices/discounts
     */
    clientsPricesDiscountsGet(metadata?: types.ClientsPricesDiscountsGetMetadataParam): Promise<FetchResponse<200, types.ClientsPricesDiscountsGetResponse200> | FetchResponse<207, types.ClientsPricesDiscountsGetResponse207>>;
    /**
     * Method that enables assigning individual discount to existing customer accounts.
     *
     * @summary clients/prices/discounts
     */
    clientsPricesDiscountsPut(body?: types.ClientsPricesDiscountsPutBodyParam): Promise<FetchResponse<200, types.ClientsPricesDiscountsPutResponse200> | FetchResponse<207, types.ClientsPricesDiscountsPutResponse207>>;
    /**
     * Method that enables extracting information about the amount of loyalty points collected
     * by customers in a loyalty program.
     *
     * @summary clients/profitPoints
     */
    clientsProfitPointsGet(metadata?: types.ClientsProfitPointsGetMetadataParam): Promise<FetchResponse<200, types.ClientsProfitPointsGetResponse200> | FetchResponse<207, types.ClientsProfitPointsGetResponse207>>;
    /**
     * Method that allows for adding loyalty points to the balances of existing customer
     * accounts.
     *
     * @summary clients/profitPoints
     */
    clientsProfitPointsPost(body?: types.ClientsProfitPointsPostBodyParam): Promise<FetchResponse<200, types.ClientsProfitPointsPostResponse200> | FetchResponse<207, types.ClientsProfitPointsPostResponse207>>;
    /**
     * The method allows to retrieve the list of administrative regions available in the
     * IdoSell administration panel.
     *
     * @summary clients/provinceList
     */
    clientsProvinceListGet(metadata?: types.ClientsProvinceListGetMetadataParam): Promise<FetchResponse<200, types.ClientsProvinceListGetResponse200> | FetchResponse<207, types.ClientsProvinceListGetResponse207>>;
    /**
     * This call is used to remove client's personal data and blocks the account.
     *
     * @summary clients/remove
     */
    clientsRemoveDelete(metadata: types.ClientsRemoveDeleteMetadataParam): Promise<FetchResponse<200, types.ClientsRemoveDeleteResponse200>>;
    /**
     * Use this method to delete all tags assigned to a customer
     *
     * @summary clients/tags/clear/delete
     */
    clientsTagsClearDeletePost(body?: types.ClientsTagsClearDeletePostBodyParam): Promise<FetchResponse<207, types.ClientsTagsClearDeletePostResponse207>>;
    /**
     * Use this method to delete selected tags assigned to a customer
     *
     * @summary clients/tags/delete
     */
    clientsTagsDeletePost(body?: types.ClientsTagsDeletePostBodyParam): Promise<FetchResponse<200, types.ClientsTagsDeletePostResponse200> | FetchResponse<207, types.ClientsTagsDeletePostResponse207>>;
    /**
     * Use this method to retrieve all tags assigned to a client
     *
     * @summary clients/tags
     */
    clientsTagsGet(metadata?: types.ClientsTagsGetMetadataParam): Promise<FetchResponse<200, types.ClientsTagsGetResponse200> | FetchResponse<207, types.ClientsTagsGetResponse207>>;
    /**
     * Use this method to add new tags and their associated values to the client
     *
     * @summary clients/tags
     */
    clientsTagsPost(body?: types.ClientsTagsPostBodyParam): Promise<FetchResponse<200, types.ClientsTagsPostResponse200> | FetchResponse<207, types.ClientsTagsPostResponse207>>;
    /**
     * The method is used to update the value of the tags assigned to the client. A tag with
     * value 0 is detached from the client
     *
     * @summary clients/tags
     */
    clientsTagsPut(body?: types.ClientsTagsPutBodyParam): Promise<FetchResponse<200, types.ClientsTagsPutResponse200> | FetchResponse<207, types.ClientsTagsPutResponse207>>;
    /**
     * This call returns config variables for given module (type)
     *
     * @summary config/variables
     */
    configVariablesGet(metadata: types.ConfigVariablesGetMetadataParam): Promise<FetchResponse<200, types.ConfigVariablesGetResponse200> | FetchResponse<207, types.ConfigVariablesGetResponse207>>;
    /**
     * Use this operation to update snippet campaigns.
     *
     * @summary config/variables
     */
    configVariablesPut(body?: types.ConfigVariablesPutBodyParam): Promise<FetchResponse<200, types.ConfigVariablesPutResponse200> | FetchResponse<207, types.ConfigVariablesPutResponse207>>;
    /**
     * This call is used to remove defined configuration variables.
     *
     * @summary config/variables
     */
    configVariablesDelete(metadata: types.ConfigVariablesDeleteMetadataParam): Promise<FetchResponse<200, types.ConfigVariablesDeleteResponse200> | FetchResponse<207, types.ConfigVariablesDeleteResponse207>>;
    /**
     * Retrieves information about assigned couriers to delivery profiles
     *
     * @summary couriers/assignedToShippingProfiles
     */
    couriersAssignedToShippingProfilesGet(): Promise<FetchResponse<200, types.CouriersAssignedToShippingProfilesGetResponse200> | FetchResponse<207, types.CouriersAssignedToShippingProfilesGetResponse207>>;
    /**
     * Method that returns all couriers available for a given country. It also returns
     * information whether the courier service handles personal collections.
     *
     * @summary couriers/couriers
     */
    couriersCouriersGet(metadata: types.CouriersCouriersGetMetadataParam): Promise<FetchResponse<200, types.CouriersCouriersGetResponse200> | FetchResponse<207, types.CouriersCouriersGetResponse207>>;
    /**
     * The method enables cancelling personal collection points within your own collection
     * points chain. It does not allow for modifying integrated couriers collection points.
     *
     * @summary couriers/pickupPoints/delete
     */
    couriersPickupPointsDeletePost(body?: types.CouriersPickupPointsDeletePostBodyParam): Promise<FetchResponse<200, types.CouriersPickupPointsDeletePostResponse200> | FetchResponse<207, types.CouriersPickupPointsDeletePostResponse207>>;
    /**
     * The method returns personal collection points within its own network of collection
     * points and for integrated couriers.
     *
     * @summary couriers/pickupPoints
     */
    couriersPickupPointsGet(metadata: types.CouriersPickupPointsGetMetadataParam): Promise<FetchResponse<200, types.CouriersPickupPointsGetResponse200> | FetchResponse<207, types.CouriersPickupPointsGetResponse207>>;
    /**
     * The method enables adding personal collection points within your own collection points
     * chain. It does not allow for modifying integrated couriers collection points.
     *
     * @summary couriers/pickupPoints
     */
    couriersPickupPointsPost(body?: types.CouriersPickupPointsPostBodyParam): Promise<FetchResponse<200, types.CouriersPickupPointsPostResponse200> | FetchResponse<207, types.CouriersPickupPointsPostResponse207>>;
    /**
     * The method enables updating personal collection points within your own collection points
     * chain. It does not allow for modifying integrated couriers collection points.
     *
     * @summary couriers/pickupPoints
     */
    couriersPickupPointsPut(body?: types.CouriersPickupPointsPutBodyParam): Promise<FetchResponse<200, types.CouriersPickupPointsPutResponse200> | FetchResponse<207, types.CouriersPickupPointsPutResponse207>>;
    /**
     * This call returns all CPA campaigns.
     *
     * @summary cpa/campaign
     */
    cpaCampaignGet(metadata?: types.CpaCampaignGetMetadataParam): Promise<FetchResponse<200, types.CpaCampaignGetResponse200> | FetchResponse<207, types.CpaCampaignGetResponse207>>;
    /**
     * Use this operation to create cpa campaigns.
     *
     * @summary cpa/campaign
     */
    cpaCampaignPost(body?: types.CpaCampaignPostBodyParam): Promise<FetchResponse<200, types.CpaCampaignPostResponse200> | FetchResponse<207, types.CpaCampaignPostResponse207>>;
    /**
     * Use this operation to update CPA campaigns.
     *
     * @summary cpa/campaign
     */
    cpaCampaignPut(body?: types.CpaCampaignPutBodyParam): Promise<FetchResponse<200, types.CpaCampaignPutResponse200> | FetchResponse<207, types.CpaCampaignPutResponse207>>;
    /**
     * This call is used to remove CPA program campaign.
     *
     * @summary cpa/campaign
     */
    cpaCampaignDelete(metadata?: types.CpaCampaignDeleteMetadataParam): Promise<FetchResponse<200, types.CpaCampaignDeleteResponse200> | FetchResponse<207, types.CpaCampaignDeleteResponse207>>;
    /**
     * This call returns all cpa programs.
     *
     * @summary cpa/cpa
     */
    cpaCpaGet(metadata?: types.CpaCpaGetMetadataParam): Promise<FetchResponse<200, types.CpaCpaGetResponse200> | FetchResponse<207, types.CpaCpaGetResponse207>>;
    /**
     * Use this operation to create code snippet.
     *
     * @summary cpa/cpa
     */
    cpaCpaPost(body?: types.CpaCpaPostBodyParam): Promise<FetchResponse<200, types.CpaCpaPostResponse200> | FetchResponse<207, types.CpaCpaPostResponse207>>;
    /**
     * Use this operation to update code snippet.
     *
     * @summary cpa/cpa
     */
    cpaCpaPut(body?: types.CpaCpaPutBodyParam): Promise<FetchResponse<200, types.CpaCpaPutResponse200> | FetchResponse<207, types.CpaCpaPutResponse207>>;
    /**
     * This call is used to remove CPA programs.
     *
     * @summary cpa/cpa
     */
    cpaCpaDelete(metadata?: types.CpaCpaDeleteMetadataParam): Promise<FetchResponse<200, types.CpaCpaDeleteResponse200> | FetchResponse<207, types.CpaCpaDeleteResponse207>>;
    /**
     * The method allows to set the default delivery profile for the given region.
     *
     * @summary deliveries/defaultProfiles
     */
    deliveriesDefaultProfilesPut(body?: types.DeliveriesDefaultProfilesPutBodyParam): Promise<FetchResponse<207, types.DeliveriesDefaultProfilesPutResponse207>>;
    /**
     * Allows to download all of the delivery profiles defined in the administration panel
     *
     * @summary deliveries/profiles
     */
    deliveriesProfilesGet(metadata?: types.DeliveriesProfilesGetMetadataParam): Promise<FetchResponse<200, types.DeliveriesProfilesGetResponse200> | FetchResponse<207, types.DeliveriesProfilesGetResponse207>>;
    /**
     * The method allows to download a list of regions supporting deliveries.
     *
     * @summary deliveries/regions
     */
    deliveriesRegionsGet(metadata?: types.DeliveriesRegionsGetMetadataParam): Promise<FetchResponse<200, types.DeliveriesRegionsGetResponse200> | FetchResponse<207, types.DeliveriesRegionsGetResponse207>>;
    /**
     * Allows you to add a region to the indicated country
     *
     * @summary deliveries/regions
     */
    deliveriesRegionsPost(body?: types.DeliveriesRegionsPostBodyParam): Promise<FetchResponse<200, types.DeliveriesRegionsPostResponse200> | FetchResponse<207, types.DeliveriesRegionsPostResponse207>>;
    /**
     * Returns the list of customer IDs assigned to an indicated discount group. In order to
     * assign a discount group, use setClients method in API Clients.
     *
     * @summary discounts/groups/clients
     */
    discountsGroupsClientsGet(metadata: types.DiscountsGroupsClientsGetMetadataParam): Promise<FetchResponse<200, types.DiscountsGroupsClientsGetResponse200> | FetchResponse<207, types.DiscountsGroupsClientsGetResponse207>>;
    /**
     * Allows to remove a discount group. The condition for conducting this process is no
     * customers assigned to the indicated group. In order to check the assigned customers use
     * getClientsAssignedToDiscountGroup method.
     *
     * @summary discounts/groups/delete
     */
    discountsGroupsDeletePost(body?: types.DiscountsGroupsDeletePostBodyParam): Promise<FetchResponse<207, types.DiscountsGroupsDeletePostResponse207>>;
    /**
     * Method that enables extracting information about discount groups configured in the
     * administration panel.
     *
     * @summary discounts/groups
     */
    discountsGroupsGet(metadata?: types.DiscountsGroupsGetMetadataParam): Promise<FetchResponse<200, types.DiscountsGroupsGetResponse200> | FetchResponse<207, types.DiscountsGroupsGetResponse207>>;
    /**
     * Allows to add a new discount group in the administration panel. The discount group is
     * added by default with the setting "Discount for products - yes, but different for
     * indicated groups".
     *
     * @summary discounts/groups
     */
    discountsGroupsPost(body?: types.DiscountsGroupsPostBodyParam): Promise<FetchResponse<200, types.DiscountsGroupsPostResponse200> | FetchResponse<207, types.DiscountsGroupsPostResponse207>>;
    /**
     * Allows to change a discount group name
     *
     * @summary discounts/groups
     */
    discountsGroupsPut(body?: types.DiscountsGroupsPutBodyParam): Promise<FetchResponse<207, types.DiscountsGroupsPutResponse207>>;
    /**
     * The method allows the removal of products from a discount group
     *
     * @summary discounts/groups/products/delete
     */
    discountsGroupsProductsDeletePost(body?: types.DiscountsGroupsProductsDeletePostBodyParam): Promise<FetchResponse<207, types.DiscountsGroupsProductsDeletePostResponse207>>;
    /**
     * The method allows products to be added to a discount group and their price to be
     * specified in the discount group
     *
     * @summary discounts/groups/products
     */
    discountsGroupsProductsPut(body?: types.DiscountsGroupsProductsPutBodyParam): Promise<FetchResponse<207, types.DiscountsGroupsProductsPutResponse207>>;
    /**
     * Allows to block an indicated discount card, eg. when it is assumed that its number has
     * been made available publicly. The blocked card can be unblocked with the method
     * unblockRebateCard.
     *
     * @summary discounts/rebates/blockCard
     */
    discountsRebatesBlockCardPut(body?: types.DiscountsRebatesBlockCardPutBodyParam): Promise<FetchResponse<207, types.DiscountsRebatesBlockCardPutResponse207>>;
    /**
     * Method allows to quickly delete all the discount codes, which have never been used by
     * customers, from an indicated rebate campaign. Codes which have been used at least once,
     * will not be deleted.
     *
     * @summary discounts/rebates/card/delete
     */
    discountsRebatesCardDeletePost(body?: types.DiscountsRebatesCardDeletePostBodyParam): Promise<FetchResponse<207, types.DiscountsRebatesCardDeletePostResponse207>>;
    /**
     * Allows to upload new card numbers to already existing discount card types in the
     * administration panel. Cards uploaded such way retrieve settings, regarding the discount
     * amount, from the type of cards to which they are uploaded. Every card can also have
     * individual, independent discount settings which can be set in the administration panel..
     *
     * @summary discounts/rebates/card
     */
    discountsRebatesCardPost(body?: types.DiscountsRebatesCardPostBodyParam): Promise<FetchResponse<207, types.DiscountsRebatesCardPostResponse207>>;
    /**
     * Allows to quickly delete all the discount codes, which have never been used by
     * customers, from an indicated rebate campaign. Codes which have been used at least once,
     * will not be deleted.
     *
     * @summary discounts/rebates/code/delete
     */
    discountsRebatesCodeDeletePost(body?: types.DiscountsRebatesCodeDeletePostBodyParam): Promise<FetchResponse<207, types.DiscountsRebatesCodeDeletePostResponse207>>;
    /**
     * Allows to upload new code numbers to already existing rebate campaigns in the
     * administration panel. The codes uploaded in such way retrieve settings, regarding the
     * discount amount, from a campaign to which they are uploaded. Each discount code can also
     * have individual, independent discount settings which can be set in the administration
     * panel.
     *
     * @summary discounts/rebates/code
     */
    discountsRebatesCodePost(body?: types.DiscountsRebatesCodePostBodyParam): Promise<FetchResponse<207, types.DiscountsRebatesCodePostResponse207>>;
    /**
     * unblockRebateCard method - allows to unblock discount cards. Block cards with the
     * blockRebateCard method.
     *
     * @summary discounts/rebates/unblockCard
     */
    discountsRebatesUnblockCardPut(body?: types.DiscountsRebatesUnblockCardPutBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Enables deleting blog or news entry
     *
     * @summary entries/entries/delete
     */
    entriesEntriesDeletePost(body?: types.EntriesEntriesDeletePostBodyParam): Promise<FetchResponse<207, types.EntriesEntriesDeletePostResponse207>>;
    /**
     * Enables downloading blog or news entry data
     *
     * @summary entries/entries
     */
    entriesEntriesGet(metadata?: types.EntriesEntriesGetMetadataParam): Promise<FetchResponse<200, types.EntriesEntriesGetResponse200> | FetchResponse<207, types.EntriesEntriesGetResponse207>>;
    /**
     * Enables adding blog or news entry
     *
     * @summary entries/entries
     */
    entriesEntriesPost(body?: types.EntriesEntriesPostBodyParam): Promise<FetchResponse<200, types.EntriesEntriesPostResponse200> | FetchResponse<207, types.EntriesEntriesPostResponse207>>;
    /**
     * Enables changing blog or news entry in the shop
     *
     * @summary entries/entries
     */
    entriesEntriesPut(body?: types.EntriesEntriesPutBodyParam): Promise<FetchResponse<207, types.EntriesEntriesPutResponse207>>;
    /**
     * Allows you to download a list of sites on which a blog entry or a news item can be
     * published.
     *
     * @summary entries/pagesToDisplay
     */
    entriesPagesToDisplayGet(metadata?: types.EntriesPagesToDisplayGetMetadataParam): Promise<FetchResponse<200, types.EntriesPagesToDisplayGetResponse200> | FetchResponse<207, types.EntriesPagesToDisplayGetResponse207>>;
    /**
     * This call returns all entry sources with options.
     *
     * @summary entries/sources
     */
    entriesSourcesGet(metadata?: types.EntriesSourcesGetMetadataParam): Promise<FetchResponse<200, types.EntriesSourcesGetResponse200> | FetchResponse<207, types.EntriesSourcesGetResponse207>>;
    /**
     * The method returns information about filter settings in menu nodes.
     *
     * @summary menu/filter
     */
    menuFilterGet(metadata?: types.MenuFilterGetMetadataParam): Promise<FetchResponse<200, types.MenuFilterGetResponse200> | FetchResponse<207, types.MenuFilterGetResponse207>>;
    /**
     * The method allows you to manage filter settings in menu nodes.
     *
     * @summary menu/filter
     */
    menuFilterPut(body?: types.MenuFilterPutBodyParam): Promise<FetchResponse<200, types.MenuFilterPutResponse200> | FetchResponse<207, types.MenuFilterPutResponse207>>;
    /**
     * Method that enables deleting existing menu elements.
     *
     * @summary menu/menu/delete
     */
    menuMenuDeletePost(body?: types.MenuMenuDeletePostBodyParam): Promise<FetchResponse<200, types.MenuMenuDeletePostResponse200> | FetchResponse<207, types.MenuMenuDeletePostResponse207>>;
    /**
     * Method that returns information about menus and menu elements.
     *
     * @summary menu/menu
     */
    menuMenuGet(metadata?: types.MenuMenuGetMetadataParam): Promise<FetchResponse<200, types.MenuMenuGetResponse200> | FetchResponse<207, types.MenuMenuGetResponse207>>;
    /**
     * Method that enables adding new menu elements.
     *
     * @summary menu/menu
     */
    menuMenuPost(body?: types.MenuMenuPostBodyParam): Promise<FetchResponse<200, types.MenuMenuPostResponse200> | FetchResponse<207, types.MenuMenuPostResponse207>>;
    /**
     * Method that enables editing existing menu elements.
     *
     * @summary menu/menu
     */
    menuMenuPut(body?: types.MenuMenuPutBodyParam): Promise<FetchResponse<200, types.MenuMenuPutResponse200> | FetchResponse<207, types.MenuMenuPutResponse207>>;
    /**
     * Method that enables sorting of menu elements.
     *
     * @summary menu/sort
     */
    menuSortPut(body?: types.MenuSortPutBodyParam): Promise<FetchResponse<200, types.MenuSortPutResponse200> | FetchResponse<207, types.MenuSortPutResponse207>>;
    /**
     * The method is used to retrieve information about the margins of the goods of the order.
     *
     * @summary orders/analytics
     */
    ordersAnalyticsGet(metadata?: types.OrdersAnalyticsGetMetadataParam): Promise<FetchResponse<200, types.OrdersAnalyticsGetResponse200> | FetchResponse<207, types.OrdersAnalyticsGetResponse207>>;
    /**
     * Method that enables getting information about external listings assigned to orders in
     * the administration panel.
     *
     * @summary orders/auctionDetails
     */
    ordersAuctionDetailsGet(metadata?: types.OrdersAuctionDetailsGetMetadataParam): Promise<FetchResponse<200, types.OrdersAuctionDetailsGetResponse200> | FetchResponse<207, types.OrdersAuctionDetailsGetResponse207>>;
    /**
     * orders/client
     *
     */
    ordersClientPut(body?: types.OrdersClientPutBodyParam): Promise<FetchResponse<207, types.OrdersClientPutResponse207>>;
    /**
     * Method that enables changing the courier handling the shipment for an order.
     *
     * @summary orders/courier
     */
    ordersCourierPut(body?: types.OrdersCourierPutBodyParam): Promise<FetchResponse<200, types.OrdersCourierPutResponse200> | FetchResponse<207, types.OrdersCourierPutResponse207>>;
    /**
     * Method that enables editing the delivery address details for an order in the
     * administration panel.
     *
     * @summary orders/deliveryAddress
     */
    ordersDeliveryAddressPut(body?: types.OrdersDeliveryAddressPutBodyParam): Promise<FetchResponse<207, types.OrdersDeliveryAddressPutResponse207>>;
    /**
     * Method for division order
     *
     * @summary orders/devide
     */
    ordersDevidePut(body?: types.OrdersDevidePutBodyParam): Promise<FetchResponse<200, types.OrdersDevidePutResponse200> | FetchResponse<207, types.OrdersDevidePutResponse207>>;
    /**
     * The method allows to generate documents to the order in the IdoSell administration
     * panel.
     *
     * @summary orders/documents/create
     */
    ordersDocumentsCreatePost(body?: types.OrdersDocumentsCreatePostBodyParam): Promise<FetchResponse<200, types.OrdersDocumentsCreatePostResponse200> | FetchResponse<207, types.OrdersDocumentsCreatePostResponse207>>;
    /**
     * The method allows to delete documents added to the order in the IdoSell administration
     * panel.
     *
     * @summary orders/documents/delete
     */
    ordersDocumentsDeletePost(body?: types.OrdersDocumentsDeletePostBodyParam): Promise<FetchResponse<200, types.OrdersDocumentsDeletePostResponse200> | FetchResponse<207, types.OrdersDocumentsDeletePostResponse207>>;
    /**
     * Method that enables extracting information about documents issued for orders in the
     * administration panel.
     *
     * @summary orders/documents
     */
    ordersDocumentsGet(metadata: types.OrdersDocumentsGetMetadataParam): Promise<FetchResponse<200, types.OrdersDocumentsGetResponse200> | FetchResponse<207, types.OrdersDocumentsGetResponse207>>;
    /**
     * The method allows to add TIFF, BMP, PNG, JPG, JPEG, GIF or PDF documents to the order in
     * the IdoSell Shop administration panel.
     *
     * @summary orders/documents
     */
    ordersDocumentsPost(body?: types.OrdersDocumentsPostBodyParam): Promise<FetchResponse<200, types.OrdersDocumentsPostResponse200> | FetchResponse<207, types.OrdersDocumentsPostResponse207>>;
    /**
     * This method returns sales and warehouse documents in the universal EDI (Electronic Data
     * Interchange) format.
     *
     * @summary orders/exportdocuments/EPP
     */
    ordersExportdocumentsEPPGet(metadata: types.OrdersExportdocumentsEppGetMetadataParam): Promise<FetchResponse<200, types.OrdersExportdocumentsEppGetResponse200> | FetchResponse<207, types.OrdersExportdocumentsEppGetResponse207>>;
    /**
     * Method returns sales and warehouse documents in universal JPK format.
     *
     * @summary orders/exportdocuments/JPK
     */
    ordersExportdocumentsJPKGet(metadata?: types.OrdersExportdocumentsJpkGetMetadataParam): Promise<FetchResponse<200, types.OrdersExportdocumentsJpkGetResponse200> | FetchResponse<207, types.OrdersExportdocumentsJpkGetResponse207>>;
    /**
     * Method that enables getting information about the handler currently assigned to an
     * order.
     *
     * @summary orders/handler
     */
    ordersHandlerGet(metadata: types.OrdersHandlerGetMetadataParam): Promise<FetchResponse<200, types.OrdersHandlerGetResponse200> | FetchResponse<207, types.OrdersHandlerGetResponse207>>;
    /**
     * Method that enabled assigning a handler to an order.
     *
     * @summary orders/handler
     */
    ordersHandlerPut(body?: types.OrdersHandlerPutBodyParam): Promise<FetchResponse<207, types.OrdersHandlerPutResponse207>>;
    /**
     * Method allows to retrieve orders history from the IdoSell Shop panel
     *
     * @summary orders/history
     */
    ordersHistoryGet(metadata: types.OrdersHistoryGetMetadataParam): Promise<FetchResponse<200, types.OrdersHistoryGetResponse200> | FetchResponse<207, types.OrdersHistoryGetResponse207>>;
    /**
     * Method allows to remove image attachments from the details of the specified order.
     *
     * @summary orders/images/delete
     */
    ordersImagesDeletePost(body?: types.OrdersImagesDeletePostBodyParam): Promise<FetchResponse<200, types.OrdersImagesDeletePostResponse200> | FetchResponse<207, types.OrdersImagesDeletePostResponse207>>;
    /**
     * Method allows downloading image attachment data from the details of the specified order.
     *
     * @summary orders/images
     */
    ordersImagesGet(metadata: types.OrdersImagesGetMetadataParam): Promise<FetchResponse<200, types.OrdersImagesGetResponse200> | FetchResponse<207, types.OrdersImagesGetResponse207>>;
    /**
     * Method allows to add image attachments to the details of the specified order.
     *
     * @summary orders/images
     */
    ordersImagesPost(body?: types.OrdersImagesPostBodyParam): Promise<FetchResponse<200, types.OrdersImagesPostResponse200> | FetchResponse<207, types.OrdersImagesPostResponse207>>;
    /**
     * The method is used to generate parcels and printouts for a courier.
     *
     * @summary orders/labels
     */
    ordersLabelsGet(metadata: types.OrdersLabelsGetMetadataParam): Promise<FetchResponse<200, types.OrdersLabelsGetResponse200> | FetchResponse<207, types.OrdersLabelsGetResponse207>>;
    /**
     * The method allows for downloading information about reviews issued for orders available
     * in the IdoSell Shop administration panel.
     *
     * @summary orders/opinions/search
     */
    ordersOpinionsSearchPost(body?: types.OrdersOpinionsSearchPostBodyParam): Promise<FetchResponse<200, types.OrdersOpinionsSearchPostResponse200> | FetchResponse<207, types.OrdersOpinionsSearchPostResponse207>>;
    /**
     * Evaluation of the usefulness of opinions issued for orders.
     *
     * @summary orders/opinionsRate
     */
    ordersOpinionsRateGet(metadata: types.OrdersOpinionsRateGetMetadataParam): Promise<FetchResponse<200, types.OrdersOpinionsRateGetResponse200> | FetchResponse<207, types.OrdersOpinionsRateGetResponse207>>;
    /**
     * Method that enables extracting information about orders present in the IdoSell Shop
     * administration panel.
     *
     * @summary orders/orders
     */
    ordersOrdersGet(metadata?: types.OrdersOrdersGetMetadataParam): Promise<FetchResponse<200, types.OrdersOrdersGetResponse200> | FetchResponse<207, types.OrdersOrdersGetResponse207>>;
    /**
     * Method that is used for adding new retail or wholesale orders to a shop in the
     * administration panel.
     *
     * @summary orders/orders
     */
    ordersOrdersPost(body?: types.OrdersOrdersPostBodyParam): Promise<FetchResponse<200, types.OrdersOrdersPostResponse200> | FetchResponse<207, types.OrdersOrdersPostResponse207>>;
    /**
     * Method that enables editing an order in the administration panel. It allows, for
     * example, to change the products included in the order or change its status.
     *
     * @summary orders/orders
     */
    ordersOrdersPut(body?: types.OrdersOrdersPutBodyParam): Promise<FetchResponse<200, types.OrdersOrdersPutResponse200> | FetchResponse<207, types.OrdersOrdersPutResponse207>>;
    /**
     * Method that enables extracting information about orders present in the IdoSell Shop
     * administration panel.
     *
     * @summary orders/orders/search
     */
    ordersOrdersSearchPost(body?: types.OrdersOrdersSearchPostBodyParam): Promise<FetchResponse<200, types.OrdersOrdersSearchPostResponse200> | FetchResponse<207, types.OrdersOrdersSearchPostResponse207>>;
    /**
     * Method that enables getting a list of parcels assigned to an order.
     *
     * @summary orders/packages
     */
    ordersPackagesGet(metadata?: types.OrdersPackagesGetMetadataParam): Promise<FetchResponse<200, types.OrdersPackagesGetResponse200> | FetchResponse<207, types.OrdersPackagesGetResponse207>>;
    /**
     * Method that enables editing parcels already assigned to an order.
     *
     * @summary orders/packages
     */
    ordersPackagesPost(body?: types.OrdersPackagesPostBodyParam): Promise<FetchResponse<200, types.OrdersPackagesPostResponse200> | FetchResponse<207, types.OrdersPackagesPostResponse207>>;
    /**
     * Method that enables editing parcels already assigned to an order.
     *
     * @summary orders/packages
     */
    ordersPackagesPut(body?: types.OrdersPackagesPutBodyParam): Promise<FetchResponse<200, types.OrdersPackagesPutResponse200> | FetchResponse<207, types.OrdersPackagesPutResponse207>>;
    /**
     * The method allows to change the collection point in the order.
     *
     * @summary orders/pickupPoint
     */
    ordersPickupPointPut(body?: types.OrdersPickupPointPutBodyParam): Promise<FetchResponse<200, types.OrdersPickupPointPutResponse200> | FetchResponse<207, types.OrdersPickupPointPutResponse207>>;
    /**
     * Method that enables getting a VAT invoice issued for an order added to the
     * administration panel by the IAI POS application.
     *
     * @summary orders/printerDocuments
     */
    ordersPrinterDocumentsGet(metadata: types.OrdersPrinterDocumentsGetMetadataParam): Promise<FetchResponse<200, types.OrdersPrinterDocumentsGetResponse200> | FetchResponse<207, types.OrdersPrinterDocumentsGetResponse207>>;
    /**
     * Method that enables adding serial numbers to products in an order.
     *
     * @summary orders/productsSerialNumbers
     */
    ordersProductsSerialNumbersPut(body?: types.OrdersProductsSerialNumbersPutBodyParam): Promise<FetchResponse<200, types.OrdersProductsSerialNumbersPutResponse200> | FetchResponse<207, types.OrdersProductsSerialNumbersPutResponse207>>;
    /**
     * Method that enables setting price margins for products in an order.
     *
     * @summary orders/profitMargin
     */
    ordersProfitMarginPut(body?: types.OrdersProfitMarginPutBodyParam): Promise<FetchResponse<200, types.OrdersProfitMarginPutResponse200> | FetchResponse<207, types.OrdersProfitMarginPutResponse207>>;
    /**
     * The method is used to retrieve information about the profitability of an order
     *
     * @summary orders/profitability
     */
    ordersProfitabilityGet(metadata: types.OrdersProfitabilityGetMetadataParam): Promise<FetchResponse<200, types.OrdersProfitabilityGetResponse200> | FetchResponse<207, types.OrdersProfitabilityGetResponse207>>;
    /**
     * Method that enables editing the delivery costs for an order in the administration panel.
     *
     * @summary orders/shippingCosts
     */
    ordersShippingCostsPut(body?: types.OrdersShippingCostsPutBodyParam): Promise<FetchResponse<207, types.OrdersShippingCostsPutResponse207>>;
    /**
     * It allows you to download information about unclosed orders located in the store's
     * administration panel. Orders with a status of false and lost are considered closed.
     * Orders with a status of false and lost are considered closed.
     *
     * @summary orders/unfinished/search
     */
    ordersUnfinishedSearchPost(body?: types.OrdersUnfinishedSearchPostBodyParam): Promise<FetchResponse<200, types.OrdersUnfinishedSearchPostResponse200> | FetchResponse<207, types.OrdersUnfinishedSearchPostResponse207>>;
    /**
     * Method that enables getting information about which warehouse an order is being handled
     * from.
     *
     * @summary orders/warehouse
     */
    ordersWarehouseGet(metadata: types.OrdersWarehouseGetMetadataParam): Promise<FetchResponse<200, types.OrdersWarehouseGetResponse200> | FetchResponse<207, types.OrdersWarehouseGetResponse207>>;
    /**
     * Method that enables setting which warehouse an order is handled from.
     *
     * @summary orders/warehouse
     */
    ordersWarehousePut(body?: types.OrdersWarehousePutBodyParam): Promise<FetchResponse<207, types.OrdersWarehousePutResponse207>>;
    /**
     * The method allows you to download labels for the courier from orders, complaints and
     * returns.
     *
     * @summary packages/labels
     */
    packagesLabelsGet(metadata: types.PackagesLabelsGetMetadataParam): Promise<FetchResponse<200, types.PackagesLabelsGetResponse200> | FetchResponse<207, types.PackagesLabelsGetResponse207>>;
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
    packagesLabelsPost(body?: types.PackagesLabelsPostBodyParam): Promise<FetchResponse<200, types.PackagesLabelsPostResponse200> | FetchResponse<207, types.PackagesLabelsPostResponse207>>;
    /**
     * Method that enables adding parcels to an order.
     *
     * @summary packages/packages
     */
    packagesPackagesPost(body?: types.PackagesPackagesPostBodyParam): Promise<FetchResponse<200, types.PackagesPackagesPostResponse200> | FetchResponse<207, types.PackagesPackagesPostResponse207>>;
    /**
     * Method that enables editing parcels already assigned to an order.
     *
     * @summary packages/packages
     */
    packagesPackagesPut(body?: types.PackagesPackagesPutBodyParam): Promise<FetchResponse<200, types.PackagesPackagesPutResponse200> | FetchResponse<207, types.PackagesPackagesPutResponse207>>;
    /**
     * Method that enables getting a list of parcels assigned to an order.
     *
     * @summary packages/packages/search
     */
    packagesPackagesSearchPost(body?: types.PackagesPackagesSearchPostBodyParam): Promise<FetchResponse<200, types.PackagesPackagesSearchPostResponse200> | FetchResponse<207, types.PackagesPackagesSearchPostResponse207>>;
    /**
     * Method that enables cancelling payments for orders in the administration panel.
     *
     * @summary payments/cancel
     */
    paymentsCancelPost(body?: types.PaymentsCancelPostBodyParam): Promise<FetchResponse<207, types.PaymentsCancelPostResponse207>>;
    /**
     * The method allows to send refund requests (so called cashback) for payments managed by
     * external payment systems which have such option available..
     *
     * @summary payments/cashback
     */
    paymentsCashbackPost(body?: types.PaymentsCashbackPostBodyParam): Promise<FetchResponse<200, types.PaymentsCashbackPostResponse200> | FetchResponse<207, types.PaymentsCashbackPostResponse207>>;
    /**
     * Method that enables accepting payments for orders in the administration panel.
     *
     * @summary payments/confirm
     */
    paymentsConfirmPut(body?: types.PaymentsConfirmPutBodyParam): Promise<FetchResponse<207, types.PaymentsConfirmPutResponse207>>;
    /**
     * Method that enables getting information about payment methods available in the
     * administration panel.
     *
     * @summary payments/forms
     */
    paymentsFormsGet(metadata?: types.PaymentsFormsGetMetadataParam): Promise<FetchResponse<200, types.PaymentsFormsGetResponse200> | FetchResponse<207, types.PaymentsFormsGetResponse207>>;
    /**
     * Method that enables getting information about payments for orders in the administration
     * panel.
     *
     * @summary payments/payments
     */
    paymentsPaymentsGet(metadata: types.PaymentsPaymentsGetMetadataParam): Promise<FetchResponse<200, types.PaymentsPaymentsGetResponse200> | FetchResponse<207, types.PaymentsPaymentsGetResponse207>>;
    /**
     * Method that enables adding payments to orders in the administration panel.
     *
     * @summary payments/payments
     */
    paymentsPaymentsPost(body?: types.PaymentsPaymentsPostBodyParam): Promise<FetchResponse<200, types.PaymentsPaymentsPostResponse200> | FetchResponse<207, types.PaymentsPaymentsPostResponse207>>;
    /**
     * Method that enables editing payments for orders in the administration panel.
     *
     * @summary payments/payments
     */
    paymentsPaymentsPut(body?: types.PaymentsPaymentsPutBodyParam): Promise<FetchResponse<207, types.PaymentsPaymentsPutResponse207>>;
    /**
     * Allows to download all of the payment profiles defined in the administration panel
     *
     * @summary payments/profiles
     */
    paymentsProfilesGet(metadata?: types.PaymentsProfilesGetMetadataParam): Promise<FetchResponse<200, types.PaymentsProfilesGetResponse200> | FetchResponse<207, types.PaymentsProfilesGetResponse207>>;
    /**
     * Method that enables adding withdrawals for orders in the administration panel.
     *
     * @summary payments/repayment
     */
    paymentsRepaymentPost(body?: types.PaymentsRepaymentPostBodyParam): Promise<FetchResponse<200, types.PaymentsRepaymentPostResponse200> | FetchResponse<207, types.PaymentsRepaymentPostResponse207>>;
    /**
     * The method allows to download, among others, information on identifiers, names and size
     * codes, their available stock quantity and locations in the warehouse based on scanned
     * bar codes.
     *
     * @summary products/SKUbyBarcode
     */
    productsSKUbyBarcodeGet(metadata?: types.ProductsSkUbyBarcodeGetMetadataParam): Promise<FetchResponse<200, types.ProductsSkUbyBarcodeGetResponse200> | FetchResponse<207, types.ProductsSkUbyBarcodeGetResponse207>>;
    /**
     * Method that enables adding and editing product attachments.
     *
     * @summary products/attachments
     */
    productsAttachmentsPut(body?: types.ProductsAttachmentsPutBodyParam): Promise<FetchResponse<200, types.ProductsAttachmentsPutResponse200> | FetchResponse<207, types.ProductsAttachmentsPutResponse207>>;
    /**
     * Allows for downloading information about auctions and auction categories to which the
     * product has been assigned (for a maximum of 100 products in one request)
     *
     * @summary products/auctions
     */
    productsAuctionsGet(metadata?: types.ProductsAuctionsGetMetadataParam): Promise<FetchResponse<200, types.ProductsAuctionsGetResponse200> | FetchResponse<207, types.ProductsAuctionsGetResponse207>>;
    /**
     * The method allows you to remove brands from the administration panel.
     *
     * @summary products/brands/delete
     */
    productsBrandsDeletePost(body?: types.ProductsBrandsDeletePostBodyParam): Promise<FetchResponse<207, types.ProductsBrandsDeletePostResponse207>>;
    /**
     * The method allows you to download a list of filters for brands (manufacturers) available
     * in the IdoSell administration panel.
     *
     * @summary products/brands/filter
     */
    productsBrandsFilterGet(metadata: types.ProductsBrandsFilterGetMetadataParam): Promise<FetchResponse<200, types.ProductsBrandsFilterGetResponse200> | FetchResponse<207, types.ProductsBrandsFilterGetResponse207>>;
    /**
     * The method allows you to manage filter settings for brands (manufacturers).
     *
     * @summary products/brands/filter
     */
    productsBrandsFilterPut(body?: types.ProductsBrandsFilterPutBodyParam): Promise<FetchResponse<200, types.ProductsBrandsFilterPutResponse200> | FetchResponse<207, types.ProductsBrandsFilterPutResponse207>>;
    /**
     * Method that returns information about brands available in the IdoSell Shop
     * administration panel.
     *
     * @summary products/brands
     */
    productsBrandsGet(metadata?: types.ProductsBrandsGetMetadataParam): Promise<FetchResponse<200, types.ProductsBrandsGetResponse200> | FetchResponse<207, types.ProductsBrandsGetResponse207>>;
    /**
     * The method allows you to update brands information available in the administration
     * panel.
     *
     * @summary products/brands
     */
    productsBrandsPost(body?: types.ProductsBrandsPostBodyParam): Promise<FetchResponse<200, types.ProductsBrandsPostResponse200> | FetchResponse<207, types.ProductsBrandsPostResponse207>>;
    /**
     * The method allows you to update brands information available in the administration
     * panel.
     *
     * @summary products/brands
     */
    productsBrandsPut(body?: types.ProductsBrandsPutBodyParam): Promise<FetchResponse<200, types.ProductsBrandsPutResponse200> | FetchResponse<207, types.ProductsBrandsPutResponse207>>;
    /**
     * createBundle method allows to create a new product with a type: set and to assign
     * existing products as a set components. Products added via this gate are hidden from the
     * shop customer by default. To change the visibility of created products use the gate
     * setProducts or set it on a product card in the shop administration panel
     *
     * @summary products/bundles/bundles
     */
    productsBundlesBundlesPost(body?: types.ProductsBundlesBundlesPostBodyParam): Promise<FetchResponse<200, types.ProductsBundlesBundlesPostResponse200> | FetchResponse<207, types.ProductsBundlesBundlesPostResponse207>>;
    /**
     * removeProductsFromBundle method allows to remove indicated set components
     *
     * @summary products/bundles/products/delete
     */
    productsBundlesProductsDeletePost(body?: types.ProductsBundlesProductsDeletePostBodyParam): Promise<FetchResponse<200, types.ProductsBundlesProductsDeletePostResponse200> | FetchResponse<207, types.ProductsBundlesProductsDeletePostResponse207>>;
    /**
     * addProductsToBundle method allows to add components to existing sets in the
     * administration panel
     *
     * @summary products/bundles/products
     */
    productsBundlesProductsPost(body?: types.ProductsBundlesProductsPostBodyParam): Promise<FetchResponse<200, types.ProductsBundlesProductsPostResponse200> | FetchResponse<207, types.ProductsBundlesProductsPostResponse207>>;
    /**
     * setProductsQuantityInBundle method allows to indicate quantity of a set component
     *
     * @summary products/bundles/productsQuantity
     */
    productsBundlesProductsQuantityPut(body?: types.ProductsBundlesProductsQuantityPutBodyParam): Promise<FetchResponse<200, types.ProductsBundlesProductsQuantityPutResponse200> | FetchResponse<207, types.ProductsBundlesProductsQuantityPutResponse207>>;
    /**
     * the renewProductsInBundle method allows you to rebuild components of Sets existing in
     * the administration panel
     *
     * @summary products/bundles/renew
     */
    productsBundlesRenewPut(body?: types.ProductsBundlesRenewPutBodyParam): Promise<FetchResponse<200, types.ProductsBundlesRenewPutResponse200> | FetchResponse<207, types.ProductsBundlesRenewPutResponse207>>;
    /**
     * Method that returns information about categories configured in the administration panel.
     *
     * @summary products/categories
     */
    productsCategoriesGet(metadata?: types.ProductsCategoriesGetMetadataParam): Promise<FetchResponse<200, types.ProductsCategoriesGetResponse200> | FetchResponse<207, types.ProductsCategoriesGetResponse207>>;
    /**
     * Method that enables adding new categories to the administration panel as well editing
     * and deleting of existing categories.
     *
     * @summary products/categories
     */
    productsCategoriesPut(body?: types.ProductsCategoriesPutBodyParam): Promise<FetchResponse<200, types.ProductsCategoriesPutResponse200> | FetchResponse<207, types.ProductsCategoriesPutResponse207>>;
    /**
     * Method returns information about IdoSell Categories available in store.
     *
     * @summary products/categoriesIdosell/search
     */
    productsCategoriesIdosellSearchPost(body?: types.ProductsCategoriesIdosellSearchPostBodyParam): Promise<FetchResponse<200, types.ProductsCategoriesIdosellSearchPostResponse200> | FetchResponse<207, types.ProductsCategoriesIdosellSearchPostResponse207>>;
    /**
     * The method allows to check if a product with the given identification code (panel ID,
     * IAI code, manufacturer code, external system code) exists in the panel.
     *
     * @summary products/codeExistence
     */
    productsCodeExistenceGet(metadata: types.ProductsCodeExistenceGetMetadataParam): Promise<FetchResponse<200, types.ProductsCodeExistenceGetResponse200> | FetchResponse<207, types.ProductsCodeExistenceGetResponse207>>;
    /**
     * createCollection method allows to create a new product with a type: collection and to
     * assign existing products as a collection components. Products added via this gate are
     * hidden from the shop customer by default. To change the visibility of created products
     * use the gate setProducts or set it on a product card in the shop administration panel
     *
     * @summary products/collections
     */
    productsCollectionsPost(body?: types.ProductsCollectionsPostBodyParam): Promise<FetchResponse<200, types.ProductsCollectionsPostResponse200> | FetchResponse<207, types.ProductsCollectionsPostResponse207>>;
    /**
     * removeProductsFromCollection method allows to remove indicated collection components
     *
     * @summary products/collections/products/delete
     */
    productsCollectionsProductsDeletePost(body?: types.ProductsCollectionsProductsDeletePostBodyParam): Promise<FetchResponse<200, types.ProductsCollectionsProductsDeletePostResponse200> | FetchResponse<207, types.ProductsCollectionsProductsDeletePostResponse207>>;
    /**
     * addProductsToCollection method allows to add components to existing collections in the
     * administration panel
     *
     * @summary products/collections/products
     */
    productsCollectionsProductsPost(body?: types.ProductsCollectionsProductsPostBodyParam): Promise<FetchResponse<200, types.ProductsCollectionsProductsPostResponse200> | FetchResponse<207, types.ProductsCollectionsProductsPostResponse207>>;
    /**
     * setProductsQuantityInCollection method allows to indicate quantity of a collection
     * component
     *
     * @summary products/collections/products
     */
    productsCollectionsProductsPut(body?: types.ProductsCollectionsProductsPutBodyParam): Promise<FetchResponse<200, types.ProductsCollectionsProductsPutResponse200> | FetchResponse<207, types.ProductsCollectionsProductsPutResponse207>>;
    /**
     * the renewProductsInCollection method allows you to rebuild existing components of
     * Collections in the administration panel
     *
     * @summary products/collections/renew
     */
    productsCollectionsRenewPut(body?: types.ProductsCollectionsRenewPutBodyParam): Promise<FetchResponse<200, types.ProductsCollectionsRenewPutResponse200> | FetchResponse<207, types.ProductsCollectionsRenewPutResponse207>>;
    /**
     * The method returns the time needed to prepare the product for shipment
     *
     * @summary products/deliveryTime/search
     */
    productsDeliveryTimeSearchPost(body?: types.ProductsDeliveryTimeSearchPostBodyParam): Promise<FetchResponse<200, types.ProductsDeliveryTimeSearchPostResponse200> | FetchResponse<207, types.ProductsDeliveryTimeSearchPostResponse207>>;
    /**
     * Method that returns text elements for a given product, e.g. product name, long and short
     * description, metadata.
     *
     * @summary products/descriptions
     */
    productsDescriptionsGet(metadata: types.ProductsDescriptionsGetMetadataParam): Promise<FetchResponse<200, types.ProductsDescriptionsGetResponse200> | FetchResponse<207, types.ProductsDescriptionsGetResponse207>>;
    /**
     * The method allows for setting text elements for a given product, e.g. product name, long
     * and short description, metadata.
     *
     * @summary products/descriptions
     */
    productsDescriptionsPut(body?: types.ProductsDescriptionsPutBodyParam): Promise<FetchResponse<200, types.ProductsDescriptionsPutResponse200> | FetchResponse<207, types.ProductsDescriptionsPutResponse207>>;
    /**
     * The method allows you to change the main product in a group of products.
     *
     * @summary products/groups/mainProduct
     */
    productsGroupsMainProductPut(body?: types.ProductsGroupsMainProductPutBodyParam): Promise<FetchResponse<200, types.ProductsGroupsMainProductPutResponse200> | FetchResponse<207, types.ProductsGroupsMainProductPutResponse207>>;
    /**
     * The method allows you to change the order of products in a group of products.
     *
     * @summary products/groups/order
     */
    productsGroupsOrderPut(body?: types.ProductsGroupsOrderPutBodyParam): Promise<FetchResponse<200, types.ProductsGroupsOrderPutResponse200> | FetchResponse<207, types.ProductsGroupsOrderPutResponse207>>;
    /**
     * The method allows you to change the settings for displaying products to a group of
     * products .
     *
     * @summary products/groups/settings
     */
    productsGroupsSettingsPut(body?: types.ProductsGroupsSettingsPutBodyParam): Promise<FetchResponse<200, types.ProductsGroupsSettingsPutResponse200> | FetchResponse<207, types.ProductsGroupsSettingsPutResponse207>>;
    /**
     * Method that returns information about product IDs, as well as size IDs and names, based
     * on the provided product external system codes.
     *
     * @summary products/idBySizecode
     */
    productsIdBySizecodeGet(metadata?: types.ProductsIdBySizecodeGetMetadataParam): Promise<FetchResponse<200, types.ProductsIdBySizecodeGetResponse200> | FetchResponse<207, types.ProductsIdBySizecodeGetResponse207>>;
    /**
     * This method is used to delete images of products
     *
     * @summary products/images/delete
     */
    productsImagesDeletePost(body?: types.ProductsImagesDeletePostBodyParam): Promise<FetchResponse<200, types.ProductsImagesDeletePostResponse200> | FetchResponse<207, types.ProductsImagesDeletePostResponse207>>;
    /**
     * Method used for adding and editing product pictures.
     *
     * @summary products/images
     */
    productsImagesPut(body?: types.ProductsImagesPutBodyParam): Promise<FetchResponse<200, types.ProductsImagesPutResponse200> | FetchResponse<207, types.ProductsImagesPutResponse207>>;
    /**
     * The method allows you to download available Facebook catalogs in a given store.
     *
     * @summary products/marketing/allFacebookCatalogIds
     */
    productsMarketingAllFacebookCatalogIdsGet(metadata: types.ProductsMarketingAllFacebookCatalogIdsGetMetadataParam): Promise<FetchResponse<200, types.ProductsMarketingAllFacebookCatalogIdsGetResponse200> | FetchResponse<207, types.ProductsMarketingAllFacebookCatalogIdsGetResponse207>>;
    /**
     * The method allows to download a list of active promotions for the given store.
     *
     * @summary products/marketing/promotion
     */
    productsMarketingPromotionGet(metadata?: types.ProductsMarketingPromotionGetMetadataParam): Promise<FetchResponse<200, types.ProductsMarketingPromotionGetResponse200> | FetchResponse<207, types.ProductsMarketingPromotionGetResponse207>>;
    /**
     * The method allows you to add promotions from a new module with elements.
     *
     * @summary products/marketing/promotion
     */
    productsMarketingPromotionPost(body?: types.ProductsMarketingPromotionPostBodyParam): Promise<FetchResponse<200, types.ProductsMarketingPromotionPostResponse200> | FetchResponse<207, types.ProductsMarketingPromotionPostResponse207>>;
    /**
     * The method allows you to edit the promotion from the new module with the elements.
     *
     * @summary products/marketing/promotion
     */
    productsMarketingPromotionPut(body?: types.ProductsMarketingPromotionPutBodyParam): Promise<FetchResponse<200, types.ProductsMarketingPromotionPutResponse200> | FetchResponse<207, types.ProductsMarketingPromotionPutResponse207>>;
    /**
     * Allows for getting information about products assigned to marketing hot spots
     *
     * @summary products/marketingZones
     */
    productsMarketingZonesGet(metadata?: types.ProductsMarketingZonesGetMetadataParam): Promise<FetchResponse<200, types.ProductsMarketingZonesGetResponse200> | FetchResponse<207, types.ProductsMarketingZonesGetResponse207>>;
    /**
     * Allows for assigning products to marketing hot spots
     *
     * @summary products/marketingZones
     */
    productsMarketingZonesPut(body?: types.ProductsMarketingZonesPutBodyParam): Promise<FetchResponse<200, types.ProductsMarketingZonesPutResponse200> | FetchResponse<207, types.ProductsMarketingZonesPutResponse207>>;
    /**
     * Allows you to download information about the lowest prices before promotions
     *
     * @summary products/omnibusPrices
     */
    productsOmnibusPricesGet(metadata?: types.ProductsOmnibusPricesGetMetadataParam): Promise<FetchResponse<200, types.ProductsOmnibusPricesGetResponse200>>;
    /**
     * Allows for editing product strikethrough price settings
     *
     * @summary products/omnibusPrices
     */
    productsOmnibusPricesPut(body?: types.ProductsOmnibusPricesPutBodyParam): Promise<FetchResponse<200, types.ProductsOmnibusPricesPutResponse200> | FetchResponse<207, types.ProductsOmnibusPricesPutResponse207>>;
    /**
     * The method allows to delete the feedback about the commodity from the panel.
     *
     * @summary products/opinions/opinions/delete
     */
    productsOpinionsOpinionsDeletePost(body?: types.ProductsOpinionsOpinionsDeletePostBodyParam): Promise<FetchResponse<207, types.ProductsOpinionsOpinionsDeletePostResponse207>>;
    /**
     * The method allows for downloading information about reviews issued for products
     * available in the IdoSell Shop administration panel.
     *
     * @summary products/opinions/opinions
     */
    productsOpinionsOpinionsGet(metadata?: types.ProductsOpinionsOpinionsGetMetadataParam): Promise<FetchResponse<200, types.ProductsOpinionsOpinionsGetResponse200> | FetchResponse<207, types.ProductsOpinionsOpinionsGetResponse207>>;
    /**
     * The method allows for adding reviews of products available in the IdoSell Shop
     * administration panel.
     *
     * @summary products/opinions/opinions
     */
    productsOpinionsOpinionsPost(body?: types.ProductsOpinionsOpinionsPostBodyParam): Promise<FetchResponse<200, types.ProductsOpinionsOpinionsPostResponse200> | FetchResponse<207, types.ProductsOpinionsOpinionsPostResponse207>>;
    /**
     * The method allows to edit opinions about goods available in the IdoSell Shop
     * administration panel.
     *
     * @summary products/opinions/opinions
     */
    productsOpinionsOpinionsPut(body?: types.ProductsOpinionsOpinionsPutBodyParam): Promise<FetchResponse<207, types.ProductsOpinionsOpinionsPutResponse207>>;
    /**
     * Evaluation of the usefulness of opinions issued for products.
     *
     * @summary products/opinions/rate
     */
    productsOpinionsRateGet(metadata: types.ProductsOpinionsRateGetMetadataParam): Promise<FetchResponse<200, types.ProductsOpinionsRateGetResponse200> | FetchResponse<207, types.ProductsOpinionsRateGetResponse207>>;
    /**
     * The method allows you to delete parameters and their values (for parameters that are not
     * pinned to any product)..
     *
     * @summary products/parameters/delete
     */
    productsParametersDeletePost(body?: types.ProductsParametersDeletePostBodyParam): Promise<FetchResponse<200, types.ProductsParametersDeletePostResponse200> | FetchResponse<207, types.ProductsParametersDeletePostResponse207>>;
    /**
     * Method that enables adding and editing of sections and parameters, modifying their
     * values and setting their order.
     *
     * @summary products/parameters
     */
    productsParametersPut(body?: types.ProductsParametersPutBodyParam): Promise<FetchResponse<200, types.ProductsParametersPutResponse200> | FetchResponse<207, types.ProductsParametersPutResponse207>>;
    /**
     * Method that enables adding and editing of sections and parameters, modifying their
     * values and setting their order.
     *
     * @summary products/parameters/search
     */
    productsParametersSearchPost(body?: types.ProductsParametersSearchPostBodyParam): Promise<FetchResponse<200, types.ProductsParametersSearchPostResponse200> | FetchResponse<207, types.ProductsParametersSearchPostResponse207>>;
    /**
     * Method used for deleting products from the IdoSell Shop administration panel.
     *
     * @summary products/products/delete
     */
    productsProductsDeletePost(body?: types.ProductsProductsDeletePostBodyParam): Promise<FetchResponse<200, types.ProductsProductsDeletePostResponse200> | FetchResponse<207, types.ProductsProductsDeletePostResponse207>>;
    /**
     * Method that enables extracting information about non-deleted products available in the
     * administration panel.
     *
     * @summary products/products
     */
    productsProductsGet(metadata?: types.ProductsProductsGetMetadataParam): Promise<FetchResponse<200, types.ProductsProductsGetResponse200> | FetchResponse<207, types.ProductsProductsGetResponse207>>;
    /**
     * The method is used to add products
     *
     * @summary products/products
     */
    productsProductsPost(body?: types.ProductsProductsPostBodyParam): Promise<FetchResponse<200, types.ProductsProductsPostResponse200> | FetchResponse<207, types.ProductsProductsPostResponse207>>;
    /**
     * Method that enables editing and adding new products to the administration panel.
     *
     * @summary products/products
     */
    productsProductsPut(body?: types.ProductsProductsPutBodyParam): Promise<FetchResponse<200, types.ProductsProductsPutResponse200> | FetchResponse<207, types.ProductsProductsPutResponse207>>;
    /**
     * Method that enables extracting information about non-deleted products available in the
     * administration panel
     *
     * @summary products/products/search
     */
    productsProductsSearchPost(body?: types.ProductsProductsSearchPostBodyParam): Promise<FetchResponse<200, types.ProductsProductsSearchPostResponse200> | FetchResponse<207, types.ProductsProductsSearchPostResponse207>>;
    /**
     * The method allows you to add products to the Facebook catalog.
     *
     * @summary products/productsToFacebookCatalog/delete
     */
    productsProductsToFacebookCatalogDeletePost(body?: types.ProductsProductsToFacebookCatalogDeletePostBodyParam): Promise<FetchResponse<207, types.ProductsProductsToFacebookCatalogDeletePostResponse207>>;
    /**
     * The method allows you to retrieve products assigned to the Facebook catalog.
     *
     * @summary products/productsToFacebookCatalog
     */
    productsProductsToFacebookCatalogGet(metadata: types.ProductsProductsToFacebookCatalogGetMetadataParam): Promise<FetchResponse<200, types.ProductsProductsToFacebookCatalogGetResponse200> | FetchResponse<207, types.ProductsProductsToFacebookCatalogGetResponse207>>;
    /**
     * The method allows you to add products to the Facebook catalog.
     *
     * @summary products/productsToFacebookCatalog
     */
    productsProductsToFacebookCatalogPost(body?: types.ProductsProductsToFacebookCatalogPostBodyParam): Promise<FetchResponse<207, types.ProductsProductsToFacebookCatalogPostResponse207>>;
    /**
     * The method allows to remove the products from the promotion.
     *
     * @summary products/productsToPromotion/delete
     */
    productsProductsToPromotionDeletePost(body?: types.ProductsProductsToPromotionDeletePostBodyParam): Promise<FetchResponse<200, types.ProductsProductsToPromotionDeletePostResponse200> | FetchResponse<207, types.ProductsProductsToPromotionDeletePostResponse207>>;
    /**
     * The method allows to add products to an existing special offer.
     *
     * @summary products/productsToPromotion
     */
    productsProductsToPromotionPost(body?: types.ProductsProductsToPromotionPostBodyParam): Promise<FetchResponse<200, types.ProductsProductsToPromotionPostResponse200> | FetchResponse<207, types.ProductsProductsToPromotionPostResponse207>>;
    /**
     * The method allows you to download a list of questions to products available in the
     * IdoSell Shop administration panel.
     *
     * @summary products/questions
     */
    productsQuestionsGet(metadata?: types.ProductsQuestionsGetMetadataParam): Promise<FetchResponse<200, types.ProductsQuestionsGetResponse200> | FetchResponse<207, types.ProductsQuestionsGetResponse207>>;
    /**
     * The method allows you to add and edit questions to products available in the IdoSell
     * Shop administration panel.
     *
     * @summary products/questions
     */
    productsQuestionsPut(body?: types.ProductsQuestionsPutBodyParam): Promise<FetchResponse<200, types.ProductsQuestionsPutResponse200> | FetchResponse<207, types.ProductsQuestionsPutResponse207>>;
    /**
     * It allows to download information about product reservations in orders (for up to 100
     * products in one request).
     *
     * @summary products/reservations
     */
    productsReservationsGet(metadata?: types.ProductsReservationsGetMetadataParam): Promise<FetchResponse<200, types.ProductsReservationsGetResponse200> | FetchResponse<207, types.ProductsReservationsGetResponse207>>;
    /**
     * The method is used to restore deleted products
     *
     * @summary products/restore
     */
    productsRestorePost(body?: types.ProductsRestorePostBodyParam): Promise<FetchResponse<207, types.ProductsRestorePostResponse207>>;
    /**
     * Method allows you to delete a series of products available in the IdoSell administration
     * panel.
     *
     * @summary products/series/delete
     */
    productsSeriesDeletePost(body?: types.ProductsSeriesDeletePostBodyParam): Promise<FetchResponse<207, types.ProductsSeriesDeletePostResponse207>>;
    /**
     * Method allows you to retrieve a list of filters for a series of products available in
     * the IdoSell administration panel..
     *
     * @summary products/series/filter
     */
    productsSeriesFilterGet(metadata: types.ProductsSeriesFilterGetMetadataParam): Promise<FetchResponse<200, types.ProductsSeriesFilterGetResponse200> | FetchResponse<207, types.ProductsSeriesFilterGetResponse207>>;
    /**
     * The method allows you to manage the filter settings for the series..
     *
     * @summary products/series/filter
     */
    productsSeriesFilterPut(body?: types.ProductsSeriesFilterPutBodyParam): Promise<FetchResponse<200, types.ProductsSeriesFilterPutResponse200> | FetchResponse<207, types.ProductsSeriesFilterPutResponse207>>;
    /**
     * Method returns information about the product series available in the IdoSell
     * administration panel.
     *
     * @summary products/series
     */
    productsSeriesGet(metadata?: types.ProductsSeriesGetMetadataParam): Promise<FetchResponse<200, types.ProductsSeriesGetResponse200> | FetchResponse<207, types.ProductsSeriesGetResponse207>>;
    /**
     * Method allows you to update information about product series available in the IdoSell
     * administration panel.
     *
     * @summary products/series
     */
    productsSeriesPut(body?: types.ProductsSeriesPutBodyParam): Promise<FetchResponse<200, types.ProductsSeriesPutResponse200> | FetchResponse<207, types.ProductsSeriesPutResponse207>>;
    /**
     * The method is used to remove sizes
     *
     * @summary products/sizes/delete
     */
    productsSizesDeletePost(body?: types.ProductsSizesDeletePostBodyParam): Promise<FetchResponse<200, types.ProductsSizesDeletePostResponse200> | FetchResponse<207, types.ProductsSizesDeletePostResponse207>>;
    /**
     * Method that returns information about product sizes configured in the administration
     * panel
     *
     * @summary products/sizes
     */
    productsSizesGet(metadata?: types.ProductsSizesGetMetadataParam): Promise<FetchResponse<200, types.ProductsSizesGetResponse200> | FetchResponse<207, types.ProductsSizesGetResponse207>>;
    /**
     * This method allows you to edit the size-dependent data
     *
     * @summary products/sizes
     */
    productsSizesPut(body?: types.ProductsSizesPutBodyParam): Promise<FetchResponse<200, types.ProductsSizesPutResponse200> | FetchResponse<207, types.ProductsSizesPutResponse207>>;
    /**
     * MetodaPozwalaNaEdycjeDanychDotyczacychIlosci
     *
     * @summary products/stockQuantity
     */
    productsStockQuantityPut(body?: types.ProductsStockQuantityPutBodyParam): Promise<FetchResponse<200, types.ProductsStockQuantityPutResponse200> | FetchResponse<207, types.ProductsStockQuantityPutResponse207>>;
    /**
     * Method that enables getting information about product stock levels and warehouse
     * locations.
     *
     * @summary products/stocks
     */
    productsStocksGet(metadata?: types.ProductsStocksGetMetadataParam): Promise<FetchResponse<200, types.ProductsStocksGetResponse200> | FetchResponse<207, types.ProductsStocksGetResponse207>>;
    /**
     * Method that enables setting product stock levels and warehouse locations.
     *
     * @summary products/stocks
     */
    productsStocksPut(body?: types.ProductsStocksPutBodyParam): Promise<FetchResponse<200, types.ProductsStocksPutResponse200> | FetchResponse<207, types.ProductsStocksPutResponse207>>;
    /**
     * Allows for getting information about product strikethrough price settings
     *
     * @summary products/strikethroughPrices
     */
    productsStrikethroughPricesGet(metadata?: types.ProductsStrikethroughPricesGetMetadataParam): Promise<FetchResponse<200, types.ProductsStrikethroughPricesGetResponse200> | FetchResponse<207, types.ProductsStrikethroughPricesGetResponse207>>;
    /**
     * Allows for editing product strikethrough price settings
     *
     * @summary products/strikethroughPrices
     */
    productsStrikethroughPricesPut(body?: types.ProductsStrikethroughPricesPutBodyParam): Promise<FetchResponse<200, types.ProductsStrikethroughPricesPutResponse200> | FetchResponse<207, types.ProductsStrikethroughPricesPutResponse207>>;
    /**
     * The method allows to edit supplier data in the IdoSell Shop administration panel.
     *
     * @summary products/supplierCode
     */
    productsSupplierCodePut(body?: types.ProductsSupplierCodePutBodyParam): Promise<FetchResponse<200, types.ProductsSupplierCodePutResponse200> | FetchResponse<207, types.ProductsSupplierCodePutResponse207>>;
    /**
     * The method allows you to edit the commodity data related to its suppliers.
     *
     * @summary products/supplierProductData
     */
    productsSupplierProductDataPut(body?: types.ProductsSupplierProductDataPutBodyParam): Promise<FetchResponse<200, types.ProductsSupplierProductDataPutResponse200> | FetchResponse<207, types.ProductsSupplierProductDataPutResponse207>>;
    /**
     * The method allows you to upload to the goods synchronization module, the offer in a file
     * in IOF 3.0 format.
     *
     * @summary products/synchronization/file
     */
    productsSynchronizationFilePost(body?: types.ProductsSynchronizationFilePostBodyParam): Promise<FetchResponse<200, types.ProductsSynchronizationFilePostResponse200> | FetchResponse<207, types.ProductsSynchronizationFilePostResponse207>>;
    /**
     * Method informs commodity synchronization module that uploading of files is complete.
     *
     * @summary products/synchronization/finishUpload
     */
    productsSynchronizationFinishUploadPut(body?: types.ProductsSynchronizationFinishUploadPutBodyParam): Promise<FetchResponse<207, types.ProductsSynchronizationFinishUploadPutResponse207>>;
    /**
     * Method allows you to add automatic refund of payments for returns and rma.
     *
     * @summary refunds/addAutomaticRefund
     */
    refundsAddAutomaticRefund(body?: types.RefundsAddAutomaticRefundBodyParam): Promise<FetchResponse<200, types.RefundsAddAutomaticRefundResponse200> | FetchResponse<207, types.RefundsAddAutomaticRefundResponse207>>;
    /**
     * Method allows you to add automatic refund for order.
     *
     * @summary refunds/addAutomaticRefundForOrder
     */
    refundsAddAutomaticRefundForOrder(body?: types.RefundsAddAutomaticRefundForOrderBodyParam): Promise<FetchResponse<200, types.RefundsAddAutomaticRefundForOrderResponse200> | FetchResponse<207, types.RefundsAddAutomaticRefundForOrderResponse207>>;
    /**
     * Method allows you to add manual refund for return and rma.
     *
     * @summary refunds/addManualRefund
     */
    refundsAddManualRefund(body?: types.RefundsAddManualRefundBodyParam): Promise<FetchResponse<200, types.RefundsAddManualRefundResponse200> | FetchResponse<207, types.RefundsAddManualRefundResponse207>>;
    /**
     * Method allows you to cancel refund.
     *
     * @summary refunds/cancelRefund
     */
    refundsCancelRefund(body?: types.RefundsCancelRefundBodyParam): Promise<FetchResponse<200, types.RefundsCancelRefundResponse200> | FetchResponse<207, types.RefundsCancelRefundResponse207>>;
    /**
     * Method allows you to confirm refund.
     *
     * @summary refunds/confirmRefund
     */
    refundsConfirmRefund(body?: types.RefundsConfirmRefundBodyParam): Promise<FetchResponse<200, types.RefundsConfirmRefundResponse200> | FetchResponse<207, types.RefundsConfirmRefundResponse207>>;
    /**
     * Method returns Automatic refunds possible.
     *
     * @summary refunds/getPossibleAutoRefunds
     */
    refundsGetPossibleAutoRefunds(metadata: types.RefundsGetPossibleAutoRefundsMetadataParam): Promise<FetchResponse<200, types.RefundsGetPossibleAutoRefundsResponse200> | FetchResponse<207, types.RefundsGetPossibleAutoRefundsResponse207>>;
    /**
     * Method returns refund status.
     *
     * @summary refunds/getRefundStatus
     */
    refundsGetRefundStatus(metadata: types.RefundsGetRefundStatusMetadataParam): Promise<FetchResponse<200, types.RefundsGetRefundStatusResponse200> | FetchResponse<207, types.RefundsGetRefundStatusResponse207>>;
    /**
     * Method returns a list of incomplete refunds.
     *
     * @summary refunds/retrieveRefundsList
     */
    refundsRetrieveRefundsList(metadata: types.RefundsRetrieveRefundsListMetadataParam): Promise<FetchResponse<200, types.RefundsRetrieveRefundsListResponse200> | FetchResponse<207, types.RefundsRetrieveRefundsListResponse207>>;
    /**
     * Method allows you to update refund.
     *
     * @summary refunds/updateRefund
     */
    refundsUpdateRefund(body?: types.RefundsUpdateRefundBodyParam): Promise<FetchResponse<200, types.RefundsUpdateRefundResponse200> | FetchResponse<207, types.RefundsUpdateRefundResponse207>>;
    /**
     * This call returns a list of responsible entities.
     *
     * @summary responsibility/entities
     */
    responsibilityEntitiesGet(metadata?: types.ResponsibilityEntitiesGetMetadataParam): Promise<FetchResponse<200, types.ResponsibilityEntitiesGetResponse200> | FetchResponse<207, types.ResponsibilityEntitiesGetResponse207>>;
    /**
     * Use this operation to create responsible entities.
     *
     * @summary responsibility/entities
     */
    responsibilityEntitiesPost(body?: types.ResponsibilityEntitiesPostBodyParam): Promise<FetchResponse<200, types.ResponsibilityEntitiesPostResponse200> | FetchResponse<207, types.ResponsibilityEntitiesPostResponse207>>;
    /**
     * Use this operation to update responsible entities.
     *
     * @summary responsibility/entities
     */
    responsibilityEntitiesPut(body?: types.ResponsibilityEntitiesPutBodyParam): Promise<FetchResponse<200, types.ResponsibilityEntitiesPutResponse200> | FetchResponse<207, types.ResponsibilityEntitiesPutResponse207>>;
    /**
     * This call is used to remove responsible entities.
     *
     * @summary responsibility/entities
     */
    responsibilityEntitiesDelete(metadata?: types.ResponsibilityEntitiesDeleteMetadataParam): Promise<FetchResponse<200, types.ResponsibilityEntitiesDeleteResponse200> | FetchResponse<207, types.ResponsibilityEntitiesDeleteResponse207>>;
    /**
     * Method that enables getting information about returns issued for orders in the
     * administration panel.
     *
     * @summary returns/returns
     */
    returnsReturnsGet(metadata?: types.ReturnsReturnsGetMetadataParam): Promise<FetchResponse<200, types.ReturnsReturnsGetResponse200> | FetchResponse<207, types.ReturnsReturnsGetResponse207>>;
    /**
     * returns/returns
     *
     */
    returnsReturnsPost(body?: types.ReturnsReturnsPostBodyParam): Promise<FetchResponse<200, types.ReturnsReturnsPostResponse200> | FetchResponse<207, types.ReturnsReturnsPostResponse207>>;
    /**
     * returns/returns
     *
     */
    returnsReturnsPut(body?: types.ReturnsReturnsPutBodyParam): Promise<FetchResponse<200, types.ReturnsReturnsPutResponse200>>;
    /**
     * Method that enables setting serial numbers for products included in returns issued for
     * orders in the administration panel.
     *
     * @summary returns/serialNumber
     */
    returnsSerialNumberPut(body?: types.ReturnsSerialNumberPutBodyParam): Promise<FetchResponse<200, types.ReturnsSerialNumberPutResponse200>>;
    /**
     * Allows to download all configurable return statuses
     *
     * @summary returns/statuses
     */
    returnsStatusesGet(): Promise<FetchResponse<200, types.ReturnsStatusesGetResponse200> | FetchResponse<207, types.ReturnsStatusesGetResponse207>>;
    /**
     * This get method allows you to retrieve data about existing claims
     *
     * @summary rma/rma
     */
    rmaRmaGet(metadata?: types.RmaRmaGetMetadataParam): Promise<FetchResponse<200, types.RmaRmaGetResponse200> | FetchResponse<207, types.RmaRmaGetResponse207>>;
    /**
     * This update method allows to update the data in existing complaints
     *
     * @summary rma/rma
     */
    rmaRmaPut(body?: types.RmaRmaPutBodyParam): Promise<FetchResponse<200, types.RmaRmaPutResponse200> | FetchResponse<207, types.RmaRmaPutResponse207>>;
    /**
     * Allows to download all possible complaint statuses
     *
     * @summary rma/statuses
     */
    rmaStatusesGet(): Promise<FetchResponse<200, types.RmaStatusesGetResponse200> | FetchResponse<207, types.RmaStatusesGetResponse207>>;
    /**
     * Method is used for extracting information about a shop language templates.
     *
     * @summary shops/currencies
     */
    shopsCurrenciesGet(): Promise<FetchResponse<200, types.ShopsCurrenciesGetResponse200> | FetchResponse<207, types.ShopsCurrenciesGetResponse207>>;
    /**
     * Method is used for extracting information about a shop language templates.
     *
     * @summary shops/languages
     */
    shopsLanguagesGet(): Promise<FetchResponse<200, types.ShopsLanguagesGetResponse200> | FetchResponse<207, types.ShopsLanguagesGetResponse207>>;
    /**
     * The method allows the removal of size charts.
     *
     * @summary sizecharts/sizecharts/delete
     */
    sizechartsSizechartsDeletePost(body?: types.SizechartsSizechartsDeletePostBodyParam): Promise<FetchResponse<207, types.SizechartsSizechartsDeletePostResponse207>>;
    /**
     * The method allows size charts to be downloaded.
     *
     * @summary sizecharts/sizecharts
     */
    sizechartsSizechartsGet(metadata?: types.SizechartsSizechartsGetMetadataParam): Promise<FetchResponse<200, types.SizechartsSizechartsGetResponse200> | FetchResponse<207, types.SizechartsSizechartsGetResponse207>>;
    /**
     * The method allows the size charts settings to be updated.
     *
     * @summary sizecharts/sizecharts
     */
    sizechartsSizechartsPut(body?: types.SizechartsSizechartsPutBodyParam): Promise<FetchResponse<200, types.SizechartsSizechartsPutResponse200> | FetchResponse<207, types.SizechartsSizechartsPutResponse207>>;
    /**
     * Method that returns information about product sizes configured in the administration
     * panel. List of size groups (with sizes that belong to particular group) is returned as a
     * result.
     *
     * @summary sizes/sizes
     */
    sizesSizesGet(metadata?: types.SizesSizesGetMetadataParam): Promise<FetchResponse<200, types.SizesSizesGetResponse200> | FetchResponse<207, types.SizesSizesGetResponse207>>;
    /**
     * Method that enables creating, deleting and editing product sizes in the administration
     * panel.
     *
     * @summary sizes/sizes
     */
    sizesSizesPut(body?: types.SizesSizesPutBodyParam): Promise<FetchResponse<200, types.SizesSizesPutResponse200> | FetchResponse<207, types.SizesSizesPutResponse207>>;
    /**
     * This call returns all snippet campaigns (including deleted ones but to readonly).
     *
     * @summary snippets/campaign
     */
    snippetsCampaignGet(metadata?: types.SnippetsCampaignGetMetadataParam): Promise<FetchResponse<200, types.SnippetsCampaignGetResponse200> | FetchResponse<207, types.SnippetsCampaignGetResponse207>>;
    /**
     * Use this operation to create snippet campaigns.
     *
     * @summary snippets/campaign
     */
    snippetsCampaignPost(body?: types.SnippetsCampaignPostBodyParam): Promise<FetchResponse<200, types.SnippetsCampaignPostResponse200> | FetchResponse<207, types.SnippetsCampaignPostResponse207>>;
    /**
     * Use this operation to update snippet campaigns.
     *
     * @summary snippets/campaign
     */
    snippetsCampaignPut(body?: types.SnippetsCampaignPutBodyParam): Promise<FetchResponse<200, types.SnippetsCampaignPutResponse200> | FetchResponse<207, types.SnippetsCampaignPutResponse207>>;
    /**
     * This call is used to remove campaign snippets.
     *
     * @summary snippets/campaign
     */
    snippetsCampaignDelete(metadata?: types.SnippetsCampaignDeleteMetadataParam): Promise<FetchResponse<200, types.SnippetsCampaignDeleteResponse200> | FetchResponse<207, types.SnippetsCampaignDeleteResponse207>>;
    /**
     * This call returns all cookie definitions related to code snippets.
     *
     * @summary snippets/cookies
     */
    snippetsCookiesGet(metadata?: types.SnippetsCookiesGetMetadataParam): Promise<FetchResponse<200, types.SnippetsCookiesGetResponse200> | FetchResponse<207, types.SnippetsCookiesGetResponse207>>;
    /**
     * Use this operation to create a cookie definition for a code snippet.
     *
     * @summary snippets/cookies
     */
    snippetsCookiesPost(body?: types.SnippetsCookiesPostBodyParam): Promise<FetchResponse<200, types.SnippetsCookiesPostResponse200> | FetchResponse<207, types.SnippetsCookiesPostResponse207>>;
    /**
     * Use this operation to update a cookie definition for a code snippet.
     *
     * @summary snippets/cookies
     */
    snippetsCookiesPut(body?: types.SnippetsCookiesPutBodyParam): Promise<FetchResponse<200, types.SnippetsCookiesPutResponse200> | FetchResponse<207, types.SnippetsCookiesPutResponse207>>;
    /**
     * This call is used to remove campaign cookies.
     *
     * @summary snippets/cookies
     */
    snippetsCookiesDelete(metadata?: types.SnippetsCookiesDeleteMetadataParam): Promise<FetchResponse<200, types.SnippetsCookiesDeleteResponse200> | FetchResponse<207, types.SnippetsCookiesDeleteResponse207>>;
    /**
     * This call returns all snippets.
     *
     * @summary snippets/snippets
     */
    snippetsSnippetsGet(metadata?: types.SnippetsSnippetsGetMetadataParam): Promise<FetchResponse<200, types.SnippetsSnippetsGetResponse200> | FetchResponse<207, types.SnippetsSnippetsGetResponse207>>;
    /**
     * Use this operation to create code snippet.
     *
     * @summary snippets/snippets
     */
    snippetsSnippetsPost(body?: types.SnippetsSnippetsPostBodyParam): Promise<FetchResponse<200, types.SnippetsSnippetsPostResponse200> | FetchResponse<207, types.SnippetsSnippetsPostResponse207>>;
    /**
     * Use this operation to update code snippet.
     *
     * @summary snippets/snippets
     */
    snippetsSnippetsPut(body?: types.SnippetsSnippetsPutBodyParam): Promise<FetchResponse<200, types.SnippetsSnippetsPutResponse200> | FetchResponse<207, types.SnippetsSnippetsPutResponse207>>;
    /**
     * This call is used to remove snippets.
     *
     * @summary snippets/snippets
     */
    snippetsSnippetsDelete(metadata?: types.SnippetsSnippetsDeleteMetadataParam): Promise<FetchResponse<200, types.SnippetsSnippetsDeleteResponse200> | FetchResponse<207, types.SnippetsSnippetsDeleteResponse207>>;
    /**
     * Method is used for extracting information about a shop and its most important
     * configuration settings.
     *
     * @summary system/config
     */
    systemConfigGet(): Promise<FetchResponse<200, types.SystemConfigGetResponse200> | FetchResponse<207, types.SystemConfigGetResponse207>>;
    /**
     * The method is used to manage the most important settings in the store and in the panel.
     * It enables, among others, configuration of tax and billing settings and configuration of
     * warehouse management.
     *
     * @summary system/config
     */
    systemConfigPut(body?: types.SystemConfigPutBodyParam): Promise<FetchResponse<207, types.SystemConfigPutResponse207>>;
    /**
     * This method returns the current exchange rate in relation to the currency set in the
     * administration panel.
     *
     * @summary system/currencies
     */
    systemCurrenciesGet(metadata?: types.SystemCurrenciesGetMetadataParam): Promise<FetchResponse<200, types.SystemCurrenciesGetResponse200> | FetchResponse<207, types.SystemCurrenciesGetResponse207>>;
    /**
     * Method that allows for setting currency exchange rates in relation to the currency set
     * in the administration panel.
     *
     * @summary system/currencies
     */
    systemCurrenciesPut(body?: types.SystemCurrenciesPutBodyParam): Promise<FetchResponse<200, types.SystemCurrenciesPutResponse200> | FetchResponse<207, types.SystemCurrenciesPutResponse207>>;
    /**
     * It allows you to download the current automation processes configuration .
     *
     * @summary system/processesAutomation
     */
    systemProcessesAutomationGet(metadata?: types.SystemProcessesAutomationGetMetadataParam): Promise<FetchResponse<200, types.SystemProcessesAutomationGetResponse200> | FetchResponse<207, types.SystemProcessesAutomationGetResponse207>>;
    /**
     * The method is used for edit of processes automation settings .
     *
     * @summary system/processesAutomation
     */
    systemProcessesAutomationPut(body?: types.SystemProcessesAutomationPutBodyParam): Promise<FetchResponse<207, types.SystemProcessesAutomationPutResponse207>>;
    /**
     * This method returns server status information which is useful in determining whether the
     * server is currently overloaded.
     *
     * @summary system/serverLoad
     */
    systemServerLoadGet(): Promise<FetchResponse<200, types.SystemServerLoadGetResponse200> | FetchResponse<207, types.SystemServerLoadGetResponse207>>;
    /**
     * Method that returns the current server time, which is essential for authentication.
     *
     * @summary system/serverTime
     */
    systemServerTimeGet(): Promise<FetchResponse<200, types.SystemServerTimeGetResponse200> | FetchResponse<207, types.SystemServerTimeGetResponse207>>;
    /**
     * Method is used for extracting information about a shop and its most important
     * configuration settings.
     *
     * @summary system/shopsData
     */
    systemShopsDataGet(): Promise<FetchResponse<200, types.SystemShopsDataGetResponse200> | FetchResponse<207, types.SystemShopsDataGetResponse207>>;
    /**
     * The method allows units of measurement to be downloaded from the IdoSell administration
     * panel.
     *
     * @summary system/units
     */
    systemUnitsGet(metadata?: types.SystemUnitsGetMetadataParam): Promise<FetchResponse<200, types.SystemUnitsGetResponse200> | FetchResponse<207, types.SystemUnitsGetResponse207>>;
    /**
     * The method allows existing units of measurement to be updated to the IdoSell
     * administration panel.
     *
     * @summary system/units
     */
    systemUnitsPut(body?: types.SystemUnitsPutBodyParam): Promise<FetchResponse<200, types.SystemUnitsPutResponse200> | FetchResponse<207, types.SystemUnitsPutResponse207>>;
    /**
     * Method that returns information about IdoSell Shop administration panel users.
     *
     * @summary system/users
     */
    systemUsersGet(metadata?: types.SystemUsersGetMetadataParam): Promise<FetchResponse<200, types.SystemUsersGetResponse200> | FetchResponse<207, types.SystemUsersGetResponse207>>;
    /**
     * Enables gift voucer blocking
     *
     * @summary vouchers/block
     */
    vouchersBlockPut(body?: types.VouchersBlockPutBodyParam): Promise<FetchResponse<200, types.VouchersBlockPutResponse200> | FetchResponse<207, types.VouchersBlockPutResponse207>>;
    /**
     * Allows for downloading all discount code campaigns defined in the administration panel
     *
     * @summary vouchers/types
     */
    vouchersTypesGet(metadata?: types.VouchersTypesGetMetadataParam): Promise<FetchResponse<200, types.VouchersTypesGetResponse200> | FetchResponse<207, types.VouchersTypesGetResponse207>>;
    /**
     * Enables gift vouchers unblocking
     *
     * @summary vouchers/unblock
     */
    vouchersUnblockPut(body?: types.VouchersUnblockPutBodyParam): Promise<FetchResponse<200, types.VouchersUnblockPutResponse200> | FetchResponse<207, types.VouchersUnblockPutResponse207>>;
    /**
     * Enables deleting a single or a list of gift vouchers
     *
     * @summary vouchers/vouchers/delete
     */
    vouchersVouchersDeletePost(body?: types.VouchersVouchersDeletePostBodyParam): Promise<FetchResponse<200, types.VouchersVouchersDeletePostResponse200> | FetchResponse<207, types.VouchersVouchersDeletePostResponse207>>;
    /**
     * Enables searching for vouchers and retrieving information about indicated vouchers
     *
     * @summary vouchers/vouchers
     */
    vouchersVouchersGet(metadata?: types.VouchersVouchersGetMetadataParam): Promise<FetchResponse<200, types.VouchersVouchersGetResponse200> | FetchResponse<207, types.VouchersVouchersGetResponse207>>;
    /**
     * Enables adding new gift vouchers with the selected voucher type
     *
     * @summary vouchers/vouchers
     */
    vouchersVouchersPost(body?: types.VouchersVouchersPostBodyParam): Promise<FetchResponse<200, types.VouchersVouchersPostResponse200> | FetchResponse<207, types.VouchersVouchersPostResponse207>>;
    /**
     * Enables editing gift voucher, e.g. changing its balance, validity date or number (only
     * for unused vouchers)
     *
     * @summary vouchers/vouchers
     */
    vouchersVouchersPut(body?: types.VouchersVouchersPutBodyParam): Promise<FetchResponse<200, types.VouchersVouchersPutResponse200> | FetchResponse<207, types.VouchersVouchersPutResponse207>>;
    /**
     * Method that enables getting the number of product guarantees available in the
     * administration panel.
     *
     * @summary warranties/countTotal
     */
    warrantiesCountTotalGet(metadata?: types.WarrantiesCountTotalGetMetadataParam): Promise<FetchResponse<200, types.WarrantiesCountTotalGetResponse200> | FetchResponse<207, types.WarrantiesCountTotalGetResponse207>>;
    /**
     * Method that enables editing product warranty language settings.
     *
     * @summary warranties/languageData
     */
    warrantiesLanguageDataPut(body?: types.WarrantiesLanguageDataPutBodyParam): Promise<FetchResponse<200, types.WarrantiesLanguageDataPutResponse200> | FetchResponse<207, types.WarrantiesLanguageDataPutResponse207>>;
    /**
     * Method that enables deleting product warranties from the administration panel.
     *
     * @summary warranties/warranties/delete
     */
    warrantiesWarrantiesDeletePost(body?: types.WarrantiesWarrantiesDeletePostBodyParam): Promise<FetchResponse<200, types.WarrantiesWarrantiesDeletePostResponse200> | FetchResponse<207, types.WarrantiesWarrantiesDeletePostResponse207>>;
    /**
     * Method that enables getting a list of product warranties available in the administration
     * panel.
     *
     * @summary warranties/warranties
     */
    warrantiesWarrantiesGet(metadata?: types.WarrantiesWarrantiesGetMetadataParam): Promise<FetchResponse<200, types.WarrantiesWarrantiesGetResponse200> | FetchResponse<207, types.WarrantiesWarrantiesGetResponse207>>;
    /**
     * Method that enables adding product warranties to the administration panel.
     *
     * @summary warranties/warranties
     */
    warrantiesWarrantiesPost(body?: types.WarrantiesWarrantiesPostBodyParam): Promise<FetchResponse<200, types.WarrantiesWarrantiesPostResponse200> | FetchResponse<207, types.WarrantiesWarrantiesPostResponse207>>;
    /**
     * Method that enables editing product warranties available in the administration panel.
     *
     * @summary warranties/warranties
     */
    warrantiesWarrantiesPut(body?: types.WarrantiesWarrantiesPutBodyParam): Promise<FetchResponse<200, types.WarrantiesWarrantiesPutResponse200> | FetchResponse<207, types.WarrantiesWarrantiesPutResponse207>>;
    /**
     * The method allows to download information about a selected location or all locations in
     * a given warehouse together with a list of product IDs located in these locations.
     *
     * @summary wms/locations
     */
    wmsLocationsGet(metadata?: types.WmsLocationsGetMetadataParam): Promise<FetchResponse<200, types.WmsLocationsGetResponse200> | FetchResponse<207, types.WmsLocationsGetResponse207>>;
    /**
     * The method enables the MM document to be received at the target warehouse.
     *
     * @summary wms/stocksdocuments/acceptMM
     */
    wmsStocksdocumentsAcceptMMPut(body?: types.WmsStocksdocumentsAcceptMmPutBodyParam): Promise<FetchResponse<207, types.WmsStocksdocumentsAcceptMmPutResponse207>>;
    /**
     * Method that enables closing warehouse documents.
     *
     * @summary wms/stocksdocuments/close
     */
    wmsStocksdocumentsClosePut(body?: types.WmsStocksdocumentsClosePutBodyParam): Promise<FetchResponse<207, types.WmsStocksdocumentsClosePutResponse207>>;
    /**
     * Method that enables deleting open warehouse documents.
     *
     * @summary wms/stocksdocuments/documents/delete
     */
    wmsStocksdocumentsDocumentsDeletePost(body?: types.WmsStocksdocumentsDocumentsDeletePostBodyParam): Promise<FetchResponse<207, types.WmsStocksdocumentsDocumentsDeletePostResponse207>>;
    /**
     * The method allows for downloading a list of warehouse documents.
     *
     * @summary wms/stocksdocuments/documents
     */
    wmsStocksdocumentsDocumentsGet(metadata?: types.WmsStocksdocumentsDocumentsGetMetadataParam): Promise<FetchResponse<200, types.WmsStocksdocumentsDocumentsGetResponse200> | FetchResponse<207, types.WmsStocksdocumentsDocumentsGetResponse207>>;
    /**
     * Method that enables warehouse document creation.
     *
     * @summary wms/stocksdocuments/documents
     */
    wmsStocksdocumentsDocumentsPost(body?: types.WmsStocksdocumentsDocumentsPostBodyParam): Promise<FetchResponse<200, types.WmsStocksdocumentsDocumentsPostResponse200> | FetchResponse<207, types.WmsStocksdocumentsDocumentsPostResponse207>>;
    /**
     * The method allows for warehouse documents edit .
     *
     * @summary wms/stocksdocuments/documents
     */
    wmsStocksdocumentsDocumentsPut(body?: types.WmsStocksdocumentsDocumentsPutBodyParam): Promise<FetchResponse<200, types.WmsStocksdocumentsDocumentsPutResponse200> | FetchResponse<207, types.WmsStocksdocumentsDocumentsPutResponse207>>;
    /**
     * Method that enables getting a list of open warehouse documents.
     *
     * @summary wms/stocksdocuments/openedDocuments
     */
    wmsStocksdocumentsOpenedDocumentsGet(metadata?: types.WmsStocksdocumentsOpenedDocumentsGetMetadataParam): Promise<FetchResponse<200, types.WmsStocksdocumentsOpenedDocumentsGetResponse200> | FetchResponse<207, types.WmsStocksdocumentsOpenedDocumentsGetResponse207>>;
    /**
     * Method that enables deleting products from warehouse documents.
     *
     * @summary wms/stocksdocuments/products/delete
     */
    wmsStocksdocumentsProductsDeletePost(body?: types.WmsStocksdocumentsProductsDeletePostBodyParam): Promise<FetchResponse<207, types.WmsStocksdocumentsProductsDeletePostResponse207>>;
    /**
     * Method that enables getting a list of products present on a warehouse document.
     *
     * @summary wms/stocksdocuments/products
     */
    wmsStocksdocumentsProductsGet(metadata?: types.WmsStocksdocumentsProductsGetMetadataParam): Promise<FetchResponse<200, types.WmsStocksdocumentsProductsGetResponse200> | FetchResponse<207, types.WmsStocksdocumentsProductsGetResponse207>>;
    /**
     * Method that enables adding products to warehouse documents.
     *
     * @summary wms/stocksdocuments/products
     */
    wmsStocksdocumentsProductsPost(body?: types.WmsStocksdocumentsProductsPostBodyParam): Promise<FetchResponse<207, types.WmsStocksdocumentsProductsPostResponse207>>;
    /**
     * Method that enables, amongst others, editing the quantity of a given product on a
     * warehouse document.
     *
     * @summary wms/stocksdocuments/products
     */
    wmsStocksdocumentsProductsPut(body?: types.WmsStocksdocumentsProductsPutBodyParam): Promise<FetchResponse<207, types.WmsStocksdocumentsProductsPutResponse207>>;
    /**
     * The method allows to withdraw the MM document to the source warehouse.
     *
     * @summary wms/stocksdocuments/rejectMM
     */
    wmsStocksdocumentsRejectMMPut(body?: types.WmsStocksdocumentsRejectMmPutBodyParam): Promise<FetchResponse<207, types.WmsStocksdocumentsRejectMmPutResponse207>>;
    /**
     * The method allows for the removal of suppliers..
     *
     * @summary wms/suppliers/suppliers/delete
     */
    wmsSuppliersSuppliersDeletePost(body?: types.WmsSuppliersSuppliersDeletePostBodyParam): Promise<FetchResponse<207, types.WmsSuppliersSuppliersDeletePostResponse207>>;
    /**
     * The method allows to download a list of suppliers along with information about the
     * number of products assigned to them.
     *
     * @summary wms/suppliers/suppliers
     */
    wmsSuppliersSuppliersGet(metadata?: types.WmsSuppliersSuppliersGetMetadataParam): Promise<FetchResponse<200, types.WmsSuppliersSuppliersGetResponse200> | FetchResponse<207, types.WmsSuppliersSuppliersGetResponse207>>;
    /**
     * The method allows information about suppliers to be updated, including address details,
     * description, order preparation time or supplier working hours..
     *
     * @summary wms/suppliers/suppliers
     */
    wmsSuppliersSuppliersPut(body?: types.WmsSuppliersSuppliersPutBodyParam): Promise<FetchResponse<200, types.WmsSuppliersSuppliersPutResponse200> | FetchResponse<207, types.WmsSuppliersSuppliersPutResponse207>>;
}
declare const createSDK: SDK;
export = createSDK;
