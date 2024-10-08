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
* Enum class KeyShareHolderGroupType.
* @enum {}
* @readonly
*/
export default class KeyShareHolderGroupType {
    
        /**
         * value: "MainGroup"
         * @const
         */
        "MainGroup" = "MainGroup";

    
        /**
         * value: "SigningGroup"
         * @const
         */
        "SigningGroup" = "SigningGroup";

    
        /**
         * value: "RecoveryGroup"
         * @const
         */
        "RecoveryGroup" = "RecoveryGroup";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>KeyShareHolderGroupType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/KeyShareHolderGroupType} The enum <code>KeyShareHolderGroupType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

