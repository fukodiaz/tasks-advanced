let path = require('path');

const conf = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'main.js',
	},

	devServer: {
		static: {
			directory: path.join(__dirname,'dist')
		},
		historyApiFallback: true,
		port: 8081,
		// proxy: {
		// 	"*": {
		// 		target: "http://localhost:3000",
		// 		secure: false, 
		// 		changeOrigin: true,
		// 	}
		// },
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader'
			},
			{
				test: /\.module\.css$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							esModule: true,
							modules: {
								namedExport: true,
							}
						}
					}
				]
			},
			{
				test: /^((?!\.module).)*css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},

			{
				test: /\.module\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[path][name]__[local]--[hash:base64:5]'
							}
						}
					},
					'less-loader'
				]
			},
			{
				test: /^((?!\.module).)*less$/,
				use: [
					'style-loader',
					'css-loader', 
					'less-loader'
				]
			},

			{
				test: /\.(png|jpg|jpeg|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images',
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.pdf$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'files',
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(ttf|woff)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts',
							name: '[name].[ext]'
						}
					}
				]
			}
		]
	}
};

module.exports = (env, options) => {
	let isProd = options.mode === 'production';
	conf.devtool = isProd ? false : 'eval-cheap-module-source-map';

	return conf;
};