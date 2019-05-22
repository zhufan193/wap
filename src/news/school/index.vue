<template>
    <!-- 机构 -->
    <div class="index box">
        <schoolhead/>
        
        <!-- 关键词 -->
        <div class="main-content">
            <ul :class="{'showul':tobottom}">
                <li v-for="(mtem,mindex) in mainList" :key="mindex">
                    <router-link :to="{path:'/school/'+mtem.sid+'/course-catid-'+mtem.catid+'.html'}">{{mtem.name}}</router-link>
                </li>
                <div class="clear"></div>
                <span :class="{'tobottom':tobottom}" @click="tobottom = !tobottom"></span>
            </ul>
        </div>
        <router-view/>
        <homefoot/>
    </div>
</template>
<script>
import schoolhead from '@/components/head/schoolhead';
import homefoot from '@/components/foot/homefoot'
export default {
    data(){
        return{
            tobottom: false,
            
            
            // 关键词列表
            mainList:[
                {name:'深圳雅思',sid:'12', catid: '33',},
                {name:'深圳托福',sid:'12', catid: '233',},
                {name:'深圳英语口语',sid:'12', catid: '1233',},
                {name:'深圳雅思',sid:'12', catid: '4233',},
                {name:'深圳雅思',sid:'12', catid: '8233',},
            ]
        }
    },
    components:{
        schoolhead,
        homefoot
    }
}
</script>
<style lang="stylus" scoped>
.index{
    width 100%;
    
    .main-content{
        padding: 0.4rem 0.7rem;
        ul{
            overflow: hidden;
            position: relative;
            height: 30px;
            li{
                float: left;
                height: 0.715rem;
                text-align: center;
                line-height: 0.7rem;
                margin-right: 0.295rem;
                margin-bottom: 0.295rem;
                border: 1px solid #e5e5e5;
                a{
                    color: #4a4a4a;
                    display: block;
                    font-size: 0.35rem;
                    padding: 0 10px;
                }
            }
        }
        span{
            right: 4%;
            top: 0rem;
            width: 0.63rem;
            height: 0.6rem;
            cursor: pointer;
            position: absolute;
            border-radius: 50%;
            background-color: #66c1ff;
        }
        span:after{
            right: 23%;
            top: 0.18rem;
            width: 0.2rem;
            content: '';
            height: 0.2rem;
            position: absolute;
            font-weight: normal;
            transform: rotate(225deg);
            border-top: 2px solid #FFF;
            border-right: 2px solid #FFF;
        }
        .tobottom:after{
            transform: rotate(136deg);
            border-top: 2px solid #FFF;
            border-right: 2px solid #FFF;
            margin: -1px 1px 0 0 ;
        }
        .showul{
            height:auto;
            min-height:30px;
        }
    }
}
</style>


