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
import CoboSafeDelegate from './CoboSafeDelegate';
import CustodialTransferSource from './CustodialTransferSource';
import ExchangeTransferSource from './ExchangeTransferSource';
import MpcTransferSource from './MpcTransferSource';
import SafeTransferSource from './SafeTransferSource';
import TransactionUtxo from './TransactionUtxo';
import WalletSubtype from './WalletSubtype';

/**
 * The TransferSource model module.
 * @module model/TransferSource
 */
class TransferSource {
    /**
     * Constructs a new <code>TransferSource</code>.
     * @alias module:model/TransferSource
     * @param {(module:model/CustodialTransferSource|module:model/ExchangeTransferSource|module:model/MpcTransferSource|module:model/SafeTransferSource)} instance The actual instance to initialize TransferSource.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof CustodialTransferSource) {
                this.actualInstance = instance;
            } else if(CustodialTransferSource.validateJSON(instance)){
                // plain JS object
                // create CustodialTransferSource from JS object
                this.actualInstance = CustodialTransferSource.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into CustodialTransferSource
            errorMessages.push("Failed to construct CustodialTransferSource: " + err)
        }

        try {
            if (instance instanceof MpcTransferSource) {
                this.actualInstance = instance;
            } else if(MpcTransferSource.validateJSON(instance)){
                // plain JS object
                // create MpcTransferSource from JS object
                this.actualInstance = MpcTransferSource.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MpcTransferSource
            errorMessages.push("Failed to construct MpcTransferSource: " + err)
        }

        try {
            if (instance instanceof SafeTransferSource) {
                this.actualInstance = instance;
            } else if(SafeTransferSource.validateJSON(instance)){
                // plain JS object
                // create SafeTransferSource from JS object
                this.actualInstance = SafeTransferSource.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SafeTransferSource
            errorMessages.push("Failed to construct SafeTransferSource: " + err)
        }

        try {
            if (instance instanceof ExchangeTransferSource) {
                this.actualInstance = instance;
            } else if(ExchangeTransferSource.validateJSON(instance)){
                // plain JS object
                // create ExchangeTransferSource from JS object
                this.actualInstance = ExchangeTransferSource.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExchangeTransferSource
            errorMessages.push("Failed to construct ExchangeTransferSource: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `TransferSource` with oneOf schemas CustodialTransferSource, ExchangeTransferSource, MpcTransferSource, SafeTransferSource. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `TransferSource` with oneOf schemas CustodialTransferSource, ExchangeTransferSource, MpcTransferSource, SafeTransferSource. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>TransferSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferSource} obj Optional instance to populate.
     * @return {module:model/TransferSource} The populated <code>TransferSource</code> instance.
     */
    static constructFromObject(data, obj) {
        return new TransferSource(data);
    }

    /**
     * Gets the actual instance, which can be <code>CustodialTransferSource</code>, <code>ExchangeTransferSource</code>, <code>MpcTransferSource</code>, <code>SafeTransferSource</code>.
     * @return {(module:model/CustodialTransferSource|module:model/ExchangeTransferSource|module:model/MpcTransferSource|module:model/SafeTransferSource)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>CustodialTransferSource</code>, <code>ExchangeTransferSource</code>, <code>MpcTransferSource</code>, <code>SafeTransferSource</code>.
     * @param {(module:model/CustodialTransferSource|module:model/ExchangeTransferSource|module:model/MpcTransferSource|module:model/SafeTransferSource)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = TransferSource.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of TransferSource from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/TransferSource} An instance of TransferSource.
     */
    static fromJSON = function(json_string){
        return TransferSource.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/WalletSubtype} source_type
 */
TransferSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransferSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
TransferSource.prototype['address'] = undefined;

/**
 * @member {Array.<module:model/TransactionUtxo>} included_utxos
 */
TransferSource.prototype['included_utxos'] = undefined;

/**
 * @member {Array.<module:model/TransactionUtxo>} excluded_utxos
 */
TransferSource.prototype['excluded_utxos'] = undefined;

/**
 * @member {module:model/CoboSafeDelegate} delegate
 */
TransferSource.prototype['delegate'] = undefined;

/**
 * The exchange trading account or the sub-wallet ID.
 * @member {String} sub_wallet_id
 */
TransferSource.prototype['sub_wallet_id'] = undefined;


TransferSource.OneOf = ["CustodialTransferSource", "ExchangeTransferSource", "MpcTransferSource", "SafeTransferSource"];

export default TransferSource;

