module.exports = {
      dist: {
        files: {
            'builds/website/lib/bootstrap/css/bootstrap.min.css': ['src/index.html'],

        },
        options: {
            ignore: [
                '.panel',
                '.panel-default',
                '.panel-heading',
                '.panel-body',
                '.container',
                '.col-xs-2',
                '.col-xs-3',
                '.col-xs-4'
            ]
        }
    }
};
