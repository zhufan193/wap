<template>
    <!-- 问答列表页面 -->
    <div class="queanws box" v-title v-bind:data-title="title">
        <homehead/>
        <lists v-show="flage == 1" />
        <info v-show="flage == 2"/>

        <div class="queanwfoot">
            <ul>
                <li>
                    <a class="firsta" href="tel:400-000-9192">拨打电话</a>
                </li>
                <li>
                    <router-link class="seconda" :to="{name:'/'}">
                        回到首页
                    </router-link>
                </li>
                <li>
                    <router-link class="thirda" to="">在线咨询</router-link>
                </li>
            </ul>
        </div> 
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
            flage: 2
        }
    },
    created() {
        this.chagepage()
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        "$route": "chagepage"
    },
    methods: {
        chagepage() {
            
            if(window.location.href.includes('.html')){
                this.flage = 2; // 显示问答详情页
            }else{
                this.flage = 1;
            }
            console.log(this.flage)
        }
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
    .queanwfoot{
        left: 0px;
        bottom: 0px;
        width: 100%;
        z-index: 1000;
        height: 53px;
        position: fixed;
        background-color: #ff0000;
        ul{
            padding 0;
            margin: 0;
            li{
                float: left;
                width: 33%;
                a{
                    color: #fff;
                    width: 100%;
                    height: 100%;
                    display: block;
                    font-size: 18px;
                    text-align: center;
                    padding-top: 32px;
                }
                .firsta{
                    background: url(../../assets/bg/wdfl-dhtb.png) no-repeat center 6px;
                    background-size: 20%;
                }
                .seconda{
                    background: url(../../assets/bg/wdfl-sytb.png) no-repeat center 6px;
                    background-size: 20%;
                }
                .thirda{
                    background: url(../../assets/bg/wdfl-zxtb.png) no-repeat center 6px;
                    background-size: 20%;
                }
            }
        }
    }
}
</style>

