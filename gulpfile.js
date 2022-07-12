/*
  Imports

    npm install --save-dev gulp
*/
import gulp from "gulp";
import ghPages from "gulp-gh-pages";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

/*
  Transfer variables into a 'global' variable 'app'
*/
global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    path: path,
    plugins: plugins,
    gulp: gulp
};


/*
  Import Tasks
*/
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { css } from "./gulp/tasks/css.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// watch for changes in the folder 'src'
function watcher() {
    // gulp.watch([path], [task])
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.fonts, fonts);
};

const mainTasks = gulp.parallel(copy, html, css, js, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, fonts, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// export scenarios
export { dev };
export { build };
export { deployZip };
export { deployFTP };

// make a scenario by default
gulp.task('default', dev);
gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
        .pipe(ghPages())
});