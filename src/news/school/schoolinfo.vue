<template>
    <!-- 校区分布详情 -->
    <div class="schoolinfo box" v-title v-bind:data-title="title">
        <!-- 校区详情 -->
        <div class="schoolxq">
            <h2>杨浦校区</h2>
            <p>
                <span>校区地址：</span> 
                杨浦区国宾路36号万达广场B座14层
            </p>
        </div>
        <!-- 其他校区 -->
        <div class="otherschool">
            <div>
                <h2>其他校区</h2>
            </div>
            <ul>
                <li v-for="(sch,sind) in otherList" :key="sind">
                    <router-link :to="{path:'/school/'+sch.sid+'/schoolinfo-id-'+sch.infoid+'.html'}" title="" alt="">{{sch.name}}</router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            title: '校区分布详情',
            otherList: [
                { name:'闵行七宝校区',sid:'12',infoid:'123' },
                { name:'闵行七宝校区',sid:'12',infoid:'1234' },
                { name:'闵行七宝校区',sid:'12',infoid:'1235' },
                { name:'闵行七宝校区',sid:'12',infoid:'1236' },
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.schoolinfo{
    width: 100%;
    .schoolxq{
        padding: 0px 10px;
        margin-bottom: 20px;
        h2{
            height: 1rem;
            font-size: 0.4rem;
            line-height: 1rem;
            margin-bottom: 0.2rem;
        }
        p{
            font-size: 0.3rem;
            margin-bottom: 0.1rem;
        }
    }
    .otherschool{
        div{
            padding: 10px 0px;
            h2{
                color: #31a9fc;
                position: relative;
                margin-left: 0.3rem;
                padding-left: 10px;
                font-size: 0.5rem;
                border-left: 2px solid #31a9fc;
            }
        }
        ul{
            padding: 10px 0.3rem 0rem;
            border-bottom: 10px solid #f0eff5;
            li{
                float left;
                width: 45%;
                height: 0.8rem;
                font-size: 0.35rem;
                text-align: center;
                line-height: 0.74rem;
                margin-right: 15px;
                margin-bottom: 0.5rem;
                letter-spacing: 0.08rem;
                border: 1px solid #616161;
            }
        }
    }
}
</style>


