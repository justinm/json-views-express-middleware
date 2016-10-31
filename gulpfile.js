var gulp = require('gulp');
var mocha = require('gulp-mocha');
var ts = require('gulp-typescript');
var istanbul = require('gulp-istanbul');

function getTestStream() {
  return gulp.src(['dist/test/**_test.js'], {read: false});
}

gulp.task('coverage', function() {
  return gulp.src([
    '**/*.js',
    '!**/test/**',
    '!gulpfile.js',
    '!dist/coverage/**',
    '!node_modules/**'
  ])
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', [ 'coverage' ], function() {
  return getTestStream()
    .pipe(mocha({ reporter: 'spec' }))
    .pipe(istanbul.writeReports({
      reporters: [ 'lcov', 'text' ],
      dir: './dist/coverage'
    }));
});

gulp.task('build', function() {
  var tsProject = ts.createProject('tsconfig.json');
  var tsResult = tsProject.src()
    .pipe(tsProject());

  tsResult.js.pipe(gulp.dest('dist'));
});
