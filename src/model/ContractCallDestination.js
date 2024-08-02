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
import ContractCallDestinationType from './ContractCallDestinationType';
import EvmContractCallDestination from './EvmContractCallDestination';

/**
 * The ContractCallDestination model module.
 * @module model/ContractCallDestination
 */
class ContractCallDestination {
    /**
     * Constructs a new <code>ContractCallDestination</code>.
     * @alias module:model/ContractCallDestination
     * @param {(module:model/EvmContractCallDestination)} instance The actual instance to initialize ContractCallDestination.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof EvmContractCallDestination) {
                this.actualInstance = instance;
            } else if(EvmContractCallDestination.validateJSON(instance)){
                // plain JS object
                // create EvmContractCallDestination from JS object
                this.actualInstance = EvmContractCallDestination.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EvmContractCallDestination
            errorMessages.push("Failed to construct EvmContractCallDestination: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `ContractCallDestination` with oneOf schemas EvmContractCallDestination. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `ContractCallDestination` with oneOf schemas EvmContractCallDestination. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ContractCallDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContractCallDestination} obj Optional instance to populate.
     * @return {module:model/ContractCallDestination} The populated <code>ContractCallDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ContractCallDestination(data);
    }

    /**
     * Gets the actual instance, which can be <code>EvmContractCallDestination</code>.
     * @return {(module:model/EvmContractCallDestination)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>EvmContractCallDestination</code>.
     * @param {(module:model/EvmContractCallDestination)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ContractCallDestination.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ContractCallDestination from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ContractCallDestination} An instance of ContractCallDestination.
     */
    static fromJSON = function(json_string){
        return ContractCallDestination.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/ContractCallDestinationType} destination_type
 */
ContractCallDestination.prototype['destination_type'] = undefined;

/**
 * The destination address.
 * @member {String} address
 */
ContractCallDestination.prototype['address'] = undefined;

/**
 * The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is `1.5`. 
 * @member {String} value
 */
ContractCallDestination.prototype['value'] = undefined;

/**
 * The data that is used to invoke a specific function or method within the specified contract at the destination address. 
 * @member {Blob} calldata
 */
ContractCallDestination.prototype['calldata'] = undefined;


ContractCallDestination.OneOf = ["EvmContractCallDestination"];

export default ContractCallDestination;

