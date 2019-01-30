const path = require('paht');

module.exports = {
    mode: 'development',

    entry: path.resolve(__dirname, './src/index'),

    output: path.resolve(__dirname, 'dist'),
}