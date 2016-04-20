module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist1: {
                src: [
                    "dist/module.js",
                    "dist/files/*.js"
                ],
                dest: 'build/storage-manager.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'build/storage-manager.min.js': ['build/storage-manager.js']
                }
            }
        }
    });

    // Load the plugin that provides the "coffee" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['concat:dist1', 'uglify']);

};