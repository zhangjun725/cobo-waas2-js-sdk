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
 * The TransactionSigner model module.
 * @module model/TransactionSigner
 */
class TransactionSigner {
    /**
     * Constructs a new <code>TransactionSigner</code>.
     * The signer data for transaction.
     * @alias module:model/TransactionSigner
     */
    constructor() { 
        
        TransactionSigner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionSigner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSigner} obj Optional instance to populate.
     * @return {module:model/TransactionSigner} The populated <code>TransactionSigner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionSigner();

            if (data.hasOwnProperty('signer')) {
                obj['signer'] = ApiClient.convertToType(data['signer'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('failed_reason')) {
                obj['failed_reason'] = ApiClient.convertToType(data['failed_reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionSigner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionSigner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['signer'] && !(typeof data['signer'] === 'string' || data['signer'] instanceof String)) {
            throw new Error("Expected the field `signer` to be a primitive type in the JSON string but got " + data['signer']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['failed_reason'] && !(typeof data['failed_reason'] === 'string' || data['failed_reason'] instanceof String)) {
            throw new Error("Expected the field `failed_reason` to be a primitive type in the JSON string but got " + data['failed_reason']);
        }

        return true;
    }


}



/**
 * The signer name of the transaction.
 * @member {String} signer
 */
TransactionSigner.prototype['signer'] = undefined;

/**
 * The signing status.
 * @member {module:model/TransactionSigner.StatusEnum} status
 */
TransactionSigner.prototype['status'] = undefined;

/**
 * Failed reason of signing process.
 * @member {String} failed_reason
 */
TransactionSigner.prototype['failed_reason'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TransactionSigner['StatusEnum'] = {

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",

    /**
     * value: "Signed"
     * @const
     */
    "Signed": "Signed",

    /**
     * value: "Timeout"
     * @const
     */
    "Timeout": "Timeout",

    /**
     * value: "Rejected"
     * @const
     */
    "Rejected": "Rejected",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};



export default TransactionSigner;

