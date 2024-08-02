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
import FeeAmount from './FeeAmount';
import UtxoFeeBasePrice from './UtxoFeeBasePrice';

/**
 * The EstimatedUtxoFeeSlow model module.
 * @module model/EstimatedUtxoFeeSlow
 */
class EstimatedUtxoFeeSlow {
    /**
     * Constructs a new <code>EstimatedUtxoFeeSlow</code>.
     * @alias module:model/EstimatedUtxoFeeSlow
     * @implements module:model/UtxoFeeBasePrice
     * @implements module:model/FeeAmount
     * @param fee_rate {String} The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
     * @param fee_amount {String} The fee that you need to pay for the transaction.
     */
    constructor(fee_rate, fee_amount) { 
        UtxoFeeBasePrice.initialize(this);FeeAmount.initialize(this);
        EstimatedUtxoFeeSlow.initialize(this, fee_rate, fee_amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee_rate, fee_amount) { 
        obj['fee_rate'] = fee_rate;
        obj['fee_amount'] = fee_amount;
    }

    /**
     * Constructs a <code>EstimatedUtxoFeeSlow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimatedUtxoFeeSlow} obj Optional instance to populate.
     * @return {module:model/EstimatedUtxoFeeSlow} The populated <code>EstimatedUtxoFeeSlow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimatedUtxoFeeSlow();
            UtxoFeeBasePrice.constructFromObject(data, obj);
            FeeAmount.constructFromObject(data, obj);

            if (data.hasOwnProperty('fee_rate')) {
                obj['fee_rate'] = ApiClient.convertToType(data['fee_rate'], 'String');
            }
            if (data.hasOwnProperty('fee_amount')) {
                obj['fee_amount'] = ApiClient.convertToType(data['fee_amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EstimatedUtxoFeeSlow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimatedUtxoFeeSlow</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EstimatedUtxoFeeSlow.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fee_rate'] && !(typeof data['fee_rate'] === 'string' || data['fee_rate'] instanceof String)) {
            throw new Error("Expected the field `fee_rate` to be a primitive type in the JSON string but got " + data['fee_rate']);
        }
        // ensure the json data is a string
        if (data['fee_amount'] && !(typeof data['fee_amount'] === 'string' || data['fee_amount'] instanceof String)) {
            throw new Error("Expected the field `fee_amount` to be a primitive type in the JSON string but got " + data['fee_amount']);
        }

        return true;
    }


}

EstimatedUtxoFeeSlow.RequiredProperties = ["fee_rate", "fee_amount"];

/**
 * The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
 * @member {String} fee_rate
 */
EstimatedUtxoFeeSlow.prototype['fee_rate'] = undefined;

/**
 * The fee that you need to pay for the transaction.
 * @member {String} fee_amount
 */
EstimatedUtxoFeeSlow.prototype['fee_amount'] = undefined;


// Implement UtxoFeeBasePrice interface:
/**
 * The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain.
 * @member {String} fee_rate
 */
UtxoFeeBasePrice.prototype['fee_rate'] = undefined;
// Implement FeeAmount interface:
/**
 * The fee that you need to pay for the transaction.
 * @member {String} fee_amount
 */
FeeAmount.prototype['fee_amount'] = undefined;




export default EstimatedUtxoFeeSlow;

