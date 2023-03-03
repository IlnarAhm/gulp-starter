var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(done) {
    gulp.src("./src/assets/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("./src/assets/css"))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("./src/assets/sass/*.sass", gulp.series('sass'));
    gulp.watch("./src/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
    gulp.watch("./src/assets/sass/*.sass").on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('default', gulp.series('sass', 'serve'));