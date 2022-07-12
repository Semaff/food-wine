import webp from "gulp-webp";
import imagemin from "gulp-imagemin"

export const images = (cb) => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.plumber())
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(webp())
        
        // check if images have been uploaded
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.gulp.src(app.path.src.images))
        .pipe(app.plugins.newer(app.path.build.images))

        .pipe(
            app.plugins.if(
                app.isBuild,
                imagemin({
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    interlaced: true,
                    optimizationLevel: 3 // 0 to 7
                })
            )
        )

        // upload them
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.reload({stream: true}));
    
    cb();
}