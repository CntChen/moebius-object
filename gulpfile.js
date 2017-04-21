const gulp = require('gulp');
const exec = require('child_process').exec;

const srcPath = './src/*';
const testPath = './test/index.js';
gulp.task('test', function() {
  const shellCommands = [
    `node ${testPath}`,
    ].join(' && ');
  exec(shellCommands, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error:\n${error}`);
      return;
    }
    
    if(stderr){
      console.log(`stderr:\n${stderr}`);
      return;
    }

    console.log(`stdout:\n${stdout}`);
  });
});

gulp.task('watch', function() {
  console.log('change');
  gulp.watch(srcPath, ['test']);
  gulp.watch(testPath, ['test']);
});