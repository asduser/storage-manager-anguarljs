(function(){

    "use strict";

    angular
        .module("FE.utils")
        .factory("utils.SMHelper", SMHelper);

    function SMHelper(){

        return {

            getValueOrNull: getValueOrNull

        };

        /**
         * Return value from current storage by key or return false if not found.
         * @param _value
         * @returns {*}
         */
        function getValueOrNull(_value){
            var result, val = _value;
            if (val) {
                if (typeof val == "string") {
                    try {
                        result = JSON.parse(val);
                    } catch (e) {
                        result = val;
                    }
                } else {
                    result = val;
                }
                return result;
            }
            return false;
        }

    }

    // IoC container.
    SMHelper.$inject = [];

})();