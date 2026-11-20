const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/dbHeroes.json'),
                    to: path.resolve(__dirname, 'dist/dbHeroes.json'),
                },
                {
                    from: path.resolve(__dirname, 'src/dbimage'),
                    to: path.resolve(__dirname, 'dist/dbimage'),
                },
            ],
        }),
    ]
};