/**
 * Cobo Wallet as a Service 2.0
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TokenBalanceBalance model module.
 * @module model/TokenBalanceBalance
 */
class TokenBalanceBalance {
    /**
     * Constructs a new <code>TokenBalanceBalance</code>.
     * The balance details.
     * @alias module:model/TokenBalanceBalance
     * @param total {String} The total balance, which is the sum of the available, pending, and locked balances.
     * @param available {String} The balance free to use.
     */
    constructor(total, available) { 
        
        TokenBalanceBalance.initialize(this, total, available);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, total, available) { 
        obj['total'] = total;
        obj['available'] = available;
    }

    /**
     * Constructs a <code>TokenBalanceBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenBalanceBalance} obj Optional instance to populate.
     * @return {module:model/TokenBalanceBalance} The populated <code>TokenBalanceBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenBalanceBalance();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'String');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'String');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'String');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenBalanceBalance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenBalanceBalance</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokenBalanceBalance.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['total'] && !(typeof data['total'] === 'string' || data['total'] instanceof String)) {
            throw new Error("Expected the field `total` to be a primitive type in the JSON string but got " + data['total']);
        }
        // ensure the json data is a string
        if (data['available'] && !(typeof data['available'] === 'string' || data['available'] instanceof String)) {
            throw new Error("Expected the field `available` to be a primitive type in the JSON string but got " + data['available']);
        }
        // ensure the json data is a string
        if (data['pending'] && !(typeof data['pending'] === 'string' || data['pending'] instanceof String)) {
            throw new Error("Expected the field `pending` to be a primitive type in the JSON string but got " + data['pending']);
        }
        // ensure the json data is a string
        if (data['locked'] && !(typeof data['locked'] === 'string' || data['locked'] instanceof String)) {
            throw new Error("Expected the field `locked` to be a primitive type in the JSON string but got " + data['locked']);
        }

        return true;
    }


}

TokenBalanceBalance.RequiredProperties = ["total", "available"];

/**
 * The total balance, which is the sum of the available, pending, and locked balances.
 * @member {String} total
 */
TokenBalanceBalance.prototype['total'] = undefined;

/**
 * The balance free to use.
 * @member {String} available
 */
TokenBalanceBalance.prototype['available'] = undefined;

/**
 * The balance that is currently pending confirmation.
 * @member {String} pending
 * @default '0'
 */
TokenBalanceBalance.prototype['pending'] = '0';

/**
 * The balance that is currently not accessible to transactions.
 * @member {String} locked
 * @default '0'
 */
TokenBalanceBalance.prototype['locked'] = '0';






export default TokenBalanceBalance;

