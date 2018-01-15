// 也可以在这里引入组件
export default {
    header: [{component: 'JSearch', data: {placeholder: '搜索', text: ''}}],
    content: [{component: 'JShopList'}],
    footer: [{
        component: 'JBottomNav',
        data: {
            son: [
                {text: '首页', icon: 'home'},
                {text: '通讯录', icon: 'cube'},
                {text: '发现', icon: 'planet'},
                {text: '我的', icon: 'person'}
            ]
        }
    }]
}
