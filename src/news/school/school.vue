<template>
    <!-- 机构首页 -->
    <div class="school box" v-title v-bind:data-title="title">
        <!-- 推荐课程 -->
        <div class="school-course">
            <h2>推荐课程</h2>
            <div class="school-content">
                <ul class="left" v-for="ins in 4" :key="ins">
                    <li>
                        <router-link :to="{path:'/course/id-'+14101+'-cityid-'+3+'.html'}">
                            <img src="http://www.91qiux.com/attachment/information/201902/pre_15509146777ceio.jpg" title="" alt=""/>
                        </router-link>
                    </li>
                    <p>
                        <router-link :to="{path:'/course/id-'+14101+'-cityid-'+3+'.html'}">深圳雅思培训班</router-link>
                    </p>
                </ul>
                <div class="clear"></div>
            </div>
        </div>
        <!-- 关键词 -->
        <div class="main-content" >
            <ul :class="{'showul':tobottom}">
                <li v-for="(mtem,mindex) in mainList" :id="mtem.id" :key="mindex" @click="getmainid(mindex)">
                    <router-link to="" >{{mtem.name}}</router-link>
                </li>
                <span :class="{'tobottom':tobottom}" @click="tobottom = !tobottom"></span>
                 <div class="clear"></div>
            </ul>
        </div>
        <!-- 课程 -->
        <div class="sch-class" >
            <div class="main-div" v-for="(mtem,mindex) in mainList" :id="mtem.id" :key="mindex" :class="{ showclass: mtem.id == selectEnglish }" >
                <div class="div-left">
                    <router-link :to="{path:'/course/id-'+14101+'-cityid-'+3+'.html'}">
                        <img src="http://www.91qiux.com/attachment/information/201902/pre_15509146777ceio.jpg"  title="深圳雅思培训班" alt="深圳雅思培训班"/>
                    </router-link>
                </div>
                <div class="div-right">
                    <ul>
                        <li>{{mtem.name}}</li>
                        <li>教学点：<span class="span-num">11</span> 个</li>
                        <li class="time">开班时间：<span>滚动开班</span></li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <!-- 学校简介 -->
        <div>
            <div class="schoolinfo">
                <h2>学校简介</h2>
            </div>
            <div class="second-div">
                <p>
                    <span>
                        美联国际教育集团，前身为美联英语，创立于2006年，2016年品牌全新升级，成为跨境教育品牌，分别于深圳、北京、洛杉矶设立总部，线上线下双平台，旗下子品牌包括：美联英语、
                        美联出国考试、美联...<router-link :to="{name:'contactus'}">查看详情>></router-link>
                    </span>
                </p>
            </div>
        </div>
        
        <!-- 校区分布 -->
        <div class="xiaoqu">
            <div class="xiaoqu-firstdiv">
                <span>校区分布</span>
                <p>Campus distribution</p>
            </div>
            <div class="xiaoqu-seconddiv" :class="{'isshow':isshow}">
                <ul>
                    <li v-for="ins in 5">
                        <h2>深圳美联英语宏发中心</h2>
                        <p>深圳市宝安区宏发中心大厦东面1-2楼</p>
                        <span>
                            <router-link :to="{path:'/school/'+'12'+'/schoolinfo-id-'+'1234'+'.html'}">乘车路线</router-link>
                        </span>
                    </li>
                </ul>
            </div>
            <p class="showall" @click="changexq">
                <span>{{showallxq}}</span>
            </p>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return{
            title:'机构首页',
            tobottom: false,
            showallxq: '【显示全部校区】',
            isshow: false,  // 是否显示全部校区
            // 关键词列表
            mainList:[
                 {   name:'常州美联英语',id:'1',
                    sch:[
                        {img:'http://www.91qiux.com/attachment/information/201902/pre_1551253249josv5.jpg', course:'常州青少年英语培训班',school:'常州美联英语'},
                    ]
                },
                {   name:'上海美联英语',id:'2',
                    sch:[
                        {img:'http://www.91qiux.com/attachment/information/201902/pre_1551253249josv5.jpg', course:'上海青少年英语培训班',school:'上海美联英语'},
                    ]},
                {   name:'少儿英语',id:'3',
                    sch:[
                        {img:'http://www.91qiux.com/attachment/information/201902/pre_1550560810ne7k7.jpg', course:'上海青少年英语培训班',school:'上海美联英语'},
                    ]},
                {   name:'少儿英语',id:'4',
                    sch:[
                        {img:'http://www.91qiux.com/attachment/information/201902/pre_1550979796zebsa.jpg', course:'上海青少年英语培训班',school:'上海美联英语'},
                    ]
                },
                {   name:'少儿英语',id:'5',
                    sch:[
                        {img:'http://www.91qiux.com/attachment/information/201902/pre_1550979796zebsa.jpg', course:'上海青少年英语培训班',school:'上海美联英语'},
                    ]
                },
            ],
            mainValue:'0',  //选择哪个关键词
            selectEnglish:'1',

        }
    },
    methods:{
        getmainid(num){
            this.mainValue = num;
            this.selectEnglish = num + 1;
            console.log(this.selectEnglish)
        },
        changexq() {
            this.isshow = !this.isshow;
            this.showallxq = this.isshow == false ? '【显示全部校区】' : '【收起部分校区】';
        }
    }
}
</script>
<style lang="stylus" scoped>
.school{
    width: 100%;
    .school-course{
        padding: 0px 0.3rem 0.3rem;
        h2{
            color: #31a9fc;
            position: relative;
            padding-left: 10px;
            font-size: 0.5rem;
            border-left: 2px solid #31a9fc;
            font-weight:bold;
        }
        .school-content{
            margin-top 15px;
            border-bottom: 5px solid #f0eff5;
            ul{
                width: 45%;
                margin:0 8px;
                li{
                    height: 2.4rem;
                }
                p{
                    font-size: 0.4rem;
                    height: 1rem;
                    line-height: 1rem;
                    overflow: hidden;
                    text-align: center;
                    a{
                        font-weight: bold;
                    }
                }
            }
        }
    }
    .main-content{
        padding: 0.4rem 0.7rem;
        position: relative;
        ul{
            overflow: hidden;
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
    .sch-class{
        .main-div{
            margin-bottom: 0.3rem;
            padding-left: 20px;
            display: none;
            .div-left{
                float:left;
                width: 45%;
                margin-right: 0.65rem;
            }
            .div-right{
                width: 48%;
                padding: 0.1rem 0px;
                float left;
                ul{
                    li{
                        color: #4a4a4a;
                        font-size: 0.4rem;
                        margin-top: 0.1rem;
                        line-height 20px;
                        display: block;
                        overflow hidden;
                        white-space nowrap;
                        text-overflow ellipsis;
                        .span-num{
                            color: #e61439;
                            font-weight: 600;
                            font-size: 0.45rem;
                        }
                    }
                    .time{
                        color: #D0D0D0;
                        font-size: 0.3rem;
                        margin-top: 0.3rem;
                        font-weight: 600;
                        letter-spacing: 0.04rem;
                    }
                }
            }

        }
        .showclass{
            display:block;
        }
    }
    .schoolinfo{
        padding: 0px 0.3rem 0.3rem;
        h2{
            color: #31a9fc;
            position: relative;
            padding-left: 10px;
            font-size: 0.5rem;
            border-left: 2px solid #31a9fc;
            font-weight:bold;
        }
    }
    .second-div{
        padding: 0px 0.3rem;
        border-bottom: 5px solid #f0eff5;
        p{
            padding: 0px 0px 0.4rem;
            line-height: 0.55rem;
            font-size: 0.3rem;
            color: #646464;
            text-indent: 35px;
            a{
                color: #646464;
            }
        }
    }
    .xiaoqu{
        padding: 0px 0.3rem 0.3rem;
        border-bottom: 10px solid #f0eff5;
        .xiaoqu-firstdiv{
            color: #31a9fc;
            text-align: center;
            padding: 0.5rem 0px;
            span{
                font-size: 0.5rem;
                font-weight: 600;
            }
            p{
                font-weight: 600;
                font-size: 0.24rem;
            }
        }
        .xiaoqu-seconddiv{
            overflow: hidden;
            height: 3rem;
            ul{
                margin-bottom: 0.2rem;
                li{
                    width: 43%;
                    float left;
                    padding: 0.5rem 0.2rem;
                    text-align: center;
                    border-radius: 10px;
                    border: 1px solid #dcdcdc;
                    margin-bottom: 5px;
                    h2{
                        width: 100%;
                        height: 0.5rem;
                        line-height: 0.5rem;
                        overflow: hidden;
                        font-size: 0.4rem;
                        margin-bottom: 0.15rem;
                    }
                    p{
                        height: 0.6rem;
                        line-height: 0.6rem;
                        overflow: hidden;
                        color: #aaaaaa;
                        font-size: 0.33rem;
                        margin-bottom: 0.3rem;
                    }
                    span{
                        font-size: 0.32rem;
                        border-radius: 6px;
                        border: 1px solid #31a9fc;
                        padding: 0.03rem 0.4rem 0.06rem;
                        a{color: #31a9fc;}
                        
                    }
                }
                li:nth-child(2n+1){
                    margin-right 10px;
                }
            }
        }
        .isshow{
            height auto;
            min-height 3rem;
        }
        .showall{
            font-size: 0.35rem;
            text-align: center;
            padding: 0.4rem;
            span{
                color: #848484;
                position: relative;
            }
            span:after{
                left: 50%;
                top: 0.45rem;
                width: 0.21rem;
                content: '';
                height: 0.21rem;
                margin-left: -0.08rem;
                position: absolute;
                font-weight: normal;
                transform: rotate(135deg);
                border-top: 2px solid #999;
                border-right: 2px solid #999;
            }
        }

    }
}
</style>


