<template>
    <!-- 校区分布 -->
    <div class="area box" v-title v-bind:data-title="title">
        <div class="arealist">
            <h2>校区列表</h2>
            <div>
                <ul v-for="(area,aindex) in areaList" :key="aindex">
                    <li>
                        <h2>{{area.name}}</h2>
                        <p>
                            <span>校区地址：</span>
                            {{area.adder}}
                        </p>
                        <span class="yuanwen">
                            <router-link :to="{path:'/school/'+area.id+'/schoolinfo-id-'+area.infoid+'.html'}">
                                阅读原文
                            </router-link>
                        </span>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
        </div>
        <!-- 分页 -->
        <div class="pagination">
            <span>
                共{{page}}页
            </span>
            <span @click="toleft" v-if="flage != 1" class="button-span"><</span>
            <span class="span-num">{{flage}}</span>
            <span @click="toright" v-if="flage != page" class="button-span">></span>
            <span>
                跳至
                <input type="number"  class="gotopage" v-model="topage" @blur="gotopage">
                页
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            title: '校区分布',
            all: 100000, //数据总条数
            pagesize: 15,  //每页多少条
            page: 0, // 总共多少页
            flage: 1, //当前页
            topage: null,
            // 校区列表
            areaList: [
                {id: '12',infoid: '123',name: '静安共康校区',adder: '共和新路46'}
            ],
        }
    },
    created() {
        this.page = Math.ceil(this.all / this.pagesize);
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        "$route": "getDate"
    },
    methods:{
        // 上一页
        toleft() {
            this.flage = Number(this.flage);
            this.flage -= 1;
            // this.$router.push('/category/catid-'+12+'-cityid-'+123+'-page-'+this.flage+'.html');
        },
        // 下一页
        toright() {
            this.flage = Number(this.flage);
            this.flage += 1;
            // this.$router.push('/category/catid-'+12+'-cityid-'+123+'-page-'+this.flage+'.html');
        },
        gotopage() {
            if(this.topage > this.page){
                this.topage = null; 
                return this.$toast.fail('已超过最大页数');
            }else{
                this.flage = this.topage;
                this.topage = null;
                // this.$router.push('/category/catid-'+12+'-cityid-'+123+'-page-'+this.flage+'.html');
            }
        },
        // 调用接口获取列表数据
        getDate() {
        }
    },
}
</script>
<style lang="stylus" scoped>
.area{
    width 100%;
    .arealist{
        padding: 0px 0px 5px 10px;
        h2{
            color: #31a9fc;
            position: relative;
            padding-left: 10px;
            font-size: 0.5rem;
            border-left: 2px solid #31a9fc;
            font-weight:bold;
        }
        ul{
            width: 45%;
            padding: 5px;
            border-radius: 15px;
            margin: 10px 5px 0 0;
            border: 1px solid #d2d2d2;
            display: inline-block;
            li{
                h2{
                    border: 0;
                    height: 0.8rem;
                    text-align: left;
                    line-height: 0.8rem ;
                    color #000;
                }
                p{
                    padding-left:10px;
                    text-indent: 0px ;
                    line-height: 0.4rem;
                }
                .yuanwen{
                    border: 1px solid #31a9fc;
                    background-color: #31a9fc;
                    width: 35%;
                    display: block;
                    height: 0.6rem;
                    margin: 0.2rem 10px;
                    text-align: center;
                    line-height: 0.6rem;
                    border-radius: 10px;
                    a{
                        color: #fff;
                    }
                    
                }
            }

        }
    }

}
</style>
