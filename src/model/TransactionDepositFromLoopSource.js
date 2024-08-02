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
import TransactionSourceType from './TransactionSourceType';

/**
 * The TransactionDepositFromLoopSource model module.
 * @module model/TransactionDepositFromLoopSource
 */
class TransactionDepositFromLoopSource {
    /**
     * Constructs a new <code>TransactionDepositFromLoopSource</code>.
     * Information about the transaction source, which varies depending on whether you are the initiator or the receiver of the transaction.   - As the initiator, you will see detailed information about the transaction source, and the &#x60;source&#x60; will be displayed as one of the following wallet sub-types: &#x60;Asset&#x60;, &#x60;Org-Controlled&#x60;, &#x60;User-Controlled&#x60;, &#x60;Safe{Wallet}&#x60;, &#x60;Main&#x60;, or &#x60;Sub&#x60;. - As the receiver, you will see the &#x60;source&#x60; as either &#x60;DepositFromAddress&#x60;, &#x60;DepositFromWallet&#x60;, or &#x60;DepositFromLoop&#x60;. If the transaction is from the Loop transfer network, the source will be &#x60;DepositFromLoop&#x60;. Otherwise, it will be either &#x60;DepositFromWallet&#x60; (indicating an Exchange Wallet) or &#x60;DepositFromAddress&#x60; (indicating other wallet type than an Exchange Wallet or an external address). 
     * @alias module:model/TransactionDepositFromLoopSource
     * @param source_type {module:model/TransactionSourceType} 
     */
    constructor(source_type) { 
        
        TransactionDepositFromLoopSource.initialize(this, source_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source_type) { 
        obj['source_type'] = source_type;
    }

    /**
     * Constructs a <code>TransactionDepositFromLoopSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionDepositFromLoopSource} obj Optional instance to populate.
     * @return {module:model/TransactionDepositFromLoopSource} The populated <code>TransactionDepositFromLoopSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionDepositFromLoopSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = TransactionSourceType.constructFromObject(data['source_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionDepositFromLoopSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionDepositFromLoopSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionDepositFromLoopSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

TransactionDepositFromLoopSource.RequiredProperties = ["source_type"];

/**
 * @member {module:model/TransactionSourceType} source_type
 */
TransactionDepositFromLoopSource.prototype['source_type'] = undefined;






export default TransactionDepositFromLoopSource;

