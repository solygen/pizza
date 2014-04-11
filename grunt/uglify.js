module.exports = {
    options: {
        banner: '/* <%= pkg.name %>.<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) <%= pkg.repository.url %> */'
    },
    dist: {
        src: ['src/js/pizza.js'],
        dest: 'builds/website/js/pizza.js'
    }
};
