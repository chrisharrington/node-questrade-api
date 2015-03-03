var gulp = require("gulp"),
	watch = require("gulp-watch");

require("require-dir")("./gulp");

gulp.task("watch", ["script-dev", "style-dev"], function() {
    watch("script/**/*.js", function() {
        gulp.start("script-dev");
    });
	
	watch(["style/**/*.less", "style/**/*.css"], ["style"], function() {
		gulp.start("style-dev");
	});
});