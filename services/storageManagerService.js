(function(){

    "use strict";

    angular
        .module("utils")
        .service("utils.storageManager", storageManager);

    /**
     * Declare storage service to manage localDB & cookies.
     * @param {"utils.cookieService"} cookieService
     * @param {"utils.localDBService"} localDBService
     */
    function storageManager(cookieService, localDBService){

        var storage,
            TYPE = {
                "cookie": cookieService,
                "localDB": localDBService
            };

        // Forcibly assign a new storage type.
        this.specify = function(newType){
            storage = TYPE[newType];
        };

        // Toggle an existing storage type to another.
        this.toggle = function(){
            storage = storage === cookieService ? localDBService : cookieService ;
        };

        // Allow user to use an appropriate storage methods.
        this.use = function(){
            return storage;
        };

    }

    // IoC container.
    storageManager.$inject = [
        "utils.cookieService",
        "utils.localDBService"
    ];

})();