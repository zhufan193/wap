<template>
    <!-- 关于我们 -->
    <div class="meabout box" v-title v-bind:data-title="title">
        <homehead/>
        <div class="main-content">
            <div class="banner">
                <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(tem,tindex) in imgList" :key="tindex">
                    <router-link :to="{path:'/school/'+tem.sid}">
                        <img v-lazy="tem.src"/>
                    </router-link> 
                </mt-swipe-item>
                </mt-swipe>
            </div>
            <router-view/>
        </div>
        <homefoot/>
    </div>
</template>
<script>
import homehead from '@/components/head/homeHead'
import homefoot from '@/components/foot/homefoot'
export default {
    data() {
        return{
            title: '关于我们',
            // banner列表
            imgList:[
            {src: 'http://www.91qiux.com/attachment/focus/1541728975fqgrt.jpg',name:'上海优路教育',sid:'23'},
            {src: 'http://www.91qiux.com/attachment/focus/15341295619qwkj.jpg',name:'上海优路教育',sid:'243'},
            {src: 'http://www.91qiux.com/attachment/focus/1541728844xd1rw.jpg',name:'上海优路教育',sid:'253'},
            ],
        }
    },
    components: {
        homehead,
        homefoot
    }
}
</script>
<style lang="stylus" scoped>
.meabout{
    width 100%;
    .main-content{
        margin-top: 70px;
        .banner{
            width 100%
            height 100px
            a img{
                width 100%
                height 100%
            }
        }
    }
    
}
</style>


