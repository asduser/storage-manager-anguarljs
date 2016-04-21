(function () {

    "use strict";

    angular
        .module("ui.storageManager")
        .service("storageManager.localDBService", localDBService);

    /**
     * Declare localDB service to work with cookies with CRUD functionality.
     * @param {Object} SMHelper
     */
    function localDBService(SMHelper) {

        this.delete = remove;
        this.deleteAll = removeAll;
        this.get = getValue;
        this.getAll = getAll;
        this.set = specify;

        /**
         * Return value from LS by key or return false if not found.
         * @param i
         * @returns {*}
         */
        function getValue(i){
            return SMHelper.getValueOrNull(localStorage.getItem(i));
        }

        /**
         * Return all existing cookies inside current URL.
         * @returns {Array}
         */
        function getAll(){
            var result = [];
            for ( var i = 0, len = localStorage.length; i < len; ++i ) {
                var key = localStorage.key(i),
                    value = getValue(key);
                if (getValue(key)) {
                    result.push(key + "=" + value);
                }
            }
            return result;
        }

        /**
         * Delete specified value from localStorage.
         * @param key
         */
        function remove(key){
            localStorage.removeItem(key);
        }

        /**
         * Clear localStorage.
         */
        function removeAll(){
            localStorage.clear();
        }

        /**
         * Set a new value into LS or return false if unavailable.
         * @param key
         * @param value
         * @returns {boolean}
         */
        function specify(key, value){
            if (value && key) {
                if (typeof value == "object") {
                    localStorage.setItem(key, JSON.stringify(value));
                } else {
                    localStorage.setItem(key, value);
                }
                return true;
            }
            return false;
        }

    }

    // IoC container.
    localDBService.$inject = [
        "storageManager.SMHelper"
    ];

})();