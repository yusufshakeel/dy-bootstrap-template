module.exports = function(grunt) {

    //project configurations
    grunt.initConfig({

        cssmin : {
            target : {
                src : ["css/dy-bootstrap-template.css"],
                dest : "dist/css/dy-bootstrap-template.min.css"
            }
        }

    });

    //load cssmin plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //create default task
    grunt.registerTask("default", ["cssmin"]);

};