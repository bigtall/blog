/*
 * @Author: sbd
 * @Date: 2022-02-21 10:02:32
 * @LastEditors: sbd
 * @LastEditTime: 2022-02-22 12:56:00
 * @Description: file content
 */
module.exports = {
    title: '大风车的博客',
    description: '好好学学，天天向上。',
    base: '/blog/',
    markdown: {
        lineNumbers: true
    },
    // 主体配置
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: 'Refresh'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
   
}

