<template>
    <!-- 师资介绍 -->
    <div class="learn box" v-title v-bind:data-title="title">
        <!-- 师资介绍 -->
        <div class="learninfo">
            <h2>深圳美联英语师资介绍</h2>
            <ul>
                <li v-for="(tea,tindex) in teacherList" :key="tindex">
                    <router-link :to="{path:'/school/'+tea.sid+'/document-id-'+tea.id+'.html'}">
                        {{tea.name}}
                        <label>{{tea.time}}</label>
                    </router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <!-- 分页 -->
        <div class="paging pagination">
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
            title:'师资介绍',
            all: 100000, //数据总条数
            pagesize: 15,  //每页多少条
            page: 0, // 总共多少页
            flage: 1, //当前页
            topage: null,
            teacherList: [
                {id: '1',sid: '12', name: 'Rachel/潘琴',time: '2019-03-16'},
                {id: '2',sid: '12', name: 'Rachel/潘琴',time: '2019-03-16'},
                {id: '3',sid: '12', name: 'Rachel/潘琴',time: '2019-03-16'},
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
.learn{
    width 100%;
    .learninfo{
        padding: 0px 0.3rem;
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
                line-height: 15px;
                height: 15px;
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


