(function(){

    "use strict";

    angular
        .module("ui.storageManager", []);

})();
(function(){

    "use strict";

    angular
        .module("ui.storageManager")
        .service("storageManager.cookieService", cookieService);

    /**
     * Declare cookie service to work with cookies with CRUD functionality.
     * @param {Object} SMHelper
     */
    function cookieService(SMHelper){

        this.delete = deleteCookie;
        this.deleteAll = deleteAll;
        this.get = getCookie;
        this.getAll = getAll;
        this.set = setCookie;

        /**
         ** Delete existing cookie from storage.
         * @param {String} name - cookie's name
         */
        function deleteCookie(name) {
            setCookie(name, "");
        }

        /**
         * Remove all existing cookies at once.
         */
        function deleteAll(){
            var cookies = document.cookie.split(";");
            for(var i=0; i < cookies.length; i++) {
                var equals = cookies[i].indexOf("=");
                var name = equals > -1 ? cookies[i].substr(0, equals) : cookies[i];
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }

        /**
         ** Get cookie from storage.
         * @param {String} name - cookie's name
         * @returns {String | Boolean}
         */
        function getCookie(name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));

            /*var result, val = matches ? decodeURIComponent(matches[1]) : null;
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
            return false;*/

            return SMHelper.getValueOrNull( matches ? decodeURIComponent(matches[1]) : null );
        }

        /**
         * Return all existing cookies inside current URL.
         * @returns {Array}
         */
        function getAll() {
            var theCookies = document.cookie.split(';');
            var result = [];
            for (var i = 1 ; i <= theCookies.length; i++) {
                result.push(theCookies[i-1]);
            }
            return result.length > 0 ? result : null;
        }

        /**
         ** Specifies a new cookie into storage.
         * @param {String} cname - cookie's name
         * @param {String} cvalue - cookie's value
         * @returns {Boolean}
         */
        function setCookie(cname, cvalue) {
            if (cvalue && cname) {
                document.cookie = cname + "=" + cvalue;
                return true;
            }
            return false;
        }

    }

    // IoC container.
    cookieService.$inject = [
        "storageManager.SMHelper"
    ];

})();
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
(function(){

    "use strict";

    angular
        .module("ui.storageManager")
        .factory("storageManager.SMHelper", SMHelper);

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