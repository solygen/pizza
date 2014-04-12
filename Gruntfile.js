module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    pkg.timestamp = new Date().getTime();

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({
        pkg: pkg,
        jshint: require('./grunt/jshint.js'),
        copy: require('./grunt/copy.js'),
        uglify: require('./grunt/uglify.js'),
        htmlmin: require('./grunt/htmlmin.js'),
        uncss: require('./grunt/uncss.js'),
        manifest: require('./grunt/manifest.js'),
        clean: ['./website']
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-uncss');

    // is called without any further parameter.
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', ['jshint', 'clean', 'uncss', 'uglify', 'copy', 'manifest']);
};
