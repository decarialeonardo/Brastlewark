import angularTemplatecache from 'gulp-angular-templatecache';

const config = {
  file: 'root.templates.ts',
  options: {
    standalone: true,
    module: 'root.templates',
    
    templateHeader:`(function() { angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {`,
    templateFooter: '}])})();',
    transformUrl: function (url) {
      return `./${url.match(/([^\/]+)(?=\.\w+$).html/)[0]}`;
    }
  }
};

export default ({gulp}) => {
  return (done) => {
    gulp.src('./src/client/app/ajs-app/**/*.html')
      .pipe(angularTemplatecache(config.file, config.options))
      .pipe(gulp.dest('./src/client/app/ajs-app/'));
    done();
  }
};
