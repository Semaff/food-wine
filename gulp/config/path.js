/*
  Get name of the main folder
*/
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


/*
  Paths (w/fonts)
*/
const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        html:       buildFolder + `/`,
        css:        buildFolder + `/assets/css/`,
        js:         buildFolder + `/assets/js/`,
        images:     buildFolder + `/assets/images/`,
        fonts:      buildFolder + `/assets/fonts/`,
        files:      buildFolder + `/assets/files/`,
    },
    
    src: {
        html:       srcFolder + `/*.html`,
        css:        srcFolder + `/assets/scss/style.scss`,
        js:         srcFolder + `/assets/js/*.js`,
        images:     srcFolder + `/assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
        fonts:      srcFolder + `/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`,
        files:      srcFolder + `/assets/files/**/*.*`,
    },
    watch: {
        html:       srcFolder + `/**/*.html`,
        css:        srcFolder + `/assets/scss/**/*.scss`,
        js:         srcFolder + `/assets/js/**/*.js`,
        images:     srcFolder + `/assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
        fonts:      srcFolder + `/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`,
        files:      srcFolder + `/assets/files/**/*.*`,
    },
    clean:          buildFolder,
    buildFolder:    buildFolder,
    srcFolder:      srcFolder,
    rootFolder:     rootFolder,
    ftp: 'test'
}