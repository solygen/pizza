module.exports = {
    main: {
        files: [
            {
                expand: true,
                cwd: 'src/img/',
                src: '*',
                dest: 'builds/website/img/'
            },
            {
                expand: true,
                cwd: 'src/',
                src: '.*',
                dest: 'builds/website/'
            }
        ]
    }
};
