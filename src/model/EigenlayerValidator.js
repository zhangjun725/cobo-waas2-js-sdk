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

/**
 * The EigenlayerValidator model module.
 * @module model/EigenlayerValidator
 */
class EigenlayerValidator {
    /**
     * Constructs a new <code>EigenlayerValidator</code>.
     * The EigenLayer validator info.
     * @alias module:model/EigenlayerValidator
     * @param icon_url {String} The URL of the validator's icon.
     * @param name {String} The name of validator.
     * @param address {String} The address of validator.
     */
    constructor(icon_url, name, address) { 
        
        EigenlayerValidator.initialize(this, icon_url, name, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, icon_url, name, address) { 
        obj['icon_url'] = icon_url;
        obj['name'] = name;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>EigenlayerValidator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EigenlayerValidator} obj Optional instance to populate.
     * @return {module:model/EigenlayerValidator} The populated <code>EigenlayerValidator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EigenlayerValidator();

            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('commission_rate')) {
                obj['commission_rate'] = ApiClient.convertToType(data['commission_rate'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EigenlayerValidator</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EigenlayerValidator</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EigenlayerValidator.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['icon_url'] && !(typeof data['icon_url'] === 'string' || data['icon_url'] instanceof String)) {
            throw new Error("Expected the field `icon_url` to be a primitive type in the JSON string but got " + data['icon_url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }

        return true;
    }


}

EigenlayerValidator.RequiredProperties = ["icon_url", "name", "address"];

/**
 * The URL of the validator's icon.
 * @member {String} icon_url
 */
EigenlayerValidator.prototype['icon_url'] = undefined;

/**
 * The name of validator.
 * @member {String} name
 */
EigenlayerValidator.prototype['name'] = undefined;

/**
 * The priority of validator.
 * @member {Number} priority
 */
EigenlayerValidator.prototype['priority'] = undefined;

/**
 * The address of validator.
 * @member {String} address
 */
EigenlayerValidator.prototype['address'] = undefined;

/**
 * The commission of validator.
 * @member {Number} commission_rate
 */
EigenlayerValidator.prototype['commission_rate'] = undefined;






export default EigenlayerValidator;

