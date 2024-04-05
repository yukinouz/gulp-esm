import gulp from "gulp";
import { compileSass } from "./tasks/compile-sass.mjs";
import { compressImages } from "./tasks/compress-images.mjs";
import { webpJpg, webpPng } from "./tasks/generate-webp.mjs";

export const build = gulp.parallel(
  compileSass,
  gulp.series(compressImages, gulp.parallel(webpJpg, webpPng))
);
export default build;
