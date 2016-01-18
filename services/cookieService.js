(function(){

    "use strict";

    angular
        .module("utils")
        .service("utils.cookieService", cookieService);

    /**
     * Declare cookie service to work with cookies with CRUD functionality.
     */
    function cookieService(){

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
         * @returns {String | Undefined}
         */
        function getCookie(name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
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
         */
        function setCookie(cname, cvalue) {
            document.cookie = cname + "=" + cvalue;
        }

    }

})();