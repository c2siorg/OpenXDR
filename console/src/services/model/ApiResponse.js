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
 * The ApiResponse model module.
 * @module model/ApiResponse
 * @version 1.0
 */
class ApiResponse {
    /**
     * Constructs a new <code>ApiResponse</code>.
     * Description of a response
     * @alias module:model/ApiResponse
     * @param msg {String} 
     * @param timestamp {Date} 
     */
    constructor(msg, timestamp) { 
        
        ApiResponse.initialize(this, msg, timestamp);
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
     * Constructs a <code>ApiResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiResponse} obj Optional instance to populate.
     * @return {module:model/ApiResponse} The populated <code>ApiResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiResponse();

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
ApiResponse.prototype['msg'] = undefined;

/**
 * @member {Date} timestamp
 */
ApiResponse.prototype['timestamp'] = undefined;






export default ApiResponse;

