module.exports = function(grunt) {
	
	grunt.initConfig({
		//all configuration here
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			// configuration for concatinating files here
			dist: {
				src: [
					'js/*.js'
				],
				dest: 'js/build/production.js',
			}
		},
		uglify: {
				build: {
            src: 'js/build/production.js',
            dest: 'js/build/production.min.js'
        }
		},
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/build/'
            }]
        }
    },
    watch: {
      .watch: {
        options: {
          liverload: true,
        },
      },
        scripts: {
            files: ['js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
              spawn: false,
            },
        },
        css: {
          files: ['css/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: false,
          }
        }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/build/global.css': 'css/global.scss'
        }
      }
    },
		responsive_images: {
			dev: {
				options: {
					engine: 'gm',
					sizes: [{
			name: 'small',
			width: '30%',
			suffix: '_small',
			quality: 20
		},{
			name: 'large',
			width: '50%',
			suffix: '_large',
			quality: 40
		}]
			},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images/',
					dest: 'images/'
				}]
			}
		},
	});
	//tell grunt we plan to use this plug-in
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
	// where we tell grunt what to do when we type 'grunt'
	grunt.registerTask('default', ['responsive_images', 'uglify', 'imagemin', 'watch', 'sass', 'sync']);

};
