const mock = require('./mock');
const LessPluginFun = require('less-plugin-functions');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    assetsDir: 'src/assets',

    productionSourceMap: false,

    devServer: {
        before(app) { mock(app); }
    },

    lintOnSave: true,
      // cdn接入
    configureWebpack: {
        externals: {
            jquery: "jQuery"
        },
        plugins: [
            new StyleLintPlugin({
                context: 'src',
                files: ['**/*.less', '**/*.s?(a|c)ss', '**/*.vue']
            })
        ]
    },


    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            less: {
                plugins: [ new LessPluginFun() ]
            },
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 75,
                        unitPrecision: 6,
                        propList: ['*'],
                        minPixelValue: 2
                    })
                ]
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    }
}