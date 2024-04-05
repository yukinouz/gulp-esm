import gulp from "gulp";
import { compileSass } from "./tasks/compile-sass.mjs";
import { compressImages } from "./tasks/compress-images.mjs";
import { webpJpg, webpPng } from "./tasks/generate-webp.mjs";
import { clean as del } from "./tasks/clean.mjs";
import { buildServer, browserReload } from "./tasks/browser-sync.mjs";
import paths from "./tasks/paths.mjs";

const watchFiles = () => {
  gulp.watch(paths.src.scss, gulp.series(compileSass, browserReload));
};

const build = gulp.parallel(
  compileSass,
  gulp.series(compressImages, gulp.parallel(webpJpg, webpPng))
);

// 名前付きエクスポート;
export { build, del };

// デフォルトエクスポート
export default gulp.parallel(buildServer, watchFiles);
