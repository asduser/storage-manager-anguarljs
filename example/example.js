(function(){

    "use strict";

    angular
        .module("myApp", ["FE.utils"])
        .controller("mainController", mainController);

    /**
     * Declare storage service to manage localDB & cookies.
     */
    function mainController(storageManager){

        // Declare storage manager.
        // Now you may use one of the existing methods.
        window._sm = storageManager;

    }

    // IoC container.
    mainController.$inject = [
        "utils.storageManager"
    ];

})();