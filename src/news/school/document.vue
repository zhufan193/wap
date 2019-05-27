<template>
    <!-- 动态详情 -->
    <div class="document box" v-title v-bind:data-title="title">
        <schoolhead/>
        <div class="main-content">
            <!-- 当前位置 -->
            <div class="break">
                <p>位置：
                    <router-link :to="{name:'school'}">上海致学教育</router-link>&gt;
                    <router-link :to="{name:'news'}">学习动态</router-link>&gt;
                    <router-link :to="{path:'/school/'+12+'/document-id-'+123+'.html'}">上海长宁区五年级下册数学练习哪家专业</router-link>
                </p>
                <p class="second-p">
                    时间：<span>2019-05-19</span>　<span>15:04:09</span>　
                    来源：<span>SHzhixuejiaoyu</span>
                </p>
            </div>
            <!-- 课程介绍，学习资料 -->
            <div class="stu">
                <ul>
                    <li  @click="showcla = 1">
                        <span :class="{'showcla':showcla == 1}">课程介绍</span>
                    </li>
                    <li  @click="showcla = 2">
                        <span :class="{'showcla':showcla == 2}">学习资料</span>
                    </li>
                </ul>
            </div>
            <!-- 培训动态内容 -->
            <div v-show="showcla == 1" class="dt-content">
                <div>
                    <p style="text-align:center;">
                        <span style="font-size:24px;color:#E53333;"><strong>小学全科辅导</strong></span> 
                    </p>
                    <p>
                        <span style="font-size:18px;line-height:2;">对学生家长在小学阶段的困惑</span> 
                    </p>
                    <p>
                        <span style="font-size:18px;line-height:2;">厌学，对学习提不起兴趣</span> 
                    </p>
                    <p>
                        <span style="font-size:18px;line-height:2;">学习方法不对 效率不高 习惯不好</span> 
                    </p>
                    <p>
                        <span style="font-size:18px;line-height:2;">青春叛逆期 有心事 又不愿沟通</span> 
                    </p>
                    <p>
                        <span style="font-size:18px;line-height:2;">致学教育专为小学生定制的模式</span> 
                    </p>
                    <p>
                        <img src="http://www.91qiux.com/attachment/image/20190221/20190221104225_36934.jpg" alt="小学课程" title="小学课程"> 
                        <img src="http://www.91qiux.com/attachment/image/20190221/20190221104225_52718.jpg" alt="小学阶段的困惑" title="小学阶段的困惑"> 
                        <img src="http://www.91qiux.com/attachment/image/20190221/20190221104226_50019.jpg" alt="专为小学生定制的模式" title="专为小学生定制的模式"> 
                        <img src="http://www.91qiux.com/attachment/image/20190221/20190221104226_97156.jpg" alt="致学教学六大特色" title="致学教学六大特色"> 
                        <img src="http://www.91qiux.com/attachment/image/20190221/20190221104227_35604.jpg" alt="优选师资" title="优选师资"> 
                    </p>            
                </div>
                <div>
                    <p class="toxq">详情请进入 
                        <a href="/school/307/">上海致学教育</a> 
                        查看<br>文章来源： 
                        <a href="/course/id-11457-cityid-9.html">上海致学教育小学全科辅导</a>
                        <br>咨询电话：<a href="javascript:;">400-000-9192 </a>咨询QQ：
                        <span href="javascript:void(0);" id="qq_a_img">
                            <a target="_blank" href="mqqwpa://im/chat?chat_type=wpa&amp;uin=1372575379&amp;version=1&amp;src_type=web&amp;web_src=http://www.91qiux.com&amp;Site=上海致学教育">
                                <img border="0" src="http://wpa.qq.com/pa?p=2:1372575379:41" alt="点击这里给我发消息" title="点击这里给我发消息">
                            </a>
                        </span>
                    </p>
                </div>
            </div>
            <!-- 学习资料 -->
            <div v-show="showcla == 2" class="learn">
                <div>
                    <p>谭颖<br>
谭颖电商课程研发经理/电商课程资深讲师<br>
7年设计工作经验 6年教学经验<br>
谭颖电商课程研发经理/电商课程资深讲师<br>
7年设计工作经验 6年教学经验<br>
教学理念:老师不应该专教书；他的责任是教人做人。学生不应当专读书，他的责任是学习人生之道。<br>
设计经验：曾荣获中国国际印刷创意设计大赛铜奖和2012中国包装创意大赛优秀奖，拥有PS中级证书。先后就职郑州圣火品牌设计公司和金洲事业有限公司，担任平面设计师，擅长logo设计、包装设计和折页设计。曾参与时尚百年、天盛、锤子网咖logo以及闺蜜、先卓食品麦芽糖包装等设计项目。</p>
                </div>
                <div>
                    <ul class="sjxxpxdtnr-xxzl-ul">
                        <li style="margin-right: 2rem;">
                            <router-link :to="{path:'/school/307/demand.html'}" style="background-color: #036EF3;" >立即报名</router-link>
                        </li>
                        <li>
                            <a href="mqqwpa://im/chat?chat_type=wpa&amp;uin=1372575379&amp;version=1&amp;src_type=web&amp;web_src=http://www.91qiux.com&amp;Site=上海致学教育">在线咨询</a>
                        </li>
                        <div class="clear"></div>
                    </ul>
                </div>
            </div>
            <!-- 校区分布 -->
            <div class="schoolfb">
                <div>
                    <span class="firstspan">校区分布</span>
                    <span class="secondspan">Related schools</span>
                    <span></span>

                    <ul>
                        <li v-for="ins in 4">
                            <router-link :to="{path:'/school/'+307+'/schoolinfo-id-'+3947+'.html'}"> 1杨浦校区</router-link>
                        </li>
                        <div class="clear"></div>
                    </ul>
                </div>
            </div>
            <!-- 师资介绍 教学环境 -->
            <div class="div-teacher">
                <div class="div-top">
                    <div class="first-div">
                        <span>师资介绍</span>|
                        <span>教学环境</span>
                        <span class="xian"></span>
                        <router-link :to="{name:'teachers'}">
                            更多 &gt;
                        </router-link>
                    </div>
                    <ul class="szjs-top-ul">
                        <li>
                            <router-link :to="{name:'teachers'}">
                                <div>
                                    <img src="http://www.91qiux.com/attachment/document/201810/1539747744eogca.jpg">
                                </div>
                                <p>师资介绍</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'photos'}">
                                <div>
                                    <img src="http://www.91qiux.com/attachment/album/201810/pre_1539748137wbksc.jpg">
                                </div>
                                <p>教学环境</p>
                            </router-link>
                        </li>
                        <div class="clear"></div>
                    </ul>
                </div>
            </div>
            <!-- 课程分类 -->
            <div class="books">
                <div class="first-top">
                    <div class="second-top">
                        <span @click="bookid = 1">相关文章</span>|
                        <span @click="bookid = 2">相关机构</span>|
                        <span @click="bookid = 3">课程分类</span>
                    </div>

                    <ul v-if="bookid == 1">
                        <li v-for="ins in 4">
                            <router-link :to="{path:'/news/'+12848+'-cityid-'+9+'.html'}" title="" alt="">上海虹桥四年级下册数学补习费用</router-link>
                        </li>
                    </ul>
                    <ul v-else-if="bookid == 2">
                        <li v-for="ins in 4">
                            <router-link :to="{path:'/school/'+1294+'/'}" title="" alt="">上海虹桥四年级下册数</router-link>
                        </li>
                    </ul>
                    <ul v-else>
                        <li v-for="ins in 8">
                            <router-link :to="{path:'/category/catid-'+337+'-cityid-'+9+'.html'}" title="" alt="">小学</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <homefoot/>
    </div>
</template>
<script>
import schoolhead from '@/components/head/schoolhead';
import homefoot from '@/components/foot/homefoot'
export default {
    data() {
        return{
            title: '动态详情',
            showcla: 1,
            bookid: 1,
        }
    },
    components:{
        schoolhead,
        homefoot
    }
}
</script>
<style lang="stylus" scoped>
.document{
    width 100%;
    .main-content{
        .break{
            padding: 0px 0.3rem;
            p{
                height: 0.5rem;
                line-height: 0.5rem;
                overflow: hidden;
                margin: 0.5rem 0px 0.2rem;
                font-size: 0.3rem;
            }
            .second-p{
                text-align: center;
                font-size: 0.25rem;
                margin: 0.2rem auto;
            }
        }
        .stu{
            width: 100%;
            height: 1.518rem;
            line-height: 1.518rem;
            background-color: #f0f0f0;
            ul{
                li{
                    float: left;
                    margin-left: 0.32rem;
                    margin-right: 0.32rem;
                    span{
                        font-weight: 600;
                        font-size: 0.35rem;
                        border-radius: 8px;
                        padding: 0.2rem 0.54rem;
                        background-color: #ffffff;
                    }
                    .showcla{
                        color: #fff;
                        background-color: #66c1ff;
                    }
                }
                
            }
        }
        .dt-content{
            color: #373737;
            padding: 0px 0.3rem 0.7rem;
            margin-top: 0.2rem;
            border-bottom: 5px solid #f0eff5;
            p{
                font-size: 0.3rem;
                line-height: 0.6rem;
            }
            .toxq{
                margin-top: 0.3rem;
                a{
                    color: #FF3C00;
                    font-size: 0.32rem;
                    font-weight: 600;
                    img{
                        width: 1.375rem;
                    }
                }
            }
        }
        .learn{
            color: #373737;
            padding: 0px 0.3rem 0.7rem;
            margin-top: 0.2rem;
            border-bottom: 5px solid #f0eff5;
            p{
                font-size: 0.3rem;
                line-height: 0.6rem;
            }
            ul{
                margin-top: 0.5rem;
                text-align: center;
                li{
                    display: inline-block;
                    padding: 0.15rem 0px;
                    a{
                        color: #fff;
                        font-size: 0.3rem;
                        border-radius: 25px;
                        padding: 0.15rem 0.54rem;
                        background-color: #F96210;
                    }
                }
            }
        }
        .schoolfb{
            padding: 0px 0.3rem;
            border-bottom: 5px solid #f0eff5;
            margin-top: 10px;
            span{
                display: inline-block;
            }
            .firstspan{
                width: 1.58rem;
                color: #FA500E;
                font-size: 0.36rem;
                font-weight: bold;
                margin-right: 0.1rem;
            }
            .secondspan{
                color: #8E8E8E;
                font-size: 0.28rem;
            }
            ul{
                padding-top: 0.54rem;
                padding-bottom: 0.27rem;
                li{
                    float: left;
                    width: 45%;
                    height: 0.7rem;
                    overflow: hidden;
                    line-height: 0.7rem;
                    text-align: center;
                    border: 1px solid lightgray;
                    margin: 10px 7px;
                }
            }
        }
        .div-teacher{
            padding: 0px 0.3rem;
            border-bottom: 5px solid #f0eff5;
            .div-top{
                margin-top: 0.5rem;
                .first-div{
                    width: 100%;
                    height: 0.6rem;
                    color: #FF5501;
                    font-size: 0.36rem;
                    margin-left: -0.13rem;
                    font-weight: bold;
                    span{
                        padding: 0 0.14rem;
                        font-weight: bold;
                        display: inline-block;
                    }
                    .xian{
                        width: 42%;
                        margin: 0 0.1rem;
                        height: 0.2rem;
                        vertical-align: bottom;
                        border-top: 1px solid lightgray;
                    }
                    a{
                        color: #B1B1B1;
                        font-size: 0.28rem;
                    }
                }
                ul{
                    padding: 0.52rem 0.4rem;
                    li{
                        float: left;
                        width: 4rem;
                        height: 3.5rem;
                        overflow: hidden;
                        margin-right: 0.27rem;
                        background-color: #e6e6e6;
                        a{
                            div{
                                width: 100%;
                                height: 2.5rem;
                                overflow: hidden;
                            }
                            p{
                                color: #4F4F4F;
                                font-size: 0.35rem;
                                overflow: hidden;
                                line-height: 0.9rem;
                                height: 0.9rem;
                                text-align: center;
                                white-space: nowrap;
                                margin: 0px;
                            }
                        }
                    }
                }
            }
        }
        .books{
            padding: 0px 0.3rem;
            border-bottom: 5px solid #f0eff5;
            .first-top{
                padding: 0.4rem 0px;
                .second-top{
                    width: 100%;
                    height: 0.6rem;
                    color: #FF5501;
                    font-size: 0.36rem;
                    margin-left: -0.13rem;
                    font-weight: bold;
                    span{
                        padding: 0 0.14rem;
                        font-weight: bold;
                        display: inline-block;
                    }
                }
                ul{
                    margin-top: 0.3rem;
                    li{
                        margin-bottom: 0.2rem;
                        margin-left: 0.35rem;
                        font-size: 0.3rem;
                        position: relative;
                    }
                    li:before{
                        top: 30%;
                        left: -0.35rem;
                        width: 0.12rem;
                        height: 0.12rem;
                        content: '';
                        border-radius: 50%;
                        position: absolute;
                        background-color: #000;
                        border: #000;
                    }
                }
            }
        }
    }
}
</style>


