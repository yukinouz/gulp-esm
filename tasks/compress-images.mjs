import gulp from "gulp";
import imagemin from "gulp-imagemin";
import paths from "./paths.mjs";

const compressImages = (done) => {
  return gulp
    .src(paths.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist.img))
    .on("end", done);
};

export { compressImages };
