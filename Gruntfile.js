module.exports = function(grunt) {

  // The target directory for the final build product.
  var targetDirectory = 'out';

  grunt.initConfig({
    appengine: {
      app: {
        root: targetDirectory,
        manageScript: [process.env.HOME,
                      'bin', 'google-cloud-sdk', 'bin','gcloud'].join('/'),
        runFlags: {
          port: 8080
        },
        runScript: [process.env.HOME,
                    'bin', 'google-cloud-sdk', 'bin', 'dev_appserver.py'].join('/')
      }
    },

    build: grunt.file.readJSON('config.json'),

    clean: [targetDirectory],

    copy: {
      source: {
        cwd: 'src/',
        dest: [targetDirectory, ''].join('/'),
        expand: true,
        src: '**'
      },
      static: {
        cwd: 'static',
        dest: [targetDirectory, 'static', ''].join('/'),
        expand: true,
        src: '**'
      },
      indexFile: {
        cwd: 'static',
        dest: [targetDirectory, ''].join('/'),
        expand: true,
        src: 'index.html'
      },
      templates: {
        cwd: 'templates',
        dest: [targetDirectory, 'templates', ''].join('/'),
        expand: true,
        src: '**'
      },
      third_party_js: {
        cwd: ['third_party', 'js'].join('/'),
        dest: [targetDirectory, 'static', 'third_party', ''].join('/'),
        expand: true,
        src: '**'
      },
      third_party_py: {
        cwd: ['third_party', 'py'].join('/'),
        dest: [targetDirectory, ''].join('/'),
        expand: true,
        src: '**'
      }
    },
  });

  grunt.loadNpmTasks('grunt-appengine');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('init_py', 'Generates __init__.py', function(dir) {
    grunt.file.write([targetDirectory, dir, '__init__.py'].join('/'),
                     '');
  });
  grunt.registerTask('nop', 'no-op', function() {});

  grunt.registerTask('yaml', 'Generates app.yaml',
      function() {
        var appid = grunt.option('appid') ||
                    grunt.config.get('build.appid', false);

        if (typeof(appid) !== 'string' || appid.length == 0) {
          grunt.fatal('no appid');
        }

        var uncommitedChanges = false;
        var done = this.async();

        var logCallback = function(error, result, code) {
          if (code != 0) {
            grunt.log.writeln('git log error: ' + result);
            done(false);
          }
          var hash = String(result).split(' ')[0].substr(0, 16);
          var versionString = hash + (uncommitedChanges ? '-dev' : '');
          var yamlData = grunt.file.read('app.yaml.base');
          yamlData = yamlData.replace('__APPLICATION__', appid);
          yamlData = yamlData.replace('__VERSION__', versionString);
          grunt.log.writeln('Generating yaml for application: ' + appid);
          grunt.file.write([targetDirectory, 'app.yaml'].join('/'), yamlData);
          done();
        };

        var statusCallback = function(error, result, code) {
          if (code != 0) {
            grunt.log.writeln('git status error: ' + result);
            done(false);
          }
          var pattern = /nothing to commit, working (directory|tree) clean/i;
          if (!pattern.test(String(result))) {
            uncommitedChanges = true;
          }
          grunt.util.spawn(
              {cmd: 'git', args: ['log', '--format=oneline', '-n', '1']},
              logCallback);
        };

        grunt.util.spawn({cmd: 'git', args: ['status']}, statusCallback);
        });

  grunt.registerTask('default',
      ['copy:source', 'copy:static', 'copy:indexFile', 'copy:templates',
       'copy:third_party_js', 'copy:third_party_py',
      'yaml']);
};

