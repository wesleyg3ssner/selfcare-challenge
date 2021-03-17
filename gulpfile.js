const { src, dest, task } = require('gulp');
const imagemin = require('gulp-imagemin');

task('buildImg', () => {
    return src('./assets/*')
        .pipe(imagemin())
        .pipe(dest('assets/'))
})