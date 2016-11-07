const grunt = require('grunt');
const _ = require('lodash');
const path = require('path');

function randInt(max) {
    return Math.floor(Math.random() * max);
}
const extensions = ['js', 'ts', 'es', 'png', 'jpg', 'jade', 'css'];
function randomExtension() {
    return extensions[randInt(extensions.length)];
}

for(let i = 0; i < 9999; i++) {
    const pathLength = randInt(6);
    const filepath = 
        `src/${ _.range(pathLength).map(v => String.fromCharCode(randInt(26) + 'a'.charCodeAt(0))).join('/') }.${ randomExtension() }`;
    grunt.file.mkdir(path.dirname(filepath));
    grunt.file.write(filepath, 'empty file');
}