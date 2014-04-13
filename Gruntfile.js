module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    pkg.timestamp = new Date().getTime();

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({
        pkg: pkg,
        clean: require('./grunt/clean.js'),
        copy: require('./grunt/copy.js'),
        cssmin: require('./grunt/cssmin.js'),
        htmlmin: require('./grunt/htmlmin.js'),
        jshint: require('./grunt/jshint.js'),
        manifest: require('./grunt/manifest.js'),
        smoosher: require('./grunt/smoosher.js'),
        uglify: require('./grunt/uglify.js'),
        uncss: require('./grunt/uncss.js')
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-smoosher');
    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-uncss');

    // is called without any further parameter.
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', [
        //check jss
        'jshint',
        //clean old build
        'clean',
        //copy root and img files
        'copy',
        //remove unused bootstrap styles
        'uncss',
        //minify html/js/css
        'htmlmin',
        'uglify',
        'cssmin',
        //add external js/css inline
        'smoosher',
        'clean:tmp',
        //create manifest file
        'manifest'
    ]);
};
