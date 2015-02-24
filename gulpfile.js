var gulp = require("gulp"),
	watch = require("gulp-watch");

require("require-dir")("./client/build");

gulp.task("watch", ["scripts"], function() {
    watch("client/script/**/*.js", function() {
        gulp.start("scripts");
    });
});