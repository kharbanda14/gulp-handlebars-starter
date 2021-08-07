const through2 = require("through2");
const path = require("path");
const hbs = require("handlebars");

module.exports = {
  partials() {
    return through2.obj(function (file, _, cb) {
      const fileName = path.relative(
        path.join(process.cwd(), "src/partials"),
        file.history[0]
      );

      const partialName = fileName
        .slice(0, -file.extname.length)
        .replace(/[ -]/g, "_")
        .replace(/\\/g, "/");

      hbs.registerPartial(partialName, file.contents.toString());

      cb(null, file);
    });
  },

  build(data = {}) {
    return through2.obj(function (file, _, cb) {
      if (file.isBuffer()) {
        file.contents = Buffer.from(
          hbs.compile(file.contents.toString())(data)
        );
        file.extname = ".html";
      }
      cb(null, file);
    });
  },
};
