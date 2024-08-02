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
import ContractCallDestination from './ContractCallDestination';
import ContractCallSource from './ContractCallSource';
import EstimateFeeRequestType from './EstimateFeeRequestType';
import FeeType from './FeeType';

/**
 * The EstimateContractCallFeeParams model module.
 * @module model/EstimateContractCallFeeParams
 */
class EstimateContractCallFeeParams {
    /**
     * Constructs a new <code>EstimateContractCallFeeParams</code>.
     * The information about a transaction that interacts with a smart contract
     * @alias module:model/EstimateContractCallFeeParams
     * @param request_id {String} The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
     * @param request_type {module:model/EstimateFeeRequestType} 
     * @param chain_id {String} The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
     * @param source {module:model/ContractCallSource} 
     * @param destination {module:model/ContractCallDestination} 
     */
    constructor(request_id, request_type, chain_id, source, destination) { 
        
        EstimateContractCallFeeParams.initialize(this, request_id, request_type, chain_id, source, destination);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request_id, request_type, chain_id, source, destination) { 
        obj['request_id'] = request_id;
        obj['request_type'] = request_type;
        obj['chain_id'] = chain_id;
        obj['source'] = source;
        obj['destination'] = destination;
    }

    /**
     * Constructs a <code>EstimateContractCallFeeParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateContractCallFeeParams} obj Optional instance to populate.
     * @return {module:model/EstimateContractCallFeeParams} The populated <code>EstimateContractCallFeeParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimateContractCallFeeParams();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('request_type')) {
                obj['request_type'] = EstimateFeeRequestType.constructFromObject(data['request_type']);
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ContractCallSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ContractCallDestination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EstimateContractCallFeeParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimateContractCallFeeParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EstimateContractCallFeeParams.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          ContractCallSource.validateJSON(data['source']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          ContractCallDestination.validateJSON(data['destination']);
        }

        return true;
    }


}

EstimateContractCallFeeParams.RequiredProperties = ["request_id", "request_type", "chain_id", "source", "destination"];

/**
 * The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
EstimateContractCallFeeParams.prototype['request_id'] = undefined;

/**
 * @member {module:model/EstimateFeeRequestType} request_type
 */
EstimateContractCallFeeParams.prototype['request_type'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
EstimateContractCallFeeParams.prototype['chain_id'] = undefined;

/**
 * @member {module:model/ContractCallSource} source
 */
EstimateContractCallFeeParams.prototype['source'] = undefined;

/**
 * @member {module:model/ContractCallDestination} destination
 */
EstimateContractCallFeeParams.prototype['destination'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
EstimateContractCallFeeParams.prototype['fee_type'] = undefined;






export default EstimateContractCallFeeParams;

