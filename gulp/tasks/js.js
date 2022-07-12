/*
  Gulp can't collect all the js files and compile them into 1, so we need to use webpack
  - npm i -D webpack webpack-stream

  - npm install -D babel-loader @babel/core @babel/preset-env webpack
*/
import webpack from "webpack-stream";

export const js = (cb) => {
    return app.gulp.src(app.path.src.js, {sourcemaps: true})
        .pipe(app.plugins.plumber())
        .pipe(webpack({
            mode: "development",
            output: {
                filename: "app.min.js"
            },
            module: {
                rules: [
                    {
                        test: /\.(js)$/,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                    }
                ]
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.reload({stream: true}));

    cb()
}