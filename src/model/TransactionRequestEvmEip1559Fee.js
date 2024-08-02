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
import EvmEip1559FeeBasePrice from './EvmEip1559FeeBasePrice';
import FeeType from './FeeType';

/**
 * The TransactionRequestEvmEip1559Fee model module.
 * @module model/TransactionRequestEvmEip1559Fee
 */
class TransactionRequestEvmEip1559Fee {
    /**
     * Constructs a new <code>TransactionRequestEvmEip1559Fee</code>.
     * In the EIP-1559 fee model, the transaction fee is calculated by multiplying the gas price and the gas units used by the transaction. This can be expressed as: Transaction fee &#x3D; gas price * gas units used.   You can specify the maximum gas fee per gas unit and the maximum priority fee per gas unit to limit the transaction fee amount. You can also specify the gas limit. If the gas units used exceeds the gas limit, the transaction will fail. 
     * @alias module:model/TransactionRequestEvmEip1559Fee
     * @implements module:model/EvmEip1559FeeBasePrice
     * @param max_fee_per_gas {String} The maximum gas fee per gas unit used on the chain, in wei.
     * @param max_priority_fee_per_gas {String} The maximum priority fee per gas unit used, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
     * @param fee_type {module:model/FeeType} 
     * @param token_id {String} The token ID of the transaction fee.
     */
    constructor(max_fee_per_gas, max_priority_fee_per_gas, fee_type, token_id) { 
        EvmEip1559FeeBasePrice.initialize(this);
        TransactionRequestEvmEip1559Fee.initialize(this, max_fee_per_gas, max_priority_fee_per_gas, fee_type, token_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, max_fee_per_gas, max_priority_fee_per_gas, fee_type, token_id) { 
        obj['max_fee_per_gas'] = max_fee_per_gas;
        obj['max_priority_fee_per_gas'] = max_priority_fee_per_gas;
        obj['fee_type'] = fee_type;
        obj['token_id'] = token_id;
    }

    /**
     * Constructs a <code>TransactionRequestEvmEip1559Fee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRequestEvmEip1559Fee} obj Optional instance to populate.
     * @return {module:model/TransactionRequestEvmEip1559Fee} The populated <code>TransactionRequestEvmEip1559Fee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRequestEvmEip1559Fee();
            EvmEip1559FeeBasePrice.constructFromObject(data, obj);

            if (data.hasOwnProperty('max_fee_per_gas')) {
                obj['max_fee_per_gas'] = ApiClient.convertToType(data['max_fee_per_gas'], 'String');
            }
            if (data.hasOwnProperty('max_priority_fee_per_gas')) {
                obj['max_priority_fee_per_gas'] = ApiClient.convertToType(data['max_priority_fee_per_gas'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('gas_limit')) {
                obj['gas_limit'] = ApiClient.convertToType(data['gas_limit'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionRequestEvmEip1559Fee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionRequestEvmEip1559Fee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionRequestEvmEip1559Fee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['max_fee_per_gas'] && !(typeof data['max_fee_per_gas'] === 'string' || data['max_fee_per_gas'] instanceof String)) {
            throw new Error("Expected the field `max_fee_per_gas` to be a primitive type in the JSON string but got " + data['max_fee_per_gas']);
        }
        // ensure the json data is a string
        if (data['max_priority_fee_per_gas'] && !(typeof data['max_priority_fee_per_gas'] === 'string' || data['max_priority_fee_per_gas'] instanceof String)) {
            throw new Error("Expected the field `max_priority_fee_per_gas` to be a primitive type in the JSON string but got " + data['max_priority_fee_per_gas']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['gas_limit'] && !(typeof data['gas_limit'] === 'string' || data['gas_limit'] instanceof String)) {
            throw new Error("Expected the field `gas_limit` to be a primitive type in the JSON string but got " + data['gas_limit']);
        }

        return true;
    }


}

TransactionRequestEvmEip1559Fee.RequiredProperties = ["max_fee_per_gas", "max_priority_fee_per_gas", "fee_type", "token_id"];

/**
 * The maximum gas fee per gas unit used on the chain, in wei.
 * @member {String} max_fee_per_gas
 */
TransactionRequestEvmEip1559Fee.prototype['max_fee_per_gas'] = undefined;

/**
 * The maximum priority fee per gas unit used, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
 * @member {String} max_priority_fee_per_gas
 */
TransactionRequestEvmEip1559Fee.prototype['max_priority_fee_per_gas'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
TransactionRequestEvmEip1559Fee.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
TransactionRequestEvmEip1559Fee.prototype['token_id'] = undefined;

/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
TransactionRequestEvmEip1559Fee.prototype['gas_limit'] = '21000';


// Implement EvmEip1559FeeBasePrice interface:
/**
 * The maximum gas fee per gas unit used on the chain, in wei.
 * @member {String} max_fee_per_gas
 */
EvmEip1559FeeBasePrice.prototype['max_fee_per_gas'] = undefined;
/**
 * The maximum priority fee per gas unit used, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
 * @member {String} max_priority_fee_per_gas
 */
EvmEip1559FeeBasePrice.prototype['max_priority_fee_per_gas'] = undefined;




export default TransactionRequestEvmEip1559Fee;

