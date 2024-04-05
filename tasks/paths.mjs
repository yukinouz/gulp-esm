const paths = {
  src: {
    pug: ["./src/pages/**/*.pug", "!./src/pages/**/_*.pug"],
    scss: "src/scss/**/*.scss",
    img: "src/img/*",
  },
  dist: {
    pug: "dist",
    scss: "dist/css",
    img: "dist/img",
  },
};

export default paths;
