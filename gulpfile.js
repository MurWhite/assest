let gulp = require('gulp');
let pump = require('pump');
let del = require('del');
let sass = require('gulp-sass');
let distDir = './docs',
    sassSrc = './raw/*.sass', sassDist = `${distDir}/css`;

gulp.task('default', ['clean', 'sass'], () => {
  console.log('编译完成')
});

gulp.task('sass', _ => {
  pump([
    gulp.src(sassSrc),
    sass.sync({outputStyle: 'compressed'}).on('error', sass.logError),
    gulp.dest(sassDist)
  ], _);
});
gulp.task('sass:clean', _ => del(sassDist));
gulp.task('sass:watch', _ => {
  gulp.watch(sassSrc, ['sass']);
});


gulp.task('clean', _ => del(distDir));

gulp.task('watch', ['sass:watch']);
