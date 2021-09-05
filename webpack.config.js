const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  webpack  = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.pug'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'index.css',
          }), 
    ],
    module: {
        rules: [
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use:[
                    {
                        loader:'file-loader',// загрузчик данных картинок 
                        options: {
                            name: "img/[name].[ext]",//общая папка для картинок при сборки в dist
                            esModule: false,
                        }
                    }
              ]
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
                
            },
            {
                    test:/\.sass$/,//препроцессор css
                    use:
                    [
                        {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
                },
                {
                    test: /\.mp4$/i,
                    use: [
                        {
                          loader: 'file-loader',
                        },
                      ],
                      
                },
                {
                    test:/\.css$/,// css
                    use:[
                        {
                        loader: MiniCssExtractPlugin.loader,
                    }, 'css-loader']
                },
              {
                test:/\.pug$/,//  препроцессор HTML
                loader:'pug-loader',// загрузчик pug
                options: {
                    pretty: true
                  },
            },
        ],
    },
}