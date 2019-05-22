<template>
    <!-- 联系我们 -->
    <div class="area box" v-title v-bind:data-title="title">
        <!-- 培训课程 -->
        <div class="px-course">
            <h2>上海致学教育</h2>
            <p deep="2">
                <span>学校介绍：</span>
                上海致学教育成立于2004年，专业从事中学生学习能力养成与学科辅导。由华东师范大学教授、博士与市级教研员共同创建。致学秉承让学习变得简单高效愉悦的理念，融合中西方教育教学理论，
                依托专业教学团队，立足1对6小组分层培优教学模式，营造专业、高效的学习情境，助推学生达成学业梦想！历经十多年教学研究与实践，上海致学教育现已成长为中国中小学小组分层培优品牌，
                专业提供中学学科辅导、学习效能特训、心理咨询、家庭教育指导、互联网教育、软件开发等项目的综合性服务。
                <br data-filtered="filtered">
                1对6小组分层培优模式，是在原教育部课题研究成果的基础上，历经10余年探索而逐步形成的。实践表明，这种教学模式因其兼备个性化、科学性、建构性、愉悦性等多种优势，受到学员、家长、
                老师和社会的一致好评。已经为近10万名学员提高了学业成绩，达成升学梦想。
                <br data-filtered="filtered">
                与其他社会培训机构相比，致学1对6小组分层培优模式的专业化水平堪称国内翘楚。核心专家团队既具有扎实的分层教学理论研究功底，也有厚实的分层教学实践经验积累。
                借助理论探索和实践推进的双轮驱动，致学将不断提升专业化办学水平，用高质量的个性化教育服务，积极承担教育强国的社会责任。<br data-filtered="filtered">
            </p>
        </div>
        <!-- 培训类型 -->
        <div class="leix">
            <p>
                <span>培训类型：</span>
                <router-link :to="{path: '/category/catid-'+tem.catid+'-cityid-'+tem.cid+'.html'}" v-for="(tem,ind) in schoolList " :key="ind">{{tem.name}},</router-link>
            </p>
        </div>
        <!-- 培训课程 -->
        <div class="train-course">
            <p>
                <span>培训课程：</span>上海致学教育提供
                <router-link :to="{path:'/course/id-'+cour.cid+'-cityid-'+cour.cityid+'.html'}" v-for="(cour,cind) in courseList" :key="cind">{{cour.name}},</router-link>
            </p>
            <ul>
                <li>
                    <span>学校地址：</span>
                    上海普陀区中山北路3553号伸大厦
                </li>
                <li>
                    <span>
                        咨询电话：
                        <span>400-000-9192</span> 
                        咨询QQ 
                        <span>1372575379</span>
                    </span>
                </li>
            </ul>
        </div>
        <!-- 推荐课程 -->
        <div class="arealist">
            <h2>推荐课程</h2>
            <div class="tuijian">
                <ul v-for="(rem,rind) in recomList" :key="rind">
                    <li>
                        <router-link :to="{path:'/course/id-'+rem.cid+'-cityid-'+rem.cityid+'.html'}">
                            <img src="http://www.91qiux.com/attachment/information/201902/pre_1550717391u0mqp.jpg" alt="">
                        </router-link>
                    </li>
                    <h2>
                        <router-link :to="{path:'/course/id-'+rem.cid+'-cityid-'+rem.cityid+'.html'}">{{rem.name}}</router-link>
                    </h2>
                </ul>
                <div class="clear"></div>
            </div>
        </div>
        
        <!-- 师资介绍 -->
        <div class="teachers">
            <h2>师资介绍</h2>
            <h2>教学环境</h2>
            <div class="teacher-photos">
                <router-link :to="{name:'teachers'}" title="杨院长" alt="">
                    <ul class="firstul">
                        <li class="firstli left">
                            <img src="http://www.91qiux.com/attachment/document/201810/1539747744eogca.jpg" alt="">
                        </li>
                        <li class="secondli left">
                            <p style="font-weight: bold;">杨院长</p>
                            <p>
                                受关注：39 (2017-09-22)
                            </p>
                            <p></p>
                        </li>
                        <div class="clear"></div>
                    </ul>
                </router-link>

                <ul class="secondul">
                    <router-link :to="{name:'photos'}">
                        <li class="left">
                            <img src="http://www.91qiux.com/attachment/album/201810/pre_1539748137wbksc.jpg" title="" alt="">
                        </li>
                    </router-link>
                    <router-link :to="{name:'photos'}">
                        <li class="left">
                            <img src="http://www.91qiux.com/attachment/album/201810/pre_1539748127uzta6.png" title="" alt="">
                        </li>
                    </router-link>
                    <div class="clear"></div>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            title: '联系我们',
            // 培训类型
            schoolList:[
                {name:'中小学',catid:'123',cid:'23'},
                {name:'中学',catid:'123',cid:'234'},
                {name:'大学',catid:'123',cid:'235'},
            ],
            // 培训课程
            courseList:[
                {name:'上海致学初二全科辅导班',cityid:'23',cid:'123'},
                {name:'上海致学初一全科辅导班',cityid:'123',cid:'234'},
                {name:'上海致学初三全科辅导班',cityid:'123',cid:'235'},
            ],
            // 推荐课程
            recomList:[
                {name:'上海致学教育小学全科1',cityid:'23',cid:'123'},
                {name:'上海致学教育小学全科2',cityid:'123',cid:'234'},
                {name:'上海致学教育小学全科3',cityid:'123',cid:'235'},
            ],
        }
    }
}
</script>
<style lang="stylus" scoped>
.area{
    width 100%;
    .px-course{
        padding: 0px 5px;
        border-bottom: 5px solid #f0eff5;
        padding-bottom: 5px;
        h2{
            color: #454545;
            font-size: 0.4rem;
            text-align: center;
        }
        p{
            color: #454545;
            font-size: 0.35rem;
            line-height: 0.6rem;
            margin-top: 0.4rem;
            span{
                font-weight: bold;
                color: #24a4fb;
            }
        }
    }
    .leix{
        padding: 0px 0.3rem;
        border-bottom: 5px solid #f0eff5;
        p{
            color: #454545;
            font-size: 0.35rem;
            line-height: 0.6rem;
            margin-top: 0.4rem;
            span{
                font-weight: bold;
                color: #24a4fb;
            }
            a{
                margin-right: 5px; 
                font-size: 16px; 
                color: #898989;
            }
        }
    }
    .train-course{
        padding: 0px 0.3rem;
        border-bottom: 5px solid #f0eff5;
        P{
            color: #454545;
            font-size: 0.35rem;
            line-height: 0.6rem;
            margin-top: 0.4rem;
            span{
                font-weight: bold;
                color: #24a4fb;
            }
            a{
                margin-right: 5px; font-size: 16px; color: #898989;
            }
        }
        ul{
            padding: 0.3rem 0px;
            li{
                color: #454545;
                font-size: 0.35rem;
                text-align: center;
                padding-bottom: 0.3rem;
                span{
                    font-weight: bold;
                    color: #24a4fb;
                }
            }
        }
    }
    .arealist{
        padding: 20px 0px 5px 10px;
        h2{
            color: #31a9fc;
            position: relative;
            padding-left: 10px;
            font-size: 0.5rem;
            border-left: 2px solid #31a9fc;
            font-weight:bold;
        }
        .tuijian{
            padding: 10px 0;
            ul{
                width: 45%;
                float left;
                margin-right: 17px;
                li{
                    height: 2.4rem;
                }
                h2{
                    border: 0;
                    padding: 0;
                    font-size: 0.4rem;
                    height: 1rem;
                    line-height: 1rem;
                    overflow: hidden;
                    text-align: center;
                    a{
                        font-weight bold;
                    }
                }
            }
        }

    }
    .teachers{
        padding: 10px 5px;
        h2{
            float: left;
            color: #31a9fc;
            position: relative;
            margin-left: 0.3rem;
            font-size: 0.5rem;
            border-left: 2px solid #31a9fc;
            padding-left: 10px;
        }
        .teacher-photos{
            .firstul{
                height: 3rem;
                margin-top: 35px;
                padding: 0 5px;
                overflow: hidden;
                .firstli{
                    width: 29%;
                    img{
                        border-radius: 64%;
                    }
                }
                .secondli{
                    width: 65%;
                    line-height: 0.6rem !important;
                    margin-left: 0.5rem !important;
                    p{
                        color: #373737;
                        font-size: 0.35rem;
                        margin-top: 0px !important;
                    }
                }
            }
            .secondul{
                padding-left: 10px;
                li{
                     width: 46.4%;
                     margin-right 10px;
                }
            }
        }
    }

}
</style>
