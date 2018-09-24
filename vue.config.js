const mock = require('./mock');

module.exports = {
    assetsDir: 'src/assets',

    devServer: {
        before(app) { mock(app); }
    },

    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: false, // boolean (default: true)
            files: ['src/**/*.{vue,htm,html,css,sss,less,scss}']
        }
    },

    lintOnSave: true,
      // cdn接入
    configureWebpack: {
        externals: {
            jquery: "jQuery"
        }
    },


    css: {
    //     // 是否使用css分离插件 ExtractTextPlugin
    //     extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            less: {
                plugins: [ new (require('less-plugin-functions')) ]
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
    //     // 启用 CSS modules for all css / pre-processor files.
    //     modules: false
    }
}