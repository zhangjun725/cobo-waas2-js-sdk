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
import ExchangeId from './ExchangeId';
import TransactionSourceType from './TransactionSourceType';

/**
 * The TransactionExchangeWalletSource model module.
 * @module model/TransactionExchangeWalletSource
 */
class TransactionExchangeWalletSource {
    /**
     * Constructs a new <code>TransactionExchangeWalletSource</code>.
     * Information about the transaction source, which varies depending on whether you are the initiator or the receiver of the transaction.   - As the initiator, you will see detailed information about the transaction source, and the &#x60;source&#x60; will be displayed as one of the following wallet sub-types: &#x60;Asset&#x60;, &#x60;Org-Controlled&#x60;, &#x60;User-Controlled&#x60;, &#x60;Safe{Wallet}&#x60;, &#x60;Main&#x60;, or &#x60;Sub&#x60;. - As the receiver, you will see the &#x60;source&#x60; as either &#x60;DepositFromAddress&#x60;, &#x60;DepositFromWallet&#x60;, or &#x60;DepositFromLoop&#x60;. If the transaction is from the Loop transfer network, the source will be &#x60;DepositFromLoop&#x60;. Otherwise, it will be either &#x60;DepositFromWallet&#x60; (indicating an Exchange Wallet) or &#x60;DepositFromAddress&#x60; (indicating other wallet type than an Exchange Wallet or an external address). 
     * @alias module:model/TransactionExchangeWalletSource
     * @param source_type {module:model/TransactionSourceType} 
     * @param exchange_id {module:model/ExchangeId} 
     * @param wallet_id {String} The wallet ID.
     */
    constructor(source_type, exchange_id, wallet_id) { 
        
        TransactionExchangeWalletSource.initialize(this, source_type, exchange_id, wallet_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source_type, exchange_id, wallet_id) { 
        obj['source_type'] = source_type;
        obj['exchange_id'] = exchange_id;
        obj['wallet_id'] = wallet_id;
    }

    /**
     * Constructs a <code>TransactionExchangeWalletSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionExchangeWalletSource} obj Optional instance to populate.
     * @return {module:model/TransactionExchangeWalletSource} The populated <code>TransactionExchangeWalletSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionExchangeWalletSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = TransactionSourceType.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('exchange_id')) {
                obj['exchange_id'] = ExchangeId.constructFromObject(data['exchange_id']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('sub_wallet_id')) {
                obj['sub_wallet_id'] = ApiClient.convertToType(data['sub_wallet_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionExchangeWalletSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionExchangeWalletSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionExchangeWalletSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['sub_wallet_id'] && !(typeof data['sub_wallet_id'] === 'string' || data['sub_wallet_id'] instanceof String)) {
            throw new Error("Expected the field `sub_wallet_id` to be a primitive type in the JSON string but got " + data['sub_wallet_id']);
        }

        return true;
    }


}

TransactionExchangeWalletSource.RequiredProperties = ["source_type", "exchange_id", "wallet_id"];

/**
 * @member {module:model/TransactionSourceType} source_type
 */
TransactionExchangeWalletSource.prototype['source_type'] = undefined;

/**
 * @member {module:model/ExchangeId} exchange_id
 */
TransactionExchangeWalletSource.prototype['exchange_id'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionExchangeWalletSource.prototype['wallet_id'] = undefined;

/**
 * The exchange trading account or a sub-wallet ID.
 * @member {String} sub_wallet_id
 */
TransactionExchangeWalletSource.prototype['sub_wallet_id'] = undefined;






export default TransactionExchangeWalletSource;

