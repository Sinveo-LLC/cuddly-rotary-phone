const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const paths = {
  html: {
    src: 'src/*.html',
    dest: 'docs/'
  }
};

function includeHTML() {
  return gulp.src(paths.html.src)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.html.dest));
}

// Export the task
exports.html = includeHTML;
exports.watch = watchFiles;

function watchFiles() {
  gulp.watch(['src/*.html', 'src/partials/*.html'], includeHTML);
}

// Define default task that runs the html task and then starts watching
exports.default = gulp.series(includeHTML, watchFiles);