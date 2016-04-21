(function(){

    "use strict";

    angular
        .module("ui.storageManager")
        .service("storageManager", storageManager);

    /**
     * Declare storage service to manage localDB & cookies.
     * @param {"utils.cookieService"} cookieService
     * @param {"utils.localDBService"} localDBService
     */
    function storageManager(cookieService, localDBService){

        var _sm = this,
            TYPE = {
                "cookie": cookieService,
                "localDB": localDBService
            };

        // Create a new storage by type.
        this.specify = function(newType){
            var obj = {};
            for (var prop in TYPE[newType]) {
                if (TYPE[newType].hasOwnProperty(prop)) {
                    obj[prop] = TYPE[newType][prop];
                }
            }
            obj.title = newType;
            return obj;
        };

    }

    // IoC container.
    storageManager.$inject = [
        "storageManager.cookieService",
        "storageManager.localDBService"
    ];

})();