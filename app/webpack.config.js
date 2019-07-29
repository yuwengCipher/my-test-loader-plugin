const path = require('path')
const consolePlugin = require('../plugins/console-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['change-world'],
            }
        ]
    },
    plugins: [
        new consolePlugin()
    ]
};
