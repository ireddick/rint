module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('test', 'jasmine_node');
  grunt.registerTask('default', 'test')
}
