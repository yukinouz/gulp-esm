import gulp from "gulp";
import * as dartSass from "sass";
const sass = gulpSass(dartSass);
import gulpSass from "gulp-sass";
import gulpPostCss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import paths from "./paths.mjs";
const postcssPlugins = [autoprefixer(), cssnanoPlugin()];

const compileSass = (done) => {
  return gulp
    .src(paths.src.scss, { sourcemaps: true })
    .pipe(sass({ includePaths: ["src/scss", "node_modules"] }))
    .pipe(gulpPostCss(postcssPlugins))
    .pipe(gulp.dest(paths.dist.scss, { sourcemaps: "sourcemaps" }))
    .on("end", done);
};

export { compileSass };
