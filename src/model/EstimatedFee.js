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
import EstimatedEvmEip1559Fee from './EstimatedEvmEip1559Fee';
import EstimatedEvmLegacyFee from './EstimatedEvmLegacyFee';
import EstimatedFixedFee from './EstimatedFixedFee';
import EstimatedUtxoFee from './EstimatedUtxoFee';
import EstimatedUtxoFeeSlow from './EstimatedUtxoFeeSlow';
import FeeType from './FeeType';

/**
 * The EstimatedFee model module.
 * @module model/EstimatedFee
 */
class EstimatedFee {
    /**
     * Constructs a new <code>EstimatedFee</code>.
     * @alias module:model/EstimatedFee
     * @param {(module:model/EstimatedEvmEip1559Fee|module:model/EstimatedEvmLegacyFee|module:model/EstimatedFixedFee|module:model/EstimatedUtxoFee)} instance The actual instance to initialize EstimatedFee.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof EstimatedFixedFee) {
                this.actualInstance = instance;
            } else if(EstimatedFixedFee.validateJSON(instance)){
                // plain JS object
                // create EstimatedFixedFee from JS object
                this.actualInstance = EstimatedFixedFee.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimatedFixedFee
            errorMessages.push("Failed to construct EstimatedFixedFee: " + err)
        }

        try {
            if (instance instanceof EstimatedEvmEip1559Fee) {
                this.actualInstance = instance;
            } else if(EstimatedEvmEip1559Fee.validateJSON(instance)){
                // plain JS object
                // create EstimatedEvmEip1559Fee from JS object
                this.actualInstance = EstimatedEvmEip1559Fee.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimatedEvmEip1559Fee
            errorMessages.push("Failed to construct EstimatedEvmEip1559Fee: " + err)
        }

        try {
            if (instance instanceof EstimatedEvmLegacyFee) {
                this.actualInstance = instance;
            } else if(EstimatedEvmLegacyFee.validateJSON(instance)){
                // plain JS object
                // create EstimatedEvmLegacyFee from JS object
                this.actualInstance = EstimatedEvmLegacyFee.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimatedEvmLegacyFee
            errorMessages.push("Failed to construct EstimatedEvmLegacyFee: " + err)
        }

        try {
            if (instance instanceof EstimatedUtxoFee) {
                this.actualInstance = instance;
            } else if(EstimatedUtxoFee.validateJSON(instance)){
                // plain JS object
                // create EstimatedUtxoFee from JS object
                this.actualInstance = EstimatedUtxoFee.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimatedUtxoFee
            errorMessages.push("Failed to construct EstimatedUtxoFee: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `EstimatedFee` with oneOf schemas EstimatedEvmEip1559Fee, EstimatedEvmLegacyFee, EstimatedFixedFee, EstimatedUtxoFee. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `EstimatedFee` with oneOf schemas EstimatedEvmEip1559Fee, EstimatedEvmLegacyFee, EstimatedFixedFee, EstimatedUtxoFee. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>EstimatedFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimatedFee} obj Optional instance to populate.
     * @return {module:model/EstimatedFee} The populated <code>EstimatedFee</code> instance.
     */
    static constructFromObject(data, obj) {
        return new EstimatedFee(data);
    }

    /**
     * Gets the actual instance, which can be <code>EstimatedEvmEip1559Fee</code>, <code>EstimatedEvmLegacyFee</code>, <code>EstimatedFixedFee</code>, <code>EstimatedUtxoFee</code>.
     * @return {(module:model/EstimatedEvmEip1559Fee|module:model/EstimatedEvmLegacyFee|module:model/EstimatedFixedFee|module:model/EstimatedUtxoFee)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>EstimatedEvmEip1559Fee</code>, <code>EstimatedEvmLegacyFee</code>, <code>EstimatedFixedFee</code>, <code>EstimatedUtxoFee</code>.
     * @param {(module:model/EstimatedEvmEip1559Fee|module:model/EstimatedEvmLegacyFee|module:model/EstimatedFixedFee|module:model/EstimatedUtxoFee)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = EstimatedFee.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of EstimatedFee from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/EstimatedFee} An instance of EstimatedFee.
     */
    static fromJSON = function(json_string){
        return EstimatedFee.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/FeeType} fee_type
 */
EstimatedFee.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
EstimatedFee.prototype['token_id'] = undefined;

/**
 * Whether the transaction can be executed as a Loop transfer. For more information about Loop, see [Loop's website](https://loop.top/). - `true`: The transaction is a Loop transfer. - `false`: The transaction is not a Loop transfer. 
 * @member {Boolean} is_loop
 */
EstimatedFee.prototype['is_loop'] = undefined;

/**
 * The fee that you need to pay for the transaction.
 * @member {String} fee_amount
 */
EstimatedFee.prototype['fee_amount'] = undefined;

/**
 * @member {module:model/EstimatedUtxoFeeSlow} slow
 */
EstimatedFee.prototype['slow'] = undefined;

/**
 * @member {module:model/EstimatedUtxoFeeSlow} recommended
 */
EstimatedFee.prototype['recommended'] = undefined;

/**
 * @member {module:model/EstimatedUtxoFeeSlow} fast
 */
EstimatedFee.prototype['fast'] = undefined;


EstimatedFee.OneOf = ["EstimatedEvmEip1559Fee", "EstimatedEvmLegacyFee", "EstimatedFixedFee", "EstimatedUtxoFee"];

export default EstimatedFee;

