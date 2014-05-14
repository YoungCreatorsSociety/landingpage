module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    autoprefixer: {
      options: {},
      single_file: {
        src: 'css/style.css',
        dest: 'css/min.css'
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      my_target: {
        options: {},
        src: 'css/min.css',
        dest: 'css/min.css'
      }
    },
    watch: {
      options: {
        liveReload: true
      },
      SASStoCSS: {
        files: ['sass/*.sass'],
        tasks: ['sass']
      },
      prefixStyles: {
        files: ['css/style.css'],
        tasks: ['autoprefixer', 'cssmin']
      }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask('default', ['sass', 'autoprefixer']);
  };
