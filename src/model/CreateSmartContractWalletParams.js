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
import CreateSafeWalletParams from './CreateSafeWalletParams';
import SmartContractInitiator from './SmartContractInitiator';
import SmartContractWalletType from './SmartContractWalletType';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The CreateSmartContractWalletParams model module.
 * @module model/CreateSmartContractWalletParams
 */
class CreateSmartContractWalletParams {
    /**
     * Constructs a new <code>CreateSmartContractWalletParams</code>.
     * @alias module:model/CreateSmartContractWalletParams
     * @param {(module:model/CreateSafeWalletParams)} instance The actual instance to initialize CreateSmartContractWalletParams.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof CreateSafeWalletParams) {
                this.actualInstance = instance;
            } else if(CreateSafeWalletParams.validateJSON(instance)){
                // plain JS object
                // create CreateSafeWalletParams from JS object
                this.actualInstance = CreateSafeWalletParams.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into CreateSafeWalletParams
            errorMessages.push("Failed to construct CreateSafeWalletParams: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `CreateSmartContractWalletParams` with oneOf schemas CreateSafeWalletParams. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `CreateSmartContractWalletParams` with oneOf schemas CreateSafeWalletParams. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>CreateSmartContractWalletParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSmartContractWalletParams} obj Optional instance to populate.
     * @return {module:model/CreateSmartContractWalletParams} The populated <code>CreateSmartContractWalletParams</code> instance.
     */
    static constructFromObject(data, obj) {
        return new CreateSmartContractWalletParams(data);
    }

    /**
     * Gets the actual instance, which can be <code>CreateSafeWalletParams</code>.
     * @return {(module:model/CreateSafeWalletParams)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>CreateSafeWalletParams</code>.
     * @param {(module:model/CreateSafeWalletParams)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = CreateSmartContractWalletParams.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of CreateSmartContractWalletParams from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/CreateSmartContractWalletParams} An instance of CreateSmartContractWalletParams.
     */
    static fromJSON = function(json_string){
        return CreateSmartContractWalletParams.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * The wallet name.
 * @member {String} name
 */
CreateSmartContractWalletParams.prototype['name'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
CreateSmartContractWalletParams.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CreateSmartContractWalletParams.prototype['wallet_subtype'] = undefined;

/**
 * The ID of the chain that the wallet operates on.
 * @member {String} chain_id
 */
CreateSmartContractWalletParams.prototype['chain_id'] = undefined;

/**
 * @member {module:model/SmartContractWalletType} smart_contract_wallet_type
 */
CreateSmartContractWalletParams.prototype['smart_contract_wallet_type'] = undefined;

/**
 * The address of the Smart Contract Wallet. If this is not provided, Cobo will create a new Safe{Wallet} and set up Cobo Safe for you. In that case, the `threshold` and `signers` properties are required.
 * @member {String} safe_address
 */
CreateSmartContractWalletParams.prototype['safe_address'] = undefined;

/**
 * The signers of the Smart Contract Wallet. This property is required when creating a new Safe{Wallet}.
 * @member {Array.<String>} signers
 */
CreateSmartContractWalletParams.prototype['signers'] = undefined;

/**
 * The minimum number of confirmations required for the Smart Contract Wallet. This property is required when creating a new Safe{Wallet}.
 * @member {Number} threshold
 */
CreateSmartContractWalletParams.prototype['threshold'] = undefined;

/**
 * The address of Cobo Safe. If you are importing an existing Safe{Wallet}, Cobo Safe must have been created and enabled.
 * @member {String} cobo_safe_address
 */
CreateSmartContractWalletParams.prototype['cobo_safe_address'] = undefined;

/**
 * @member {module:model/SmartContractInitiator} initiator
 */
CreateSmartContractWalletParams.prototype['initiator'] = undefined;


CreateSmartContractWalletParams.OneOf = ["CreateSafeWalletParams"];

export default CreateSmartContractWalletParams;

