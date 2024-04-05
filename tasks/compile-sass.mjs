import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import gulp from "gulp";
import gulpPostCss from "gulp-postcss";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";

import paths from "./paths.mjs";

const sass = gulpSass(dartSass);
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
