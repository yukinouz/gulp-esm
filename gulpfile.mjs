import gulp from "gulp";

import { buildServer, browserReload } from "./tasks/browser-sync.mjs";
import { bundleJs } from "./tasks/bundle-js.mjs";
import { clean as del } from "./tasks/clean.mjs";
import { compilePug } from "./tasks/compile-pug.mjs";
import { compileSass } from "./tasks/compile-sass.mjs";
import { compressImages } from "./tasks/compress-images.mjs";
import { webpJpg, webpPng } from "./tasks/generate-webp.mjs";
import paths from "./tasks/paths.mjs";

const watchFiles = () => {
  gulp.watch(paths.src.scss, gulp.series(compileSass, browserReload));
  gulp.watch(paths.src.js, gulp.series(bundleJs, browserReload));
  gulp.watch(paths.src.pug, gulp.series(compilePug, browserReload));
};

const build = gulp.parallel(
  compileSass,
  compilePug,
  bundleJs,
  gulp.series(compressImages, gulp.parallel(webpJpg, webpPng)),
);

// 名前付きエクスポート;
export { build, del };

// デフォルトエクスポート
export default gulp.parallel(buildServer, watchFiles);
