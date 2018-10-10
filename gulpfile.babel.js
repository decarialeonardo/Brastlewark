import gulp from 'gulp';
import ts from 'gulp-typescript';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import jade from 'gulp-jade';
//import webpackConfig from './webpack.config';
import templateCache from './gulp-tasks/template-cache';

const PATHS = {
  server: './src/server/',
  vendors: './node_modules',
  tsconfig: './src/server/tsconfig.json'
};

gulp.task('build:server:code', done => {
  const tsProject = ts.createProject(PATHS.tsconfig);
  return tsProject
    .src()
    .pipe(tsProject())
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
    stdout: true,
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

gulp.task('build:client:typescript', done => {
  const tsProject = ts.createProject('./src/client/tsconfig.json');
  return tsProject
    .src()
    .pipe(tsProject())
    .on('error', function(error, callback) {
      console.error('[TypeScript] Error:', error.stack);
      this.emit('end');
    })
    .pipe(gulp.dest('build/dist/'))
    .on('end', done);
});

gulp.task('build:client:jade', done => {
  return gulp.src('./src/client/app/**/*.jade')
    .pipe(jade({
      locals: {}
    }))
    .pipe(gulp.dest('build/dist/'))
    .on('end', done);
});

//gulp.task('build:client:vendors', gulp.series('build:client:webpack','build:client:uglify'));
//gulp.task('build:client:vendors', gulp.series('build:client:webpack'));
gulp.task('build-client', gulp.series('build:client:typescript', templateCache({gulp}),'build:client:jade'));