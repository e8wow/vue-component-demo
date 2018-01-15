import Vue from 'vue'
import Router from 'vue-router'
import shop from '@/pages/shop/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'shop',
            component: shop
        }
    ]
})
