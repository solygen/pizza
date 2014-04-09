module.exports = {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        'builds/app/index.html': 'builds/app/index.html',
        'builds/app/404.html': 'builds/app/404.html'
      }
    }
};