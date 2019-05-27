<template>
    <!-- 问答列表页面 -->
    <div class="queanws box" v-title v-bind:data-title="title">
        <p class="first-p">
            当前位置：
            <router-link :to="{name:'/'}">
                91求学
            </router-link>&gt;
            <router-link :to="{path:'/queanws/'+123+'/'}">
                问答培训
            </router-link>&gt;
            <router-link to="">
                测试
            </router-link>
        </p>
        <div class="wenda">
            <img src="@/assets/bg/pxwd-tb.png" style="width: 30px;" alt="">
            <p>培训问答</p>
            <div class="wenda-right">
                <img src="@/assets/bg/wdfl-gdtb.png" alt="">
            </div>
            <div class="clear"></div>
        </div>
        <div class="main-content">
            <ul>
                <router-link to="">
                    <li class="wenda-first-li">
                        <h3>测试</h3>
                        <p>测试内容</p>
                    </li>
                    <li class="wenda-second-li">
                        <span> 2019.05.25</span> 
                        <br>
                        <span>了解更多</span>
                    </li>
                    <div class="clear"></div>
                </router-link>
            </ul>
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

        <!-- 课程特色 -->
        <div class="tese">
            <ul>
                <li :class="{active: activeValue == '1'}" @click="activeValue = '1'">资讯</li>
                <li :class="{active: activeValue == '2'}" @click="activeValue = '2'">课程</li>
                <li :class="{active: activeValue == '3'}" @click="activeValue = '3'">新闻</li>
                <li style="border: 0" :class="{active: activeValue == '4'}" @click="activeValue = '4'">问答</li>
                <div class="clear"></div>
            </ul>
        </div>
        <div class="clainfo" v-if="activeValue == '1'">
            <ul>
                <li v-for="ins in 5">
                    <router-link :to="{path: '/news/id-'+12+'-cityid-'+123+'.html'}">
                        <span>呼和浩特职场英语培训学校机构文章机构文章机构文章机构文章机构文章机构文章机构文章机构文章机构文章机构文章</span>
                        <label> 05-06</label>
                    </router-link>
                    <div class="clear"></div>
                </li>
            </ul>
        </div>  
        <div class="clainfo" v-else-if="activeValue == '2'">
            <ul>
                <li v-for="ins in 5">
                    <router-link :to="{path: '/course/id-'+864+'-cityid-'+4+'.html'}">
                        <span> 苏州智慧父母培训苏州智慧父母培训苏州智慧父母培训</span>
                        <label> 05-03</label>
                    </router-link>
                    <div class="clear"></div>
                </li>
            </ul>
        </div> 
        <div class="clainfo" v-else-if="activeValue == '3'">
            <ul>
                <li v-for="ins in 5">
                    <router-link :to="{path: '/news/id-'+64+'-cityid-'+43+'.html'}">
                        <span>广州钢管舞培训多少钱广州钢管舞培训多少钱广州钢管舞培训多少钱</span>
                        <label> 05-08</label>
                    </router-link>
                    <div class="clear"></div>
                </li>
            </ul>
        </div> 
        <div class="clainfo" v-else>
            <ul>
                <li v-for="ins in 5">
                    <router-link :to="{path: '/index/'+123+'.html'}">
                        <span>问答测试问答测试问答测试问答测试问答测试</span>
                        <label> 05-17</label>
                    </router-link>
                    <div class="clear"></div>
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return{
            title: '问答列表页',
            activeValue: '1',
            all: 1000, //数据总条数
            pagesize: 15,  //每页多少条
            page: 0, // 总共多少页
            flage: 1, //当前页
            topage: null,
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
.queanws{
    width: 100%;
    margin-top: 55px;
    margin-bottom: 70px !important;
    .first-p{
        margin-top 70px;
        font-size: 16px;
        line-height: 30px;
        font-weight: bold;
        padding: 0px 25px;
        background-color: #eaeaea;
    }
    .wenda{
        height: 27px;
        padding: 5px 25px;
        background-color: #ff4040;
        img{
            float: left;
            height: 100%;
        }
        p{
            width: 78%;
            font-size: 19px;
            color: #fff;
            letter-spacing: 2px;
            font-weight: bold;
            line-height: 30px;
            text-align: center;
            float: left;
        }
        .wenda-right{
            float: right;
            height: 100%;
        }
    }
    .main-content{
        padding: 0px 25px;
        ul{
            position: relative;
            margin: 10px 0px 0px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e5e5e5;
            .wenda-first-li{
                width: 73%;
                float: left;
                h3{
                    height: 19px;
                    overflow: hidden;
                }
                p{
                    height: 32px;
                    margin-top: 5px;
                    overflow: hidden;
                }
            }
            .wenda-second-li{
                width: 25%;
                float: right;
                text-align: center;
                position: absolute;
                bottom: 10px;
                right: 0px;
                span{
                    font-weight: bold;
                    line-height: 18px;
                }
                & span:nth-child(3){
                    color: #e60012;
                }
            }
        }
    }
    .tese{
        padding: 10px 25px;
        ul{
            width: 100%;
            li{
                float: left;
                width: 24%;
                height: 18px;
                line-height: 18px;
                border-right: 1px solid #000;
                text-align: center;
                font-size: 17px;
                font-weight bold;
            }
            li:nth-last-child(){
                border: 0;
            }
            .active{
                color: #ff4040;
                padding-bottom: 0.05rem;
            }
        }
    }
    .clainfo{
        padding: 0px;
       ul{
            padding: 0px 20px;
            li{
                padding-top: 10px;
                a{
                    font-size: 14px ;
                    span{
                        width: 80%;
                        display: block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        float left;
                    }
                    label {
                        float: right;
                    }
                }
                
            }
       }
    }
}
</style>

