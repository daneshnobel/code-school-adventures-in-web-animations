module.exports = function (grunt) {

    grunt.initConfig({
         pkg : grunt.file.readJSON('package.json'),
        'dart-sass': {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css/sass',
                    src: ['*.scss'],
                    dest: 'assets/css',
                    ext: '.css'
                }]
            }

        },
        watch: {
            css: {
                files: ['assets/css/sass/*.scss'],
                tasks: ['dart-sass', 'concat']
            }
        },
        concat: {
            css: {
                src: ['assets/css/*.css'],
                dest: 'public/css/app.css'
            }
        },
'prod-build': {
            target: {
                files: {
                    expand: true,
                    cwd: 'assets/css/sass',
                    src: ['*.scss'],
                    dest: 'assets/css',
                    ext: '.css'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-dart-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('prod',function(){
        const copydir = require('copy-dir');

        // fs.copy('index.html','dist/index.html',(err) => {
          
        // });
        copydir.sync('transforms.html','dist/transforms.html', {
                utimes:true,
                mode:true,
                cover:true

        });
        copydir.sync('public/','dist/assets/', {
            utimes:true,
            mode:true,
            cover:true

    });

        const pkg = grunt.file.readJSON('package.json')
        pkg.plugins.forEach(dependency => {
            
            console.log(dependency);
            copydir.sync('node_modules/'+dependency+'/','dist/plugins/'+dependency, {
                utimes: true,  // keep add time and modify time
                mode: true,    // keep file mode
                cover: true    // cover file when exists, default is true
              });
        });
        
        
    });
    grunt.registerTask('default', ['watch']);

}