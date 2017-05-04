module.exports = function (grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'css/main.css': 'less/main.less'
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less', 'watch']);


};