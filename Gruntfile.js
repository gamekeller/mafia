var path = require('path');
var docsFolderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point + '/_site/'));
};

module.exports = function(grunt) { "use strict";

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 4000,
          hostname: '0.0.0.0',
          middleware: function(connect, options) {
            return [docsFolderMount(connect, options.base)];
          }
        }
      }
    },

    jekyll: {
      site: {}
    },

    watch: {
      site: {
        files: [
          'css/**/*',
          'js/**/*',
          '**/*.md',
          '_layouts/*',
          '_includes/*',
          '!_site/**/*'
        ],
        tasks: ['jekyll:site']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task(s).
  grunt.registerTask('default', ['jekyll:site', 'connect', 'watch']);

};