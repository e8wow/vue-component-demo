<template>
    <div class="p-shop">
        <div class="layout">
            <div class="header">
                <component v-for="(data,index) in shopPageData.header"
                           :key="index"
                           :data.sync="data.data"
                           :is="data.component"></component>
            </div>
            <div class="content">
                <component v-for="(data,index) in shopPageData.content"
                           :key="index"
                           :data.sync="data.data"
                           :is="data.component"></component>
            </div>
            <div class="footer">
                <component v-for="(data,index) in shopPageData.footer"
                           :key="index"
                           :data.sync="data.data"
                           :is="data.component"></component>
            </div>

        </div>
        <div class="right">
            <i-input v-model="shopPageDataSettingData" type="textarea" :autosize="{minRows: 5,maxRows: 10}"
                     style="width:500px"></i-input>
        </div>
    </div>
</template>

<script>
    import shopPageData from './index'
    import {JBottomNav, JSearch, JShopList} from '../../../index'

    export default {
        name: 'p-shop',
        components: {JBottomNav, JSearch, JShopList}, // 这里可以一次性把所有组件导入，也可以选择部分导入
        data() {
            return {
                shopPageData
            }
        },
        computed: {
            shopPageDataSettingData: {
                get() {
                    return JSON.stringify(this.shopPageData)
                },
                set(value) {
                    this.shopPageData = JSON.parse(value)
                }
            }
        }
    }
</script>

<style lang="scss">
    .p-shop {
        display: flex;
        .layout {
            flex: 0 0 768px;
            position: relative;
            height: 100vh;
            display: flex;
            flex-direction: column;
            .header {
            }
            .content {
                flex: 1 1;
                overflow:auto;
            }
            .footer {
            }
        }
        .right {

        }
    }
</style>
