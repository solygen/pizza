module.exports = {
      dist: {
        files: {
          'src/bootstrap.min.css': ['src/index.html']
        },
        options: {
          ignore: ['.panel', '.panel-default', '.panel-heading', '.panel-body', '.container']
        }
      }

};
