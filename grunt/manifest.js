module.exports = {
    main: {
      options: {
        basePath: 'builds/app',
        cache: [
            '<%= pkg.timestamp %>'
        ],
        network: ['http://*', 'https://*'],
        exclude: [],
        preferOnline: true,
        verbose: true,
        timestamp: true
      },
      src: [
        '*.html',
        'css/**/*.css',
        'img/**/*.*',
        'lib/**/*.js'
      ],
      dest: 'builds/app/manifest.appcache'
    }
};