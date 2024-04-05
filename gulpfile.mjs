import gulp from "gulp";
import { compileSass } from "./tasks/compile-sass.mjs";
import { compressImages } from "./tasks/compress-images.mjs";

export const build = gulp.parallel(compileSass, compressImages);
export default build;
