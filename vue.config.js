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
    //     // css预设器配置项
    //     loaderOptions: {},
    //     // 启用 CSS modules for all css / pre-processor files.
    //     modules: false
    }
}