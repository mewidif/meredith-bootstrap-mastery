import gulp from 'gulp';

function html() {
  return gulp
    .src(['src/*.html'])
    .pipe(gulp.dest('./docs'));
}

gulp.task('html', html);

export default html;
