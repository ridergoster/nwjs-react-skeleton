var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

var paths = {
  source: {
    dir: './',
    js: './js/app.js',
    html: './main.html',
    package: 'package.json'
  },
  build: {
    dir: './build',
    js: './js/bundle.js'
  },
  watch: {
    js: './js/**/*.js',
    html: './main.html',
    package: './package.json'
  }
}

gulp.task('javascript', function() {
  var b = browserify({
    entries: paths.source.js,
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source(paths.build.js))
    .pipe(gulp.dest(paths.build.dir));
});

gulp.task('html', function() {
  gulp.src(paths.source.html)
    .pipe(gulp.dest(paths.build.dir));
});

gulp.task('package', function() {
  gulp.src(paths.source.package)
    .pipe(gulp.dest(paths.build.dir));
});

gulp.task('watch', function() {
  gulp.watch(paths.watch.js, ['javascript']);
  gulp.watch(paths.watch.html, ['html']);
  gulp.watch(paths.watch.package, ['package']);
});

gulp.task('build', ['javascript', 'html', 'package']);

gulp.task('default', ['build', 'watch']);
