/* global Backendless */

/**
* @param {Object} req The request object contains information about the request
* @param {Object} req.context The execution context contains an information about application, current user and event
* @param {Object} req.args 
*
* @returns {Object|Promise.<Object>|void} The event caller will receive this value
*/
Backendless.ServerCode.customEvent('test', function(req) {
  //add your code here
});