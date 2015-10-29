/**
 * Created by Frost on 2015-09-22.
 */

require.config({
    baseUrl: "",
    paths: {
        "jquery": "//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.20/require.min.js",
        "jquery.autofocus": "../dist/jquery.autofocus.min"
    },
    shim: {
        "jquery.autofocus": {
            deps: ["jquery"]
        }
    }
});

require(["jquery", "jquery.autofocus"], function ($) {
    $(function () {
        $(".input").on("click", function () {
            $("<label>Added input: <input type=\"text\" autofocus=\"autofocus\"/></label>")
                .insertAfter("label:last-of-type")
                .autofocus();
        });

        $(".textarea").on("click", function () {
            $("<label>Added textarea: <textarea autofocus=\"autofocus\"/></textarea></label>")
                .insertAfter("label:last-of-type")
                .autofocus();
        });
    });
});