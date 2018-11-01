const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
    //babel 配置
    {
		test: /\.js$/,
		use: ["babel-loader"],
		// 不检查node_modules下的js文件
		exclude: "/node_modules/"
	},
    //图片 loader
    {
		test: /\.(png|jpg|gif)$/,
		use: [
            {
			// 需要下载file-loader和url-loader
			loader: "url-loader",
			options: {
				limit: 5,
                name: 'images/[name].[hash:7].[ext]',
			    }
		    },
            'image-webpack-loader'
        ]
    },
    {
		test: /\.css$/,
		use: extractTextPlugin.extract({
			fallback: "style-loader",
			use: [
				{
					loader: 'css-loader',
					options: {
						minimize: true //css压缩
					}
                }
			],
			publicPath: "../"
		})
    },
    //less编译、抽离、压缩
    {
        test: /\.less$/,
        use: extractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
                loader: "css-loader",
                options: {
                    minimize: true,
                }
            }, {
                loader: "less-loader",
                options: {
                    outputStyle: 'compressed',
                }
            }],
            publicPath: "../"
        })
    },
    //sass编译、抽离、压缩
    {
        test: /\.(scss|sass)$/,
        use: extractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
                loader: "css-loader",
                options: {
                    minimize: true,
                }
            }, {
                loader: "sass-loader",
                options: {
                    outputStyle: 'compressed',
                }
            }],
            publicPath: "../"
        })
    },
    //jquery
    {
        test: require.resolve('jquery'),
        use: [{
            loader: 'expose-loader',
            options: 'jQuery'
        },{
            loader: 'expose-loader',
            options: '$'
        }]
    },{
        test: /\.html$/,
        // html中的img标签
        use: ["html-withimg-loader"]
    },
]