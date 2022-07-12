/*
  Install SASS and converter for SASS - npm i -D gulp-sass sass

  Rename SCSS files - npm i -D gulp-rename
*/
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

/*
  Compress exported CSS file - npm i -D gulp-clean-css

  Export WEBP images
  - npm i -D gulp-webpcss
  - npm i -D webp-converter@2.2.3

  Adding vendor prefixes - npm i -D gulp-autoprefixer

  Group Media Queries - npm i -D gulp-group-css-media-queries

  Automatically formats your style to be consistent and easy to read
*/
import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import cssbeautify from "gulp-cssbeautify";

const sass = gulpSass(dartSass);

export const css = (cb) => {
    return app.gulp.src(app.path.src.css, {sourcemaps: true})
            .pipe(app.plugins.plumber())
            .pipe(sass({
                outputStyle: "expanded",
                includePaths: './node_modules/',
            }))
            .pipe(groupCssMediaQueries())
            .pipe(webpcss({
                webpClass: ".webp",
                noWebpClass: ".no-webp"
            }))
            .pipe(autoprefixer({
                grid: "autoplace",
                cascade: true
            }))
            
            .pipe(cssbeautify())
            .pipe(app.gulp.dest(app.path.build.css))
            
            .pipe(cleanCss())
            .pipe(rename({
                suffix: ".min",
                extname: ".css"
            }))
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(app.plugins.browsersync.reload({stream: true}));

    cb();
}