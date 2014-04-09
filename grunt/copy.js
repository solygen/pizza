module.exports = {
    main: {
        files: [
                {
                expand: true,
                cwd: 'lib/',
                src: ['<%= pkg.name %>.min.js'],
                dest: 'builds/',
                filter: 'isFile',
                    rename: function(dest, src) {
                        return dest + src.replace('.min.js', '.<%= pkg.version %>.min.js');
                    }
                }
        ],
    },
    // copy relevant vendor files to lib directory (vendor directory is only temporary)s
    update: {
        files: [
                //jQuery
                {
                expand: true,
                cwd: 'vendors/jquery/',
                src: ['jquery.min.js'],
                dest: 'lib/vendors/'
                },
                //font-awesome
                {
                expand: true,
                cwd: 'vendors/font-awesome/css/',
                src: ['font-awesome.min.css'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'vendors/font-awesome/font/',
                src: ['fontawesome-webfont.woff'],
                dest: 'lib/font/'
                },
                //bootstrap
                {
                expand: true,
                cwd: 'vendors/bootstrap/docs/assets/js/',
                src: ['bootstrap.min.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'vendors/bootstrap/docs/assets/css/',
                src: ['docs.css'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'vendors/bootstrap/docs/assets/css/',
                src: ['bootstrap-responsive.css'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'vendors/bootstrap/docs/assets/css/',
                src: ['bootstrap.css'],
                dest: 'lib/vendors/'
                },
                //underscore
                {
                expand: true,
                cwd: 'vendors/underscore/',
                src: ['underscore-min.js'],
                dest: 'lib/vendors/'
                },
                //require.js
                {
                expand: true,
                cwd: 'vendors/requirejs/',
                src: ['require.js'],
                dest: 'lib/vendors/'
                }
        ]
    },
    website: {
        files: [
                {
                expand: true,
                src: ['lib/**'],
                dest: 'builds/app/'
                },
                {
                expand: true,
                src: ['img/*'],
                dest: 'builds/app/'
                },
                {
                expand: true,
                src: ['css/*'],
                dest: 'builds/app/'
                },
                {
                expand: true,
                src: ['*.html'],
                dest: 'builds/app/'
                }
        ]
    }

};