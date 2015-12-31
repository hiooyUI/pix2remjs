module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> Author:<%= pkg.author %> license:<%= pkg.license %> */\n'
                },
                files: {
                    "dist/css/style.css": "src/less/style.less",
                    "dist/css/base.css": "src/less/base.less"
                }
            },
            production: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> Author:<%= pkg.author %> license:<%= pkg.license %> */\n'
                },
                files: {
                    "dist/css/style.min.css": "src/less/style.less",
                    "dist/css/base.min.css": "src/less/base.less"
                }
            }
        },
        uglify: {  
            production: {
                options: {
                    mangle: true,
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> Author:<%= pkg.author %> license:<%= pkg.license %> */\n'
                },
                files: {
                    'dist/js/pix2rem.min.js': 'src/js/pix2rem.js'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            grunt: {
                files: ['Gruntfile.js']
            },

            styles: {
                files: [
                        'src/less/*.less',
                        'src/less/**/*.less',
                        'src/less/***/**/*.less'
                ],
                tasks: [
                        'less'
                ],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
