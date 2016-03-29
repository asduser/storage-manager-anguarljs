(function(){

    "use strict";

    angular
        .module("myApp", ["FE.utils"])
        .controller("mainController", mainController);

    /**
     * Declare storage service to manage localDB & cookies.
     */
    function mainController($scope, storageManager){

        // Declare storage manager.
        // Now you may use one of the existing methods.
        $scope._sm = storageManager;

    }

    // IoC container.
    mainController.$inject = [
        "$scope",
        "utils.storageManager"
    ];

})();