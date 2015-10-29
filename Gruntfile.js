module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: 'src/*.js',
                tasks: ['requirejs:compile', 'requirejs:copy']
            }
        },
        requirejs: {
            compile: {
                options: {
                    name: "jquery.autofocus",
                    baseUrl: "src",
                    paths: {
                        "jquery": "empty:"
                    },
                    out: "dist/jquery.autofocus.min.js",
                    optimize: "uglify2",
                    generateSourceMaps: true,
                    preserveLicenseComments: false
                }
            },
            copy: {
                options: {
                    name: "<%= requirejs.compile.options.name %>",
                    baseUrl: "<%= requirejs.compile.options.baseUrl %>",
                    paths: "<%= requirejs.compile.options.paths %>",
                    out: "dist/jquery.autofocus.js",
                    optimize: "none",
                    generateSourceMaps: false,
                    preserveLicenseComments: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
};