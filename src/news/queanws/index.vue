<template>
    <!-- 问答列表页面 -->
    <div class="queanws box" v-title v-bind:data-title="title">
        <homehead/>
        <lists v-show="flage == 1" />
        <info v-show="flage == 2"/>
    </div>
</template>

<script>
import lists from '@/news/queanws/lists'
import info from '@/news/queanws/queanwsinfo'
import homehead from '@/components/head/homeHead'

export default {
    data() {
        return{
            title: '问答列表页',
            flage: 1
        }
    },
    mounted() {
        if(window.location.href.includes('.html')){
            this.flage = 2; // 显示问答详情页
        }
        console.log(this.isshow)
    },
    components: {
        lists,
        info,
        homehead
    }
}
</script>
<style lang="stylus" scoped>
.queanws{
    width: 100%;
}
</style>

