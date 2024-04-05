import gulp from "gulp";
import webpack from "webpack";
import webpackStream from "webpack-stream";

import webpackConfig from "./config/webpack.config.js";
import paths from "./paths.mjs";

const bundleJs = (done) => {
  webpackStream(webpackConfig, webpack)
    .on("error", (e) => {
      done(e);
    })
    .pipe(gulp.dest(paths.dist.js))
    .on("end", done);
};

export { bundleJs };
