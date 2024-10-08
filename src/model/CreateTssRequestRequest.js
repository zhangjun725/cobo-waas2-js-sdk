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
import SourceGroup from './SourceGroup';
import TSSRequestType from './TSSRequestType';

/**
 * The CreateTssRequestRequest model module.
 * @module model/CreateTssRequestRequest
 */
class CreateTssRequestRequest {
    /**
     * Constructs a new <code>CreateTssRequestRequest</code>.
     * @alias module:model/CreateTssRequestRequest
     * @param type {module:model/TSSRequestType} 
     * @param target_key_share_holder_group_id {String} The target key share holder group ID.
     */
    constructor(type, target_key_share_holder_group_id) { 
        
        CreateTssRequestRequest.initialize(this, type, target_key_share_holder_group_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, target_key_share_holder_group_id) { 
        obj['type'] = type;
        obj['target_key_share_holder_group_id'] = target_key_share_holder_group_id;
    }

    /**
     * Constructs a <code>CreateTssRequestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTssRequestRequest} obj Optional instance to populate.
     * @return {module:model/CreateTssRequestRequest} The populated <code>CreateTssRequestRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTssRequestRequest();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TSSRequestType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('target_key_share_holder_group_id')) {
                obj['target_key_share_holder_group_id'] = ApiClient.convertToType(data['target_key_share_holder_group_id'], 'String');
            }
            if (data.hasOwnProperty('source_key_share_holder_group')) {
                obj['source_key_share_holder_group'] = SourceGroup.constructFromObject(data['source_key_share_holder_group']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateTssRequestRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTssRequestRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateTssRequestRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['target_key_share_holder_group_id'] && !(typeof data['target_key_share_holder_group_id'] === 'string' || data['target_key_share_holder_group_id'] instanceof String)) {
            throw new Error("Expected the field `target_key_share_holder_group_id` to be a primitive type in the JSON string but got " + data['target_key_share_holder_group_id']);
        }
        // validate the optional field `source_key_share_holder_group`
        if (data['source_key_share_holder_group']) { // data not null
          if (!!SourceGroup.validateJSON) {
            SourceGroup.validateJSON(data['source_key_share_holder_group']);
          }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

CreateTssRequestRequest.RequiredProperties = ["type", "target_key_share_holder_group_id"];

/**
 * @member {module:model/TSSRequestType} type
 */
CreateTssRequestRequest.prototype['type'] = undefined;

/**
 * The target key share holder group ID.
 * @member {String} target_key_share_holder_group_id
 */
CreateTssRequestRequest.prototype['target_key_share_holder_group_id'] = undefined;

/**
 * @member {module:model/SourceGroup} source_key_share_holder_group
 */
CreateTssRequestRequest.prototype['source_key_share_holder_group'] = undefined;

/**
 * The description of the TSS request.
 * @member {String} description
 */
CreateTssRequestRequest.prototype['description'] = undefined;






export default CreateTssRequestRequest;

