import gulp from "gulp";
import pug from "gulp-pug";
import paths from "./paths.mjs";

const compilePug = (done) => {
  gulp
    .src(paths.src.pug)
    .pipe(
      pug({
        pretty: true,
        basedir: "src/pug",
      })
    )
    .pipe(gulp.dest(paths.dist.pug))
    .on("finish", done);
};

export { compilePug };
