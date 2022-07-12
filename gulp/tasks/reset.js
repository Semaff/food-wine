/*
  Plugin for deleting folders and files
  - npm i -D del
*/
import del from 'del';

export const reset = () => {
    return del(app.path.clean);
}