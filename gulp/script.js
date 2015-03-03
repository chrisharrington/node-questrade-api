var browserify = require("browserify"),
	gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	source = require("vinyl-source-stream"),
	buffer = require("vinyl-buffer");

gulp.task("script-dev", function() {
	script(false);
});

gulp.task("script-prod", function() {
	script(true);
});

function script(isProd) {
	var stream = browserify({ debug: !isProd, insertGlobals: false, paths: ["./node_modules", "./", "./script"] })
		.add("./script/init.js")
		.transform("reactify")
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(buffer());
	
	if (isProd)
		stream = stream.pipe(uglify());
	
	return stream.pipe(gulp.dest("./"));
};