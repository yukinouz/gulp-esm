import gulp from "gulp";
import imagemin from "gulp-imagemin";
import changed from "gulp-changed";
import paths from "./paths.mjs";

const compressImages = (done) => {
  return gulp
    .src(paths.src.img)
    .pipe(changed(paths.dist.img))
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist.img))
    .on("end", done);
};

export { compressImages };
