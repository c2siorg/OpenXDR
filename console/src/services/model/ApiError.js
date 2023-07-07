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
 * The ApiError model module.
 * @module model/ApiError
 * @version 1.0
 */
class ApiError {
    /**
     * Constructs a new <code>ApiError</code>.
     * Description of an error
     * @alias module:model/ApiError
     * @param msg {String} 
     * @param timestamp {Date} 
     */
    constructor(msg, timestamp) { 
        
        ApiError.initialize(this, msg, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, msg, timestamp) { 
        obj['msg'] = msg;
        obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>ApiError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiError} obj Optional instance to populate.
     * @return {module:model/ApiError} The populated <code>ApiError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiError();

            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} msg
 */
ApiError.prototype['msg'] = undefined;

/**
 * @member {Date} timestamp
 */
ApiError.prototype['timestamp'] = undefined;






export default ApiError;

