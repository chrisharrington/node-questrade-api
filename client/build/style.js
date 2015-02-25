var gulp = require("gulp"),
	less = require("gulp-less"),
	concat = require("gulp-concat"),
	minify = require("gulp-minify-css"),
	sourcemaps = require("gulp-sourcemaps");

gulp.task("style-dev", function() {
	return style(false);
});

gulp.task("style-prod", function() {
	return style(true);
});

function style(isProd) {
	var stream = gulp.src(["./client/style/**/*.css", "./client/style/**/*.less"]);
	
	if (!isProd) {
		stream = stream.pipe(sourcemaps.init())
			.pipe(less())
			.pipe(minify({ keepSpecialComments: 0 }))
			.pipe(sourcemaps.write());
	} else {
		stream = stream
			.pipe(less())
			.pipe(minify({ keepSpecialComments: 0 }));
	}
	
	return stream
		.pipe(concat("bundle.css"))
		.pipe(gulp.dest("./client/"));
}