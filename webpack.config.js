const path = require('path');
const fs = require('fs');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const sslPath = '/var/www/ssl/fart-test.site';

const PROD = 'production';
const DEV = 'development';

module.exports = (env) => {
    const mode = env.mode === PROD ?
        PROD: 
        DEV;
    const dev = mode !== PROD;
    const options = {
        mode,
        entry: './src/index.js',
        output: {
            publicPath: '/dist/',
            path: '/var/www/http/dist'
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }]
        },
        plugins: [
            new LiveReloadPlugin({
                port: 2083,
                cert: fs.readFileSync(
                    path.join(sslPath, 'crt.crt')
                ),
                key: fs.readFileSync(
                    path.join(sslPath, 'key.key')
                )
            })
        ]
    };

    if (dev) {
        options.watch = true;
        options.devtool = 'source-map';
        options.output.filename = 'bundle.animate.js';
    } else {
        options.output.path = '/var/www/packages/animate.js/dist';
        options.output.filename = 'bundle.js';
    }

    return options;
}