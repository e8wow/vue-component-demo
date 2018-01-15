<template>
    <div :class="prefixCls">
        <i-button></i-button>
        <div :class="sonClasss" v-for="s in data.son">
            <p>{{s.icon}}</p>
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
        position: fixed;
        bottom: 0;
        display: flex;
        width: 100%;
        &-son {
            flex: 1;
            text-align: center;
        }
    }
</style>
