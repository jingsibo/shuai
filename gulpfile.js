var gulp=require("gulp");
// var sass=require("gulp-sass");

gulp.task("copyHTML",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\guangyu"));
});

gulp.task("copyCSS",function(){
	gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\guangyu\\css"));
});

gulp.task("copyJS",function(){
	gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\guangyu\\js"));	
});

gulp.task("copyIMG",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\guangyu\img"));
});
// gulp.task("copyIMG",function(){
// 	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\guangyu\img1"));
// });

gulp.task("copyPHP",function(){
	gulp.src("php/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\guangyu\\php"));
});

// gulp.task("copySASS",function(){
// 	gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("D:\\project 2.0\\yifutu\\css"));
// });

gulp.task("copyFONT",function(){
	gulp.src("font/**/*").pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\kelunlan\\font"));
});

gulp.task("build",["copyHTML","copyCSS","copyJS","copyIMG","copyPHP","copyFONT"],function(){
	console.log("ok");
});


gulp.task("watchall",function(){
	gulp.watch("*.html",["copyHTML"]);
	gulp.watch("css/**/*",["copyCSS"]);
	gulp.watch("js/**/*",["copyJS"]);
	gulp.watch("img/**/*",["copyIMG"]);
	gulp.watch("font/**/*",["copyFONT"]);
	gulp.watch("php/**/*",["copyPHP"]);
	
});
