import gulp from "gulp";
import { compileSass } from "./tasks/compile-sass.mjs";
import { compressImages } from "./tasks/compress-images.mjs";
import { webpJpg, webpPng } from "./tasks/generate-webp.mjs";
import { clean as del } from "./tasks/clean.mjs";

const build = gulp.parallel(
  compileSass,
  gulp.series(compressImages, gulp.parallel(webpJpg, webpPng))
);

// 名前付きエクスポート;
export { build, del };

// デフォルトエクスポート
export default build;
