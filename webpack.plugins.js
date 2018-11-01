const webpack = require("webpack");
let pagesArray = require('./config/htmlPages');

// 清除目录等
const cleanWebpackPlugin = require("clean-webpack-plugin");

// 分离css
const extractTextPlugin = require("extract-text-webpack-plugin");

//静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");

// html模板
const HtmlWebpackPlugin = require("html-webpack-plugin");

var base_plugin = [
    new webpack.HotModuleReplacementPlugin(),
    // 调用之前先清除

    new cleanWebpackPlugin(["dist"]),
    require('autoprefixer'), //自动添加前缀插件
    new copyWebpackPlugin([{
        from:__dirname+'/src/static',//打包的静态资源目录地址
        to:'./' //打包到dist下面的public
    }]),
    new extractTextPlugin("css/[name].[hash].css")
]


/*遍历页面，添加配置*/
pagesArray.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
      template: page.template,
      filename: page.filename,
      chunks: ['commons', page.chuckName],
      // hash:true,
      minify: {
        removeComments: true,
        collapseWhitespace: false //删除空白符与换行符
      }
    });
    base_plugin.push(htmlPlugin)
  })

module.exports = base_plugin