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