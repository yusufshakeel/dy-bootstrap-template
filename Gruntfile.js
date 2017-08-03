module.exports = function(grunt) {

    //project configurations
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass : {
            dist : {
                options: {
                },
                files : {
                    "css/dy-bootstrap-template.css":"scss/dy-bootstrap-template.scss"
                }
            }
        },

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

    // load sass plugin
    grunt.loadNpmTasks('grunt-contrib-sass');

    //load cssmin plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //create default task
    grunt.registerTask("default", ["sass","cssmin"]);

};