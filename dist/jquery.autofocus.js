/**
 * Created by Frost on 2015-09-19.
 */

(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define('jquery.autofocus',["jquery"], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    /**
     *
     * @type {{autofocus: Function}}
     */
    var autofocus = {
        /**
         *
         * @param $target
         * @returns {autofocus}
         */
        autofocus: function ($target) {
            var $autofocus;

            if ($target.is("[autofocus=autofocus]")) {
                $autofocus = $target;
            } else {
                $autofocus = $target.find("[autofocus=autofocus]").first();
            }

            // TODO: figure why sometimes there is need to delay focusing
            /* setTimeout(function () {
                $autofocus.focus();
            }, 300); */

            $autofocus.focus();

            return this;
        }
    };

    /**
     *
     * @returns {$.fn}
     */
    $.fn.autofocus = function () {
        autofocus.autofocus(this);

        return this;
    };

    return autofocus;
}));
