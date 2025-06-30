module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          "dist/css/styles.css": "src/less/styles.less"
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/scripts.min.js': ['src/js/scripts.js']
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/img/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['less', 'uglify', 'imagemin']);
};
