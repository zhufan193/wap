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
            <div v-if="showcla == 1" class="dt-content">
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
            <div v-else class="learn">
                <div>
                    <p>托福综合口语怎么考<br><br><br>	
                        托福综合口语怎么考?考生一般都会主动了解综合题的考试形式，我们把最后四个Task叫为综合题。由于每个题型有固定的套路，所以我们需要针对每个题型进行一对一的复习。
                        <br><br><br>	<br><br>	<br><br>	 <br><br><br>	
                        第一是Campus Situations，这类题型说的就是Task 3和Task 5，就是校园生活类题型。Task 3是考生先观看一遍校园公告或者公开信讲述校园将要发生的一个意外，
                        并分析和给出理由关于这个意外。然后就是学校里的学生进行对话，对话有两个方案，考生自己选一个。之后考生有30秒的准备时间和60秒的回答时间，概括阅读中提到的主要内容，
                        以及选择一个方案进行说明和讲解。Task 5是一段对话，内容是生活遇到困难，有两个相对应的解决方案，然后考生有20秒的准备时间和60秒的回答时间。与第三题不同的是，
                        在考生复述完听力中的概况之后，需要增加自己的个人建议，帮助听力中遇到困难的人从两个解决方案中选择一个，并给出理由。
                        <br><br>	 <br><br><br>	
                        最后一个部分就是学术课程讨论，Academic Courses。就是对应Task 4和Task 6， 考生会听一个学术讲座，然后一般都是教师，所以语音也会有变化。所以要切记进行模拟训练时，
                        要添加不同声音的人。其中，Task 4是考生先看针对某一个学科术语的描述性文章(即阅读部分)，然后再听教授对这个术语进行的举例解释(即听力部分)。
                        之后，学生有30秒的准备时间和60秒的回答时间概括阅读和听力中的主要内容(不需要增加个人观点)。Task 6是考生直接听一篇讲座片段，教授先对某一现象做一个基本概述，
                        然后用两个对称的例子对现象进行解释。听完听力之后考生有20秒的准备时间和60秒的回答时间复述听力中的主要内容(同样不需要增加个人观点)。
                        <br><br>	 <br><br><br>	<br><br>
                        过相应的软件和联网分析，就能对数以万计的mRNA转录物进行分析。<br> 
                        1995年Velculescu等首先在《Science》杂志上发表了用SAGE技术对人胰腺基因表达 进行分析的结果。在分析的1000个标签中，95%以上的标签能代表独有的转录物。
                        转录水 平依标签出现频率（共840个）分为4类：①超过3次共380个，占45.2%；②出现3 次共45个，占5.4%；③出现两次共64个，占7.6%；④仅出现1次351个，占41.8%。 
                        所以SAGE能够直观地展示生物体基因表达的数量信息，对基因进行量化分析。同时用13 bp (9 bp +锚定酶的4个bp)分离了 4个未确定标签所对应的转录物，以此为探针对胰腺cDNA 
                        文库进行筛选，找到了一个以前未知特征的胰腺转录物。其结果表明SAGE技术不仅可以 对基因表达进行定量和定性分析，还可发现新的基因。<br> 
                        Kenji等用SAGE系统分析了非小细胞肺癌的转录特点，226 000个标记序列被分析， 代表了 43 254个转录物，其中142个转录物在肿瘤细胞中过度表达，比正常组织高出约10 倍，
                        Northern杂交证实有15个转录物在肿瘤细胞异常丰富，其
                    </p>
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
            <!-- 相关文章 -->
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
                        <li v-for="ins in 4">
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


