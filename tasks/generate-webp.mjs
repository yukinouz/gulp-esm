import gulp from "gulp";
import webp from "gulp-webp";

import paths from "./paths.mjs";

const quality = 85; // default: 75

const webpJpg = (done) => {
  gulp
    .src(`${paths.dist.img}/*.{jpg,jpeg}`, { since: gulp.lastRun(webpJpg) })
    .pipe(
      webp({
        quality: quality,
      }),
    )
    .pipe(gulp.dest(paths.dist.img))
    .on("end", done);
};

const webpPng = (done) => {
  gulp
    .src(`${paths.dist.img}/*.png`, { since: gulp.lastRun(webpPng) })
    .pipe(
      webp({
        quality: quality,
        lossless: true,
      }),
    )
    .pipe(gulp.dest(paths.dist.img))
    .on("end", done);
};

export { webpJpg, webpPng };
