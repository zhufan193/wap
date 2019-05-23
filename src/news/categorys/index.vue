<template>
    <!-- 类别 -->
    <div class="category">
        <homehead/>
        <div class="classify box">
            <h2><span></span>栏目分类</h2>
            <span class="second-span" @click="showul = !showul"></span>
            <div class="clear"></div>
            <ul :class="{'showul':showul}">
                <li v-for="(tem,eind) in classList" :key="eind">
                    <router-link :to="{path:'/category/catid-'+tem.catid+'-cityid-'+tem.cityid+'.html'}">{{tem.name}}</router-link>
                </li>
            </ul>
        </div>
        <!-- 课程 -->
        <div class="course">
            <div class="course-div" v-for="ins in 7">
                <div class="c-first-div left">
                    <router-link :to="{path:'/course/id-'+18185+'-cityid-'+0+'.html'}">
                        <img src="http://www.91qiux.com/attachment/information/201905/pre_1557823429sjkzo.jpg" title="上海IGCSE课程培训" alt="上海IGCSE课程培训"/>
                    </router-link>
                </div>
                <div class="c-second-div left">
                    <ul>
                        <li class="first-li">
                            <router-link :to="{path:'/course/id-'+18185+'-cityid-'+0+'.html'}" title="上海IGCSE课程培训" alt="上海IGCSE课程培训">上海IGCSE课程培训</router-link>
                        </li>
                        <li class="second-li">
                            <router-link :to="{path:'/school/'+1288+'/'}" title="上海菠萝在线" alt="上海菠萝在线">上海菠萝在线</router-link>
                        </li>
                        <li class="third-li">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i></i>
                        </li>
                        <li class="four-li">
                            上课地点：
                            <router-link to="" >静安区恒丰路329号...</router-link>
                        </li>
                    </ul>
                </div>
                <div class="c-third-div left">
                    <li>
                        <a href="mqqwpa://im/chat?chat_type=wpa&amp;uin=1372575379&amp;version=1&amp;src_type=web&amp;web_src=http://www.91qiux.com"><span></span>请咨询</a>
                    </li>
                </div>
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

        <!-- 其他城市 -->
        <div class="city-tab">
            <mt-navbar v-model="selected">
            <mt-tab-item id="1">其他城市</mt-tab-item>
            <mt-tab-item id="2">城市分站</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell>
                <ul>
                    <li v-for="a in 5">
                        <router-link :to="{path:'/course/id-'+181+'-cityid-'+20+'.html'}">
                            广州外语培训
                        </router-link>
                    </li>
                </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell>
                <ul>
                    <li v-for="a in 5">
                        <router-link :to="{path:'/cityid/'+2+'.html'}">
                            广州培训网
                        </router-link>
                    </li>
                </ul>
                </mt-cell>
            </mt-tab-container-item>
            </mt-tab-container>
            <div class="clear"></div>
        </div>

        <!-- 相关机构 -->
        <div class="city-tab">
            <mt-navbar v-model="newsSelected">
            <mt-tab-item id="1">相关机构</mt-tab-item>
            <mt-tab-item id="2">相关新闻</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="newsSelected">
            <mt-tab-container-item id="1">
                <mt-cell>
                <ul>
                    <li class="news-li" v-for="(stem,sindex) in schList" :key="sindex">
                        <router-link :to="{path:'/school/'+stem.sid}">
                            {{stem.name}}
                        </router-link>
                    </li>
                    <div class="clear"></div>
                </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell>
                <ul>
                    <li class="news-li" v-for="a in 5">
                        <router-link to="">
                            广州培训网
                        </router-link>
                    </li>
                </ul>
                </mt-cell>
            </mt-tab-container-item>
            </mt-tab-container>
            <div class="clear"></div>
        </div>
        <homefoot/>
    </div>
</template>
<script>
import homehead from '@/components/head/homeHead'
import homefoot from '@/components/foot/homefoot'
export default {
    data(){
        return{
            showul: false,
            selected: '1',  // 其他城市
            newsSelected: '1',  //相关新闻
            all: 100000, //数据总条数
            pagesize: 15,  //每页多少条
            page: 0, // 总共多少页
            flage: 1, //当前页
            topage: null,
            // 栏目分类
            classList:[
                {name:'少儿英语培训',catid:'12',cityid:'0'},
                {name:'少儿英语培训',catid:'123',cityid:'0'},
                {name:'少儿英语培训',catid:'124',cityid:'0'},
                {name:'少儿英语培训',catid:'125',cityid:'0'},
                {name:'少儿英语培训',catid:'126',cityid:'0'},
            ],
            // 相关机构
            schList:[
                {name:'广州外语培训',sid:'12'},
                {name:'广州外语培训',sid:'132'},
                {name:'广州外语培训',sid:'142'},
                {name:'广州外语培训',sid:'162'},
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
            this.$router.push('/category/catid-'+12+'-cityid-'+123+'-page-'+this.flage+'.html');
        },
        // 下一页
        toright() {
            this.flage = Number(this.flage);
            this.flage += 1;
            this.$router.push('/category/catid-'+12+'-cityid-'+123+'-page-'+this.flage+'.html');
        },
        gotopage() {
            if(this.topage > this.page){
                this.topage = null; 
                return this.$toast.fail('已超过最大页数');
            }else{
                this.flage = this.topage;
                this.topage = null;
                this.$router.push('/category/catid-'+12+'-cityid-'+123+'-page-'+this.flage+'.html');
            }
        },
        // 调用接口获取列表数据
        getDate() {
        }
    },
    components:{
        homehead,
        homefoot
    }
}
</script>
<style lang="stylus" scoped>
.category{
    width: 100%;
    .classify{
        position: fixed;
        z-index: 10;
        top: 68px;
        background-color: #fff;
        width: 100%;
        h2{
            color: #e61439;
            font-size: 0.43rem;
            text-align: center;
            padding: 0px 70px 0px 20px;
            span{
                float: left;
                width: 0.85rem;
                height: 0.58rem;
                margin-right: 0.18rem;
                display: block;
                background: url(../../assets/bg/yuan.jpg) no-repeat center/100% 100%;
            }
        }
        .second-span:after{
            right: 9%;
            top: 0.1rem;
            width: 0.21rem;
            content: '';
            height: 0.21rem;
            margin-left: -0.08rem;
            position: absolute;
            font-weight: normal;
            transform: rotate(135deg);
            border-top: 2px solid #e61439;
            border-right: 2px solid #e61439;
        }
        ul{
            height: 1.89rem;
            min-height: 0px;
            overflow: hidden;
            margin-top: 10px;
            padding: 0px 0px 0px 20px;
            li{
                float: left;
                height: 0.59rem;
                font-size: 0.32rem;
                overflow: hidden;
                line-height: 0.5rem;
                text-align: center;
                border-radius: 10px;
                margin-right: 21px;
                margin-bottom: 0.351rem;
                border: 1px solid #e61439;
                a{
                    color: #e61439;
                    display: block;
                    padding: 2px 10px;
                }
            }
        }
        .showul{
            height:auto !important;
        }
    }
    .course{
        margin-top: 4.1rem;
        .course-div{
            position: relative;
            padding: 0.6rem;
            border-bottom: 5px solid #f0eff5;
            .c-first-div{
                width: 3.5rem;
                height: 2rem;
                overflow: hidden;
            }
            .c-second-div{
                margin-left: 0.4rem;
                ul{
                    width: 159px;
                    li{
                        margin-bottom:5px;
                    }
                    .first-li{
                        font-weight: bold;
                        font-size: 0.4rem;
                        letter-spacing: 0.03rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .second-li{
                        width: 72%;
                        font-size: 0.3rem;
                        letter-spacing: 0.02rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        a{
                            color: #616161;
                        }
                    }
                    .third-li{
                        margin-bottom: 0px;
                        margin-top: 0.2rem;
                        span{
                            width: 0.38rem;
                            height: 0.38rem;
                            display: inline-block;
                            background: url(../../assets/bg/xing.jpg) no-repeat center/80% 80%;
                        }
                        i{
                            width: 0.38rem;
                            height: 0.38rem;
                            display: inline-block;
                            background: url(../../assets/bg/huix.jpg) no-repeat center/80% 80%;
                        }
                    }
                    .four-li{
                        color: #969595;
                        font-size: 0.27rem;
                        margin-bottom: 0px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        margin-top: 7px;
                    }
                }
            }
            .c-third-div{
                right: 0.2rem;
                width: 24%;
                color: #e61439;
                font-weight: bold;
                text-align: center;
                position: absolute;
                margin-top: 1rem;
                li{
                    font-size: 0.3rem;
                    a{
                        color: #e61439;
                        span{
                            width: 0.3rem;
                            height: 0.3rem;
                            margin-right: 0.08rem;
                            display: inline-block;
                            vertical-align: middle;
                            background: url(../../assets/bg/love.jpg) no-repeat center/100% 100%;
                        }
                    }
                }
            }
        }
    }

    .city-tab{
      width: 100%;
      /deep/ .mint-cell-wrapper{
          background-image: linear-gradient(180deg, #fff, #fff 50%, transparent 50%) !important;
      }
      /deep/ .mint-navbar{
          border-bottom:2px solid #ccc;
      }
      /deep/ .mint-cell-value{
        width: 100%;
      }
      /deep/ .mint-tab-container{
          border-bottom: 10px solid #f0eff5;
      }
      ul{
        width: 100%;
        padding: 0.2rem;
        li{
            width: 25%;
            float: left;
            overflow: hidden;
            font-size: 0.36rem;
            white-space: nowrap;
            text-align: center;
            margin-bottom: 0.15rem;
            text-overflow: ellipsis;
          a{
            color: #848484;
          }
          
        }
        .news-li{
            width: 33%;
            float: left;
            z-index: 1000;
            overflow: hidden;
            font-size: 0.36rem;
            text-align: center;
            white-space: nowrap;
            margin-bottom: 0.15rem;
            text-overflow: ellipsis;
        }
      }
    }
}
</style>

