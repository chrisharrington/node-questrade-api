var gulp = require("gulp"),
	watch = require("gulp-watch");

require("require-dir")("./client/build");

gulp.task("watch", ["script-dev", "style-dev"], function() {
    watch("client/script/**/*.js", function() {
        gulp.start("script-dev");
    });
	
	watch(["client/style/**/*.less", "client/style/**/*.css"], ["style"], function() {
		gulp.start("style-dev");
	});
});