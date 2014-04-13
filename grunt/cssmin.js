module.exports = {
    minify: {
        files: [{
            expand: true,
            cwd: 'src/lib/bootstrap/css/',
            src: ['*.css'],
            dest: 'builds/website/lib/bootstrap/css/'
        },
        {
            expand: true,
            cwd: 'src/css/',
            src: ['*.css'],
            dest: 'builds/website/css/'
        }]
    }
};
