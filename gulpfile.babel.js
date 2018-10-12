import gulp from 'gulp';
import ts from 'gulp-typescript';
import nodemon from 'gulp-nodemon';
import jade from 'gulp-jade';
import sass from 'gulp-sass';
import combineMq from 'gulp-combine-mq';
import csso from 'gulp-csso';
import concat from 'gulp-concat';
import order from 'gulp-order';
import print from 'gulp-print';
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

gulp.task('build:client:styles', done => {
	return gulp
		.src('./src/client/scss/main.scss')
		.pipe(sass())
		.pipe(combineMq())
		.pipe(csso())
    .pipe(gulp.dest('build/dist/'))
    .on('end', done);
});

gulp.task('build:client:scripts', done => {
	console.log('concat app js files');

  return gulp
    .src(['build/dist/**/*.js','!build/dist/libs.js','!build/dist/app.templates.js','!build/dist/brastlewark-pkg.js'])
		.pipe(order([
      'build/dist/**/!(app.module)*.js',
      'build/dist/app.module.js'
    ], { base: './' } ))
    .pipe(print())
		.pipe(concat('brastlewark-pkg.js'))
    .pipe(gulp.dest('build/dist/'))
    .on('end', done);
});

gulp.task('build:vendors:scripts', done => {
	console.log('concat vendors js files');

  return gulp
    .src(['node_modules/angular/angular.min.js'])
    .pipe(concat('libs.js'))
    .pipe(print())
    .pipe(gulp.dest('build/dist/'))
    .on('end', done);
});



gulp.task('build-client', gulp.series('build:client:typescript', templateCache({gulp}),'build:client:jade','build:client:styles','build:client:scripts','build:vendors:scripts'));