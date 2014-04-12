//http://diveintohtml5.info/offline.html#network
module.exports = {
    generate: {
        options: {
            basePath: 'builds/website',
            cache: [],
            network: ['http://*', 'https://*'],
            fallback: [],
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/offline.html#concept-appcache-mode-prefer-online
            preferOnline: false,
            verbose: false,
            //invalidation:
            timestamp: true,
            hash: true
        },
        src: [
            '*.html',
            'img/*.ico',
            'img/*.png',
            'js/**/*.js',
            'lib/**/*.css'
        ],
        dest: 'builds/website/manifest.appcache'
    }
};
