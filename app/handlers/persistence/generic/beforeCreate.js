/* global Backendless */

/**
* @param {Object} req The request object contains information about the request
* @param {Object} req.context The execution context contains an information about application, current user and event
* @param {Object} req.item An item to create
*
* @returns {Object|Promise.<Object>|void} By returning a value you can stop further event propagation and return
*          a specific result to the caller
*/
Backendless.ServerCode.Persistence.beforeCreate('*', function(req) {
    console.log( "beforeCreate" );

    function Contact(args) {
        args = args || {};
        this.name = args.name || "";
        this.age = args.age || "";
        this.phone = args.phone || "";
        this.title = args.title || "";
    }

    var contactObject = new Contact( {
        name: "beforeCreate",
        age: 4,
        phone: "1",
        title: "c"
    });

   function successCallback() {
       console.log( result );
   }

    function errorCallback() {
        console.log( err.message );
    }

    var failureCallback = function ( fault )
    {
        response.status( 500 ).send( fault );
    };

    var savedContact = Backendless.Persistence.of( Contact ).save( contactObject,   new Backendless.Async(
            function ( result )
            {
                response.send( result );
            }, failureCallback )

     );
});