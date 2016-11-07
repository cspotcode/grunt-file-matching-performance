module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.registerMultiTask('dump-matches', function() {
        grunt.file.write('matched-files.txt', this.files.map(f => f.src).join('\n'));
    });

    grunt.initConfig({
        'dump-matches': {
            target1: {
                files: [{
                    expand: true,
                    src: [
                        'src/**',
                        '!**/*.{png,jpg}'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('default', ['dump-matches:target1']);
}