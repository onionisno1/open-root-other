module.exports = {
    publicPath: '/other/',
    pages: {
        'f-help-m': {
            entry: 'src/f-help-m/root.js',
            template: 'public/default-with-bridge.html',
            filename: 'f-help-m.html',
            title: '帮助',
            chunks: ['chunk-vendors', 'chunk-common', 'f-help-m']
        },
        'f-protocol': {
            entry: 'src/f-protocol/root.js',
            template: 'public/default-with-bridge.html',
            filename: 'f-protocol.html',
            title: '协议',
            chunks: ['chunk-vendors', 'chunk-common', 'f-protocol']
        },
        'f-hls': {
            entry: 'src/f-hls/root.js',
            template: 'public/default.html',
            filename: 'f-hls.html',
            title: 'HLS',
            chunks: ['chunk-vendors', 'chunk-common', 'f-hls']
        }
    },
    css: {
        loaderOptions: {
            sass: {
                // data: '@import "@/m-common/style/style-config.scss";'
                prependData: '@import "@/m-style/style-config.scss";'
            }
        }
    }
}
