<template>
    <!-- 学习动态 -->
    <div class="learn box" v-title v-bind:data-title="title">
        <!-- 培训信息 -->
        <div class="learninfo">
            <h2>深圳美联英语学习动态</h2>
            <ul>
                <li v-for="(ins,index) in learnList" :key="index">
                    <router-link :to="{path:'/school/'+ins.sid+'/document-id-'+ins.did+'.html'}">
                        {{ins.name}}
                        <label>{{ins.time}}</label>
                    </router-link>
                </li>
                <div class="clear"></div>
            </ul>
            <!-- 分页 -->
            <div>
                分页未写
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            title:'学习动态',
            learnList:[
                {name:'深圳哪个少儿英语培训哪个好',time:'2019-03-16',sid:'12',did:'123'},
                {name:'深圳哪个少儿英语培训哪个好2',time:'2019-03-16',sid:'12',did:'1234'},
                {name:'深圳哪个少儿英语培训哪个好3',time:'2019-03-16',sid:'12',did:'1235'},
                {name:'深圳哪个少儿英语培训哪个好4',time:'2019-03-16',sid:'12',did:'1236'},
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.learn{
    width 100%;
    .learninfo{
        padding: 0px 0.3rem;
        border-bottom: 10px solid #f0eff5;
        margin-top: 5px;
        h2{
            font-size: 0.38rem;
            text-align: center;
            margin-bottom: 0.4rem;
        }
        ul{
            padding 10px 0;
            li{
                padding-top: 0.3rem;
                a{
                    color: #434343;
                    font-size: 0.33rem;
                    label{
                        float: right;
                        color: #434343;
                    }
                }
            }
        }
    }

}
</style>


