<template>
    <div :class="prefixCls">
        <input :placeholder="data.placeholder" type="text">
    </div>
</template>

<script>
    export default {
        name: 'JSearch',
        props: {
            prefixCls: {
                type: String,
                default: 'j_search'
            },
            data: {}
        }
    }
</script>

<style>

</style>
