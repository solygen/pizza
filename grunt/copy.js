module.exports = {
    main: {
        files: [
            //images
            {
                expand: true,
                cwd: 'src/img/',
                src: '*',
                dest: 'builds/website/img/'
            },
            //all files from root
            {
                expand: true,
                cwd: 'src/',
                src: '.*',
                dest: 'builds/website/'
            }
        ]
    }
};
