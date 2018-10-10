import angularTemplatecache from 'gulp-angular-templatecache';

const config = {
  file: 'app.templates.ts',
  options: {
    standalone: true,
    module: 'App',
    templateHeader:`(function() { angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {`,
    templateFooter: '}])})();',
    transformUrl: function (url) {
      //return `./${url.match(/([^\/]+)(?=\.\w+$).html/)[0]}`;
      return url;
    }
  }
};

export default ({gulp}) => {
  return (done) => {
    gulp.src('./src/client/app/**/*.html')
      .pipe(angularTemplatecache(config.file, config.options))
      .pipe(gulp.dest('./src/client/app'));
    done();
  }
};
