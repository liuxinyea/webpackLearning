
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports = {
	mode:'development',
    /*编译配置*/
    devtool: 'eval-source-map',
	/* 入口文件 */
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "[name].js"//打包后输出文件的文件名
    },
    /*开发服务配置*/
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
	plugins:[
		new MiniCssExtractPlugin({
			filename:'[name].css',
			chunkFilename:'[id].css'
		}),
		new HtmlWebpackPlugin({ // 打包输出HTML
		      title: 'Hello World app',
		      minify: { // 压缩HTML文件
		        removeComments: true, // 移除HTML中的注释
		        collapseWhitespace: true, // 删除空白符与换行符
		        minifyCSS: true// 压缩内联css
		      },
		      filename: 'index.html',
		      template: 'index.html'
		    }),
	],
    /*配置loader*/
    module: {
        rules: [
            {
                //babel-loader转换指定文件到浏览器能识别的js
                test: /(\.jsx|\.js)$/,
                use: [
					{
					    loader: "babel-loader",
					    
					},
					{
						loader:"force-strict-loader",
						options:{
							sourceMap:true
						}
					}
				],
                exclude: /node_modules/ //不处理的位置
            },
            {
                test: /(\.scss|\.css)$/,
                use:[
					{
						loader:MiniCssExtractPlugin.loader,
						options:{
							publicPath:'../'
						}
			 		},
			  		'css-loader',
					'sass-loader'
				]
            },
        ]
    }
};