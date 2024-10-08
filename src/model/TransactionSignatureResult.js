/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TransactionResultType from './TransactionResultType';

/**
 * The TransactionSignatureResult model module.
 * @module model/TransactionSignatureResult
 */
class TransactionSignatureResult {
    /**
     * Constructs a new <code>TransactionSignatureResult</code>.
     * The result of a message sign transaction.
     * @alias module:model/TransactionSignatureResult
     * @param signature {String} The raw data of the signature.
     */
    constructor(signature) { 
        
        TransactionSignatureResult.initialize(this, signature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, signature) { 
        obj['signature'] = signature;
    }

    /**
     * Constructs a <code>TransactionSignatureResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSignatureResult} obj Optional instance to populate.
     * @return {module:model/TransactionSignatureResult} The populated <code>TransactionSignatureResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionSignatureResult();

            if (data.hasOwnProperty('result_type')) {
                obj['result_type'] = TransactionResultType.constructFromObject(data['result_type']);
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionSignatureResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionSignatureResult</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionSignatureResult.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['signature'] && !(typeof data['signature'] === 'string' || data['signature'] instanceof String)) {
            throw new Error("Expected the field `signature` to be a primitive type in the JSON string but got " + data['signature']);
        }

        return true;
    }


}

TransactionSignatureResult.RequiredProperties = ["signature"];

/**
 * @member {module:model/TransactionResultType} result_type
 */
TransactionSignatureResult.prototype['result_type'] = undefined;

/**
 * The raw data of the signature.
 * @member {String} signature
 */
TransactionSignatureResult.prototype['signature'] = undefined;






export default TransactionSignatureResult;

