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
import WalletType from './WalletType';

/**
 * The UpdateExchangeWalletParams model module.
 * @module model/UpdateExchangeWalletParams
 */
class UpdateExchangeWalletParams {
    /**
     * Constructs a new <code>UpdateExchangeWalletParams</code>.
     * The information of Exchange Wallets.
     * @alias module:model/UpdateExchangeWalletParams
     * @param wallet_type {module:model/WalletType} 
     */
    constructor(wallet_type) { 
        
        UpdateExchangeWalletParams.initialize(this, wallet_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, wallet_type) { 
        obj['wallet_type'] = wallet_type;
    }

    /**
     * Constructs a <code>UpdateExchangeWalletParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateExchangeWalletParams} obj Optional instance to populate.
     * @return {module:model/UpdateExchangeWalletParams} The populated <code>UpdateExchangeWalletParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateExchangeWalletParams();

            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('apikey')) {
                obj['apikey'] = ApiClient.convertToType(data['apikey'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('passphrase')) {
                obj['passphrase'] = ApiClient.convertToType(data['passphrase'], 'String');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('account_identify')) {
                obj['account_identify'] = ApiClient.convertToType(data['account_identify'], 'String');
            }
            if (data.hasOwnProperty('ga_code')) {
                obj['ga_code'] = ApiClient.convertToType(data['ga_code'], 'String');
            }
            if (data.hasOwnProperty('main_wallet_id')) {
                obj['main_wallet_id'] = ApiClient.convertToType(data['main_wallet_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateExchangeWalletParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateExchangeWalletParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateExchangeWalletParams.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['apikey'] && !(typeof data['apikey'] === 'string' || data['apikey'] instanceof String)) {
            throw new Error("Expected the field `apikey` to be a primitive type in the JSON string but got " + data['apikey']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }
        // ensure the json data is a string
        if (data['passphrase'] && !(typeof data['passphrase'] === 'string' || data['passphrase'] instanceof String)) {
            throw new Error("Expected the field `passphrase` to be a primitive type in the JSON string but got " + data['passphrase']);
        }
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }
        // ensure the json data is a string
        if (data['account_identify'] && !(typeof data['account_identify'] === 'string' || data['account_identify'] instanceof String)) {
            throw new Error("Expected the field `account_identify` to be a primitive type in the JSON string but got " + data['account_identify']);
        }
        // ensure the json data is a string
        if (data['ga_code'] && !(typeof data['ga_code'] === 'string' || data['ga_code'] instanceof String)) {
            throw new Error("Expected the field `ga_code` to be a primitive type in the JSON string but got " + data['ga_code']);
        }
        // ensure the json data is a string
        if (data['main_wallet_id'] && !(typeof data['main_wallet_id'] === 'string' || data['main_wallet_id'] instanceof String)) {
            throw new Error("Expected the field `main_wallet_id` to be a primitive type in the JSON string but got " + data['main_wallet_id']);
        }

        return true;
    }


}

UpdateExchangeWalletParams.RequiredProperties = ["wallet_type"];

/**
 * @member {module:model/WalletType} wallet_type
 */
UpdateExchangeWalletParams.prototype['wallet_type'] = undefined;

/**
 * The wallet name.
 * @member {String} name
 */
UpdateExchangeWalletParams.prototype['name'] = undefined;

/**
 * The API key of your exchange account. This property is required when updating the information of an Exchange Wallet.
 * @member {String} apikey
 */
UpdateExchangeWalletParams.prototype['apikey'] = undefined;

/**
 * The API secret of your exchange account. This property is required when updating the information of an Exchange Wallet.
 * @member {String} secret
 */
UpdateExchangeWalletParams.prototype['secret'] = undefined;

/**
 * The passphrase of your exchange account.
 * @member {String} passphrase
 */
UpdateExchangeWalletParams.prototype['passphrase'] = undefined;

/**
 * The memo you use when applying for the API key of your exchange account.
 * @member {String} memo
 */
UpdateExchangeWalletParams.prototype['memo'] = undefined;

/**
 * The identifier of your exchange account. - For Binance, this is email address of your exchange account. - For OKX, this is the user name of your exchange account. 
 * @member {String} account_identify
 */
UpdateExchangeWalletParams.prototype['account_identify'] = undefined;

/**
 * The GA code for the exchange.
 * @member {String} ga_code
 */
UpdateExchangeWalletParams.prototype['ga_code'] = undefined;

/**
 * The ID of the Exchange Wallet (Main Account).
 * @member {String} main_wallet_id
 */
UpdateExchangeWalletParams.prototype['main_wallet_id'] = undefined;






export default UpdateExchangeWalletParams;

