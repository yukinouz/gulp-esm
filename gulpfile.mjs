import { parallel } from "gulp";
import { compileSass } from "./tasks/compile-sass.mjs";

export const build = parallel(compileSass);
export default build;
