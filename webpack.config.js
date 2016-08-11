const webpack = require('webpack')
const failPlugin = require('webpack-fail-plugin')

module.exports = {
	entry: "./bin/index.jsx",
	output: {
		filename: "./dist/bundle.js",
	},
	devtool: "source-map",
	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel",
				query: {
						presets: ['es2015'],
						plugins: ['inferno']
				}
			}
		],
		preloaders: [
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			comments: false,
			beautify: false,
			sourceMap: true,
			compress: {
				warnings: false,
				drop_console: true,
				screw_ie8: true
			}
		}),
		failPlugin
	]
}
