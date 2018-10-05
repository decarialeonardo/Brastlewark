import gulp from 'gulp';
import ts from 'gulp-typescript';
import nodemon from 'gulp-nodemon';
import ts_import from 'gulp-typescript-path-resolver';

const PATHS = {
  server: './src/server/',
  tsconfig: './src/server/tsconfig.json',
};

gulp.task('build:server:code', done => {
  const tsProject = ts.createProject(PATHS.tsconfig);
  return tsProject
    .src()
    .pipe(tsProject())
    //.pipe(ts_import.tsPathResolver(tsProject.config.compilerOptions))
    .on('error', function(error, callback) {
      console.error('[TypeScript] Error:', error.stack);
      this.emit('end');
    })
    .pipe(gulp.dest('build/server/'))
    .on('end', done);
});

gulp.task('watch:server', done => {
  const stream = nodemon({
    script: 'build/server/bin/www.js',
    env: {
      NODE_ENV: 'local',
    },
    ext: 'ts',
    watch: PATHS.server,
    tasks: ['build:server:code'],
    stdout: false,
  });
  return stream
    .on('restart', () => {
      console.log('Server restarted!');
    })
    .on('crash', () => {
      console.error('Server crashed!\n');
      stream.emit('restart', 10);
    })
    .on('start', () => {
      console.log('Server Started');
	})
    .on('quit', () => {
      done();
    });
});

gulp.task('dev:server', gulp.series('build:server:code', 'watch:server'));


import templateCache from './gulp-tasks/template-cache';
gulp.task('build-client',templateCache({gulp}));