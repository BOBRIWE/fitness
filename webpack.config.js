const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


const config = (devMode) => {
    return {
        mode: devMode ? 'development' : 'production',
        entry: './src/app.jsx',
        output: {
            filename: 'js/bundle.js',
            path: __dirname + '/dist'
        },
        module: {
            rules: [{
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader?url=false',
                        devMode ? {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        } : {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: (loader) => [
                                    require('autoprefixer')(),
                                    require('cssnano')()
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: 'cache-loader',
                            options: {
                                cacheDirectory: 'dist/.cache-loader/'
                            }
                        },
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path]'.replace(/src\/images/, '') + '[name].[ext]',
                                outputPath: 'images/',
                                context: 'src/images'
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                pngquant: {
                                    quality: '50-70',
                                    speed: 7
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    loader: "babel-loader",
                    options:{
                        presets:["env", "react"]
                    }
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[path]'.replace(/src\/fonts/, '') + '[name].[ext]',
                            outputPath: 'fonts/',
                            context: 'src/fonts'
                        }
                    }]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: devMode ? 'stylesheets/[name].css' : 'stylesheets/[name].min.css',
            }),
            new BrowserSyncPlugin({
                port: 3000,
                server: {
                    baseDir: ['dist']
                },
                open: 'external'
            })
        ],
        devtool: '#source-map',
        // watch: true
    };
};


module.exports = (env, argv) => config(argv.mode !== 'production');
