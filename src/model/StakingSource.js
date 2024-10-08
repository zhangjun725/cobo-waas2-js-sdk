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
import CoboSafeDelegate from './CoboSafeDelegate';
import ContractCallSourceType from './ContractCallSourceType';
import MpcContractCallSource from './MpcContractCallSource';
import SafeContractCallSource from './SafeContractCallSource';

/**
 * The StakingSource model module.
 * @module model/StakingSource
 */
class StakingSource {
    /**
     * Constructs a new <code>StakingSource</code>.
     * @alias module:model/StakingSource
     * @param {(module:model/MpcContractCallSource|module:model/SafeContractCallSource)} instance The actual instance to initialize StakingSource.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        var discriminatorValue = instance["source_type"];

        if (discriminatorValue) {
            switch(discriminatorValue) {
                case "Org-Controlled":
                    this.actualInstance = MpcContractCallSource.constructFromObject(instance);
                    match++;
                    break;
                case "Safe{Wallet}":
                    this.actualInstance = SafeContractCallSource.constructFromObject(instance);
                    match++;
                    break;
                case "User-Controlled":
                    this.actualInstance = MpcContractCallSource.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof MpcContractCallSource) {
                this.actualInstance = instance;
            } else if(!!MpcContractCallSource.validateJSON && MpcContractCallSource.validateJSON(instance)){
                // plain JS object
                // create MpcContractCallSource from JS object
                this.actualInstance = MpcContractCallSource.constructFromObject(instance);
            } else {
                if(MpcContractCallSource.constructFromObject(instance)) {
                    if (!!MpcContractCallSource.constructFromObject(instance).toJSON) {
                        if (MpcContractCallSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = MpcContractCallSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = MpcContractCallSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MpcContractCallSource
            errorMessages.push("Failed to construct MpcContractCallSource: " + err)
        }

        try {
            if (instance instanceof SafeContractCallSource) {
                this.actualInstance = instance;
            } else if(!!SafeContractCallSource.validateJSON && SafeContractCallSource.validateJSON(instance)){
                // plain JS object
                // create SafeContractCallSource from JS object
                this.actualInstance = SafeContractCallSource.constructFromObject(instance);
            } else {
                if(SafeContractCallSource.constructFromObject(instance)) {
                    if (!!SafeContractCallSource.constructFromObject(instance).toJSON) {
                        if (SafeContractCallSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = SafeContractCallSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = SafeContractCallSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SafeContractCallSource
            errorMessages.push("Failed to construct SafeContractCallSource: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `StakingSource` with oneOf schemas MpcContractCallSource, SafeContractCallSource. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `StakingSource` with oneOf schemas MpcContractCallSource, SafeContractCallSource. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>StakingSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StakingSource} obj Optional instance to populate.
     * @return {module:model/StakingSource} The populated <code>StakingSource</code> instance.
     */
    static constructFromObject(data, obj) {
        return new StakingSource(data);
    }

    /**
     * Gets the actual instance, which can be <code>MpcContractCallSource</code>, <code>SafeContractCallSource</code>.
     * @return {(module:model/MpcContractCallSource|module:model/SafeContractCallSource)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>MpcContractCallSource</code>, <code>SafeContractCallSource</code>.
     * @param {(module:model/MpcContractCallSource|module:model/SafeContractCallSource)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = StakingSource.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of StakingSource from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/StakingSource} An instance of StakingSource.
     */
    static fromJSON = function(json_string){
        return StakingSource.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/ContractCallSourceType} source_type
 */
StakingSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
StakingSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
StakingSource.prototype['address'] = undefined;

/**
 * The transaction nonce.
 * @member {Number} nonce
 */
StakingSource.prototype['nonce'] = undefined;

/**
 * @member {module:model/CoboSafeDelegate} delegate
 */
StakingSource.prototype['delegate'] = undefined;


StakingSource.OneOf = ["MpcContractCallSource", "SafeContractCallSource"];

export default StakingSource;

