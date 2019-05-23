<template>
    <!-- 联系我们 -->
    <div class="area box" v-title v-bind:data-title="title">
        <!-- 培训课程 -->
        <div class="px-course">
            
        </div>
        <!-- 培训类型 -->
        <div class="leix">
            <h2>上海致学教育</h2>
            <p>
                <span>培训类型：</span>
                <router-link :to="{path: '/category/catid-'+tem.catid+'-cityid-'+tem.cid+'.html'}" v-for="(tem,ind) in schoolList " :key="ind">{{tem.name}},</router-link>
            </p>
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

    .leix{
        padding: 0px 0.3rem;
        border-bottom: 5px solid #f0eff5;
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
            a{
                margin-right: 5px; 
                font-size: 16px; 
                color: #898989;
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
