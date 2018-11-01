const path = require('path')
const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')
var entry = require('./config/entrys.js')

module.exports = {
    //入口文件的配置项
    entry:entry,
    //出口文件的配置
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: './js/[name].[hash].js'
    },
    //模块：例如解读css，图片如何转换，压缩
    module:{
        rules:rules
    },
    //插件：用于生产模板和各项功能
    plugins:plugins,
    //配置webpack开发服务功能
    devServer:{
        //设置基本的目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的Ip地址，可以使用IP，也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8888,
        open: true, // 开启浏览器
		hot: true   // 开启热更新
    },
    // 提取js，lib1名字可改
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: "commons",
					chunks: "initial",
					minChunks: 5
				}
			}
		}
	}

}