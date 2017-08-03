module.exports = function(grunt) {

    //project configurations
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        cssmin : {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
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