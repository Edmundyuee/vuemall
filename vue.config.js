//项目路径引用别名
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets' : '@/assets',
                'common' : '@/common',
                'components' : '@/components',
                'network' : '@/network',
                'views' : '@/views'
            }
        }
    }
}