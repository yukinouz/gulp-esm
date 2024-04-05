import { src, dest } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import paths from "./paths.mjs";

const sass = gulpSass(dartSass);

const compileSass = () => {
  return src(paths.src.scss, { sourcemaps: true })
    .pipe(sass({ includePaths: ["src/scss", "node_modules"] }))
    .pipe(dest(paths.dist.scss, { sourcemaps: "sourcemaps" }));
};

export { compileSass };
