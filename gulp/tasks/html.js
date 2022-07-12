/*
  Collecter for html files (collect all the html files and import them into index.html)
  - npm i -D panini

  Will create special keys for every file for browser to forbid cache files
  - npm i -D gulp-version-number
*/
import panini from "panini";
import webpHtmlNosvg from "gulp-webp-html-nosvg";

export const html = (cb) => {
    panini.refresh();
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber())
        .pipe(panini({
            root:       app.path.srcFolder,
            layouts:    app.path.srcFolder + '/layouts/',
            partials:   app.path.srcFolder + '/partials/',
            helpers:    app.path.srcFolder + '/helpers/',
            data:       app.path.srcFolder + '/data/'
        }))
        .pipe(webpHtmlNosvg())
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());

    cb()
}