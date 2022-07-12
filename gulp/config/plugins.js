/*
  Process errors - npm i -D gulp-plumber
  Notifications (hints) - npm i -D gulp-notify
  Local Server - npm i -D browser-sync
  Checks for files to be newer than the corresponding ones - npm i -D gulp-newer
  Conditionally directed - npm i -D gulp-if
*/
import plumber from "gulp-plumber";
import browsersync from "browser-sync"
import newer from "gulp-newer"
import ifPlugin from "gulp-if"

// export plugins
export const plugins = {
    plumber: plumber,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
}