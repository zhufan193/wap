<template>
    <!-- 搜索结果 -->
    <div class="search box" v-title v-bind:data-title="title">
        <homehead/>
        <div class="main-content box">
            <!-- 当前位置 -->
            <div class="div-where">
                <span>
                    <router-link :to="{path:'/cityid/'+ 0 +'.html'}">首页</router-link>&gt;
                    <router-link to="">搜索</router-link>
                </span>
            </div>
            <div class="div-nav">找到 课程 相关信息 {{all}} 条</div>
            <div class="div-result">
                <ul>
                    <li v-for="(course,cindex) in courseList" :key="cindex">
                        <router-link :to="{path:'/course/id-'+18468+'-cityid-'+32+'.html'}">
                            <dl>
                                <dt class="dt-cla">
                                    <span class="first-span">{{course.title}}</span>&nbsp;
                                    <span class="second-span">1图</span>
                                </dt>
                                <dd class="attr">
                                    <span>{{course.content}}</span>
                                </dd>
                                <dd class="attr">
                                    suzhouxlc&nbsp;&nbsp;{{course.time}} &nbsp;阅5
                                </dd>
                            </dl>
                        </router-link>
                    </li>
                </ul>
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
        <homefoot/>
    </div>
</template>
<script>
import homehead from '@/components/head/homeHead'
import homefoot from '@/components/foot/homefoot'
export default {
    data() {
        return{
            title: '搜索结果',
            all: 1000, //数据总条数
            pagesize: 15,  //每页多少条
            page: 0, // 总共多少页
            flage: 1, //当前页
            topage: null,
            // 课程内容
            courseList: [
                {id: '1',title: '苏州智慧父母培训',content: '用爱的连接，在亲子关系中传承生命的力量！用身心一致的支',time: '19-05-12'},
                {id: '2',title: '苏州智慧父母培训',content: '用爱的连接，在亲子关系中传承生命的力量！用身心一致的支',time: '19-05-13'},
                {id: '3',title: '苏州智慧父母培训',content: '用爱的连接，在亲子关系中传承生命的力量！用身心一致的支',time: '19-05-14'},
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
            }else if(this.topage == 0){
                 return this.$toast.fail('请输入正确的页数');
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
    components: {
        homehead,
        homefoot
    }
}
</script>
<style lang="stylus" scoped>
.search{
    width 100%;
    
    .main-content{
        position: relative;
        background: #fff;
        top: 60px;
        padding-bottom 10px;
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 60px;
        .div-where{
            width: 100%;
            height: 36px;
            font-size: 14px;
            line-height: 36px;
            background: #fff;
            color: #7c7c7c;
            text-indent: 5px;
            border-bottom: 1px solid #e0e0e0;
            span{
                height: 32px;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .div-nav{
            padding:8px 0px; 
            text-indent:10px;
        }
        .div-result{
            margin-left: 2%;
            ul{
                li{
                    a{
                        color: #000;
                        text-decoration: none;
                        .first-span{
                            font-weight bold;
                        }
                        .second-span{
                            background:#339966; 
                            color:#FFFFFF; 
                            font-size:14px; 
                            padding:0 2px;
                            text-align:center;
                        }
                    }
                }
            }
            dd, dl, dt, p {
                margin: 0;
                padding: 0;
                line-height: 15px;
            }
        }
        /deep/ .pagination{
            border: 0;
        }
    }
}
</style>


