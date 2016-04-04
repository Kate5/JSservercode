/* global Backendless */

/**
* @param {Object} req The request object contains information about the request
* @param {Object} req.context The execution context contains an information about application, current user and event
* @param {Object} req.item An item to create
*
* @param {Object} res The response object
* @param {Object} res.result Created item
* @param {Object} res.error
*
* @returns {Object|Promise.<Object>|void} By returning a value you overwrite server's result
*/
Backendless.enablePromises();
Backendless.ServerCode.PersistenceItem.Persistence.afterCreate('*', function(req, res) {

    console.log( "afterCreate" );

    class Contact extends Backendless.ServerCode.PersistenceItem {

    }

    Contact.findFirst().then(firstContact => {
        firstContact.name += 'asdasd';
        return firstContact.save();
    });

    var contactObject = new Contact();
    contactObject.name = "afterCreate";
    contactObject.age = 4;
    //    phone: "1",
    //    title: "c"
    //};

    return contactObject.save();
    //return Backendless.Persistence.of( 'Contact' ).save( contactObject);

});