const { src, dest, series, task, watch } = require("gulp");
const { partials, build } = require("./gulp-hbs");
const cleanup = require("gulp-clean");
const browserSync = require("browser-sync").create();

function registerPartials() {
  return src("src/partials/**/*.hbs").pipe(partials());
}

function cleanBuild() {
  return src("build").pipe(cleanup());
}

function buildHbs() {
  return src("src/views/**/*.hbs")
    .pipe(build(require("./global-variables.json")))
    .pipe(dest("build"));
}

function copyAssets() {
  return src("src/assets/**/*").pipe(dest("build/assets"));
}

task("watch", (cb) => {
  browserSync.init({
    server: "./build",
  });

  watch(
    "src/**/*",
    { ignoreInitial: false },
    series([cleanBuild, copyAssets, registerPartials, buildHbs])
  ).on("change", browserSync.reload);
  cb();
});

task("build", (cb) => {
  series([cleanBuild, copyAssets, registerPartials, buildHbs]);
  cb();
});

exports.default = series([cleanBuild, copyAssets, registerPartials, buildHbs]);
