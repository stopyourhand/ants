module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/page/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '首页'
        },
        log: {
            entry: 'src/page/log/main.js',
            template: 'public/log.html',
            filename: 'log.html',
            title: '登录页面'
        },
        search: {
            entry: 'src/page/search/main.js',
            template: 'public/search.html',
            filename: 'search.html',
            title: '搜索页面'
        },
        detail: {
            entry: 'src/page/detail/main.js',
            template: 'public/detail.html',
            filename: 'detail.html',
            title: '商品详情'
        }
    }
}