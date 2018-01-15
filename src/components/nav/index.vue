<template>
    <div :class="prefixCls">
        <div :class="sonClasss" v-for="s in data.son">
            <Icon :type="s.icon"></Icon>
            <p>{{s.text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JBottomNav',
        props: {
            prefixCls: {
                type: String,
                default: 'j_bottom_nav'
            },
            data: {
                type: Object
            }
        },
        computed: {
            sonClasss() {
                return [
                    `${this.prefixCls}-son`
                ]
            }
        }
    }
</script>

<style lang="scss">
    $prefixCls: 'j_bottom_nav';

    .#{$prefixCls} {
        display: flex;
        width: 100%;
        &-son {
            flex: 1;
            text-align: center;
        }
    }
</style>
