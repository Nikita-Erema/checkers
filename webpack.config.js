const path = require('path');
module.exports = {
    entry: './src/app/index.js',
    mode: 'none',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'project')
    }
}