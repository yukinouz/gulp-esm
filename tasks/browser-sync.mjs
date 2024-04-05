import browserSync from "browser-sync";

const buildServer = (done) => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
    open: false,
    watchOptions: {
      debounceDelay: 1000,
    },
  });
  done();
};

const browserReload = (done) => {
  browserSync.reload();
  done();
};

export { buildServer, browserReload };
