// Base paths
const paths = {
  sass: './src/sass/**/*.scss',
  css: './dist/css',
  js: ['./src/js/**/*.js', '!./src/js/modules/**/*.js'],
  jsDist: './dist/js',
  img: './src/img/**/*',
  imgDist: './dist/img',
  html: ['./src/**/*.html', '!./src/html/**/*.html'],
  dist: './dist',
};

const config = {
  cssFileName: 'style',
  jsFileName: 'script',
};

module.exports = {
  paths,
  config,
};
