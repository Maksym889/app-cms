const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		port: 8080,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
