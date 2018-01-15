<template>
    <ul :class="prefixCls">
        <li v-for="i in 100">商品id：{{i}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'JShopList',
        props: {
            prefixCls: {
                type: String,
                default: 'j_shop_list'
            }
        }
    }
</script>

<style lang="scss">
    $prefixCls: 'j_shop_list';
    .#{$prefixCls} {
        flex: 1;
    }
</style>
