<template>
    <div :class="prefixCls">

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
            data: {
                type: Object
            }
        }
    }
</script>

<style>

</style>
