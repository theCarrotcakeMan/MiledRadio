const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    mode: "none",
    watch: true,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css/,
                loader: 'css-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
		new CopyPlugin({
	      patterns: [
	        { from: 'node_modules/vue-slider-component/dist-css/vue-slider-component.css', to: '../css/slider.css' },
	        { from: 'node_modules/vue-slider-component/theme/antd.css', to: '../css/slider-theme.css' },
	      ],
    	}),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};
