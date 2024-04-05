const paths = {
  src: {
    pug: ["./src/pages/**/*.pug", "!./src/pages/**/_*.pug"],
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    img: "src/img/*",
  },
  dist: {
    pug: "dist",
    scss: "dist/css",
    js: "dist/js",
    img: "dist/img",
  },
};

export default paths;
