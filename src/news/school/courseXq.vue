<template>
    <!-- 课程详情 -->
    <div class="courseXq box" v-title v-bind:data-title="title">
        <div class="div-xq">
            <h2>深圳雅思培训班</h2>
            <ul>
                <li>
                    课程关键词 : 
                    <router-link to="">深圳雅思培训</router-link>
                    <router-link to="">深圳雅思考试培训</router-link>
                    <router-link to="">深圳出国英语培训</router-link>
                </li>
                <li>
                    课程价格：
                    <span>电询</span>
                </li>
                <li>上课班制：
                    <span>脱产班 业余班 工作日班</span>
                </li>
                <div class="kcjg-box">
                    <ul class="kcjg-left left">
                        <li>课程类型 ：<span>面授课程</span></li>
                        <li>课程周期 ：<span>1-3个月</span></li>
                    </ul>
                    <ul class="kcjg-right right">
                        <li class="yysx"><router-link to="">预约试学</router-link></li>
                        <li class="zxls">
                            <router-link to="">咨询老师</router-link></li>
                    </ul>
                    <div class="clear"></div>
                </div>
                <li>
                    上课地点 :
                    <span> 南山 </span>
                    <span> 宝安 </span>
                    <span> 龙华 </span>
                    <span> 福田 </span>
                    <span> 龙岗 </span>
                </li>
            </ul>
        </div>
        <!-- 课程特色 -->
        <div class="tese">
            <ul>
                <li :class="{active: activeValue == '1'}" @click="activeValue = '1'">课程特色</li>
                <li :class="{active: activeValue == '2'}" @click="activeValue = '2'">机构简介</li>
                <div class="clear"></div>
            </ul>
        </div>
        <!-- 课程简介 -->
        <div class="clainfo" v-if="activeValue == '1'">
            <h2>课程简介</h2>
            <p>COURSE INTRODUCTION</p>
            <div class="kcnr-box">
                <p>
                    <img src="http://www.91qiux.com/attachment/image/20190223/20190223173453_81420.jpg" alt="找到适合你的班型，重点、难点、短板，快速突破" title="找到适合你的班型，重点、难点、短板，快速突破">
                    <img src="http://www.91qiux.com/attachment/image/20190223/20190223173453_99408.jpg" alt="免费试听课" title="免费试听课">
                    <img src="http://www.91qiux.com/attachment/image/20190223/20190223173455_91654.jpg" alt="免费下载，雅思真题及学习资料" title="免费下载，雅思真题及学习资料">
                    <img src="http://www.91qiux.com/attachment/image/20190223/20190223173455_38656.jpg" alt="4大专属特权，是你通过最大的保障" title="4大专属特权，是你通过最大的保障">
                    <img src="http://www.91qiux.com/attachment/image/20190223/20190223173456_31072.jpg" alt="免费官方测评，报班之前先要了解自己的真实水平" title="免费官方测评，报班之前先要了解自己的真实水平">
                    <img src="http://www.91qiux.com/attachment/image/20190223/20190223173456_29930.jpg" alt="TA们一路指引你通关" title="TA们一路指引你通关"> 
                </p>
                <p>
                    <strong><span style="line-height:2;font-size:16px;font-weight: bold;">美联雅思VIP精品课程</span></strong><br>
                    <strong><span style="line-height:2;font-size:16px;font-weight: bold;">开设班次：雅思基础班（夯实基础），雅思强化班（技巧提升），雅思冲分班（高分冲刺）</span></strong><br>
                    <strong><span style="line-height:2;font-size:16px;font-weight: bold;">雅思单项提高班（弥补短板），雅思全程班（雅思7分突破），雅思点题班（圈划考点）</span></strong><br>
                    <strong><span style="line-height:2;font-size:16px;font-weight: bold;">找到适合你的班型，重点、难点、短板快速突破</span></strong>
                    <strong><span style="line-height:2;font-size:16px;"></span></strong> 
                </p>            
            </div>
        </div>
        <!-- 机构简介 -->
        <div class="schoolinfo" v-else>
            <h2>机构简介</h2>
            <p>SCHOOL INTRODUCTION</p>
            <div>
                <span>
                    美联国际教育集团，前身为美联英语，创立于2006年，2016年品牌全新升级，成为跨境教育品牌，分别于深圳、北京、洛杉矶设立总部，
                    线上线下双平台，旗下子品牌包括：美联英语、美联出国考试、美联留学、美联国际高中、立刻说（线上平台，涵盖成人英语、青少英语、出国考试及行业英语四大产品）。
                </span><br>
                <span>
                    如今，美联拥有100多家教学中心，全球团队达3000余人，其中教学、研发团队近千人，立志整合海内外教学资源，让中国中产人群与家庭通过轻松的学习，
                    能快速有效地提高英语口语、思维表达能力和出国考试成绩；让学生在中国也能接受原汁原味的英美高中教育；更帮助有志留学人士进入心仪的海外学府。
                    美联致力于让每个美好梦想都能实现，使更多中国面孔成为世界的中坚力量。</span><br>
                <span>
                    美联英语，专注体验式英语教育服务，是美联国际教育集团旗下重要的产线品牌，一直提倡“会用，才算会英语”。多年来，美联英语一直秉持体验式英语的教学理念，
                    以轻松灵活的教学方式，每年为全球3万余名学员提供专业、高质量的英语教育。美联英语更开创多种英语学习方法和课程，满足不同英语水平学员的切实需要，
                    让学员能够在职场、学校、生活上真正运用英语。
                </span><br>
                <span>培训项目：成人通用英语、商务实战英语、在线英语和雅思托福培训等。会用，才算会英语，现在立即咨询。</span><br>
                <span>个性化一对一辅导：中教辅导在美联成为SA，你的学习计划、学习进度、学习难点、与外交的沟通，都将由SA为您一一解决。</span><br>
                <span>设施配备：中心总面积接近3000平方米。中心环境保持美联英语一贯的高雅、整洁和现代化的装饰，浓厚的英语学习气氛充满着整个教学环境。中心设有欧洲风格的美联咖啡吧，
                    先进的网课教室和lab软件学习区，还有音效震撼的电影院，为学员们打造了一个舒适的学习环境。毗邻地铁，商业区，交通便利。
                    </span><br>            
            </div>
        </div>

        <div class="class-box">
            <router-link to="">
                <div class="kec">
                    <ul>
                        <li class="firstli left">
                            <h2>深圳雅思培训班</h2>
                            <p>美联雅思VIP精品课程开设班次：雅思基础班（夯实基础），雅思强化班（技巧提升），雅思冲分班（高分冲刺</p>
                        </li>
                        <li class="secondli right">
                            <img src="http://www.91qiux.com/attachment/information/201902/pre_15509146777ceio.jpg" alt="">
                        </li>
                        <div class="clear"></div>
                    </ul>
                </div>
            </router-link>
            <router-link to="">
                <div class="kec">
                    <ul>
                        <li class="firstli left">
                            <img src="http://www.91qiux.com/attachment/information/201902/pre_15507215514mi9h.jpg" alt="">
                        </li>
                        <li class="secondli right">
                            <h2>深圳出国英语培训课程</h2>
                            <p>雅思由韦博雅思高分教师与外籍教师执教，根据学生能力水平设计学习方案。配合在线翻转精练与外教沙龙的听说</p>
                        </li>
                        <div class="clear"></div>
                    </ul>
                </div>
            </router-link>
        </div>

        <!-- 相关新闻 -->
        <div class="city-tab">
            <mt-navbar v-model="newsSelected">
            <mt-tab-item id="1">相关新闻</mt-tab-item>
            <mt-tab-item id="2">学习资讯</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="newsSelected">
            <mt-tab-container-item id="1">
                <mt-cell>
                <ul>
                    <li v-for="a in 5">
                        <router-link to="">
                            深圳雅思培训哪个好
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
                            深圳雅思培训哪个好
                        </router-link>
                    </li>
                </ul>
                </mt-cell>
            </mt-tab-container-item>
            </mt-tab-container>
            <div class="clear"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            title:'课程详情',
            activeValue: '1', // 课程特色
            newsSelected: '1',
        }
    }
}
</script>
<style lang="stylus" scoped>
.courseXq{
    .div-xq{
        padding: 0px 0.34rem 0.34rem;
        border-bottom: 5px solid #f0eff5;
        h2{
            color: #1d1d1d;
            font-size: 0.4rem;
            letter-spacing: 0.03rem;
        }
        ul{
            margin-top: 0.2rem;
            li{
                overflow: hidden;
                color: #949494;
                font-size: 0.32rem;
                margin-bottom: 0.15rem;
                min-height: 0.45rem;
                padding-top 5px;
                height: auto;
                a{
                    color: #949494;
                    margin-right: 0.1rem;
                }
            }
            .kcjg-box{
                position: relative;
                .sjkcym-kcxq-top .kcjg-left{
                    width: 55%;
                }
                .sjkcym-kcxq-top .kcjg-right {
                    right: 0px;
                    bottom: 0px;
                    position: absolute;
                }
                .yysx {
                    width: 2.143rem;
                    text-align: center;
                    margin-right: 0.45rem;
                    border-radius: 10px;
                    border: 1px solid #31a9fc;
                    float left;
                }
                .zxls{
                    width: 2.143rem;
                    text-align: center;
                    border-radius: 10px;
                    background-color: #e6153a;
                    border: 1px solid #e6153a;
                    a{
                        color #fff;
                    }
                }
            }
        }
    }
    .tese{
        padding: 0.39rem 0.7rem;
        border-bottom: 3px solid #f0eff5;
        ul{
            li{
                float: left;
                color: #454545;
                cursor: pointer;
                font-size: 0.4rem;
                margin-right: 0.5rem;
            }
            .active{
                color: #31a9fc;
                padding-bottom: 0.05rem;
                border-bottom: 1px solid #31a9fc;
            }
        }
    }
    .clainfo{
        color: #484848;
        padding: 0.4rem 0.3rem 0.3rem;
        margin-bottom: 0.4rem;
        border-bottom: 3px solid #f0eff5;
        h2{
            font-weight: 500;
            font-size: 0.4rem;
            text-align: center;
        }
        p{
            font-size: 0.01rem;
            text-align: center;
            letter-spacing: 0.01rem;
            line-height: 20px;
        }
    }
    .schoolinfo{
        color: #484848;
        padding: 0.4rem 0.3rem 0.3rem;
        margin-bottom: 0.4rem;
        border-bottom: 3px solid #f0eff5;
        h2{
            font-weight: 500;
            font-size: 0.4rem;
            text-align: center;
        } 
        p{
            font-size: 0.01rem;
            text-align: center;
            letter-spacing: 0.01rem;
        }
        div{
            margin-top: 10px;
            line-height 15px;
        }
    }
    .class-box{
        .kec{
            padding: 0.3rem 0.3rem;
            ul{
                width: 100%;
                overflow: hidden;
                .firstli{
                    width: 54%;
                    padding-right: 10px;
                }
                .secondli{
                    width: 43%;
                }
                h2{
                    font-size: 14px;
                    margin-bottom: 0.2rem;
                    color: #484848;
                    letter-spacing: 0.03rem;
                    font-weight: bold;
                }
                p{
                    color: #6e6e6e;
                    line-height: 0.44rem;
                    font-size: 13px;
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
            width: 33%;
            float: left;
            z-index: 1000;
            overflow: hidden;
            font-size: 0.36rem;
            text-align: center;
            white-space: nowrap;
            margin-bottom: 0.15rem;
            text-overflow: ellipsis;
          a{
            color: #848484;
          }
          
        }
        .news-li{
            width: 25%;
            float: left;
            overflow: hidden;
            font-size: 0.36rem;
            white-space: nowrap;
            text-align: center;
            margin-bottom: 0.15rem;
            text-overflow: ellipsis;
        }
      }
    }
}
</style>


