<template>
    <transition>
        <a href="javascript:void(0);" class="m-top" v-show="visible" @click="backTop()">
            <i class="iconfont icon-backtop"></i>
        </a>
    </transition>
</template>
<script>
    export default {
        name:'MeBacktop',
        props:{
            visible:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            backTop(){
                this.$emit('backtop')
            }
        }
    }
</script>

<style scoped>
    .m-top{
        position: absolute;
        bottom: 60px;
        right: 6px;
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background:rgba(0,0,0,0.3);
        color: #ffffff
    }
    .m-top .iconfont{
        font-size: 40px;
    }
</style>