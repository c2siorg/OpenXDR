/**
 * Console API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LogsCreateRequest model module.
 * @module model/LogsCreateRequest
 * @version 1.0
 */
class LogsCreateRequest {
    /**
     * Constructs a new <code>LogsCreateRequest</code>.
     * @alias module:model/LogsCreateRequest
     * @param name {String} 
     * @param os {module:model/LogsCreateRequest.OsEnum} 
     * @param source {String} 
     */
    constructor(name, os, source) { 
        
        LogsCreateRequest.initialize(this, name, os, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, os, source) { 
        obj['name'] = name;
        obj['os'] = os;
        obj['source'] = source;
    }

    /**
     * Constructs a <code>LogsCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogsCreateRequest} obj Optional instance to populate.
     * @return {module:model/LogsCreateRequest} The populated <code>LogsCreateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogsCreateRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('os')) {
                obj['os'] = ApiClient.convertToType(data['os'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
LogsCreateRequest.prototype['name'] = undefined;

/**
 * @member {module:model/LogsCreateRequest.OsEnum} os
 */
LogsCreateRequest.prototype['os'] = undefined;

/**
 * @member {String} source
 */
LogsCreateRequest.prototype['source'] = undefined;





/**
 * Allowed values for the <code>os</code> property.
 * @enum {String}
 * @readonly
 */
LogsCreateRequest['OsEnum'] = {

    /**
     * value: "linux"
     * @const
     */
    "linux": "linux",

    /**
     * value: "macos"
     * @const
     */
    "macos": "macos",

    /**
     * value: "win"
     * @const
     */
    "win": "win"
};



export default LogsCreateRequest;

