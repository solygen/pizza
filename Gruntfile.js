module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    pkg.timestamp = new Date().getTime();

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({

        pkg: pkg,

        jshint:  require('./grunt/jshint.js'),
        concat: require('./grunt/concat.js'),
        copy: require('./grunt/copy.js'),
        uglify: require('./grunt/uglify.js'),
        htmlmin: require('./grunt/htmlmin.js'),
        manifest: require('./grunt/manifest.js'),
        //cssmin: require('./grunt/cssmin.js'),
        clean: ["./vendors"],
        watch: {
            files: '<%= jshint.files %>',
            tasks: 'jshint'
        }
    });

    // Load the plugins that provide the tasks we specified in package.json.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-manifest');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');

    //after installing latest shit with bower run this task to copy relevant files to lib
    grunt.registerTask('build:libs', ['copy:update'/*, 'clean'*/]);

    //create build for website
    grunt.registerTask('build:website', ['copy:website', 'htmlmin'/*, 'manifest:main'*/]);

    // is called without any further parameter.
    grunt.registerTask('default', ['concat:build', 'uglify']);
    grunt.registerTask('build', [/*'jshint',*/ 'uglify', 'copy', 'build:website']);


};