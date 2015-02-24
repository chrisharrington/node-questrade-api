var gulp = require("gulp"),
	browserify = require("gulp-browserify"),
	rename = require("gulp-rename");
 
gulp.task("scripts", function() {
    return gulp.src("./client/script/init.js")
        .pipe(browserify({ debug: true, transform: ["reactify"], paths: ["./node_modules", "./client", "./client/script"] }))
		.pipe(rename("bundle.js"))
        .pipe(gulp.dest("./client/"));
});