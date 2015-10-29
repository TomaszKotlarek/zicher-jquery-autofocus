/**
 * Created by Frost on 2015-09-19.
 */

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    } else if (typeof exports === "object") {
        // Node, CommonJS-like
        module.exports = factory(require("jquery"));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
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
            // when there is a lot of dom in $target, but still why
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