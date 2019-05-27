<template>
    <!-- 关于我们 -->
    <div class="meabout box" v-title v-bind:data-title="title">
       <div class="content-bottom" deep="0">
            <ul>
                <li>平台简介</li>
                <p>
                    91求学网隶属于上海求学网络科技有限公司，是一家专注于教育资源整合，融合最新培训动态，学习咨询，在线远程教育等多种功能于一身的一站式学习平台。
                    总部坐落于上海国际时尚教育中心内，依托上海国际时尚教育整体浓重的教育氛围与教育资源，通过东方教育集团以及全国众多大型教育知名品牌的资源共享和模式创新，
                    集聚形成富有特色，有规模，有底蕴的一站式学习平台。平台致力于为全国教育行业提供战略规划、品牌推广、教育资讯发布和教育行业交流等方便配套服务，
                    从而推动全国教育行业的成功发展。并自成立以来，本着诚信、实事求是、为两个文明建设服务的宗旨，以大力发展教育培训事业为己任，努力提供真实的机构及课程信息、
                    老师资源、有效的评价体系，从而推动形成透明、公正、诚信、安全的教育培训环境。
                </p>
            </ul>
            <ul>
                <li>企业文化</li>
                <p>态度决定行为，行为培养性格，性格决定命运</p>
            </ul>
            <ul>
                <li>经营理念</li>
                <p>
                    做优秀的企业和做杰出的人一样，要么绝色倾城，要么领袖群伦。
                    <br data-filtered="filtered">这不是野心，而是一个负责任的企业应有的意识。
                    <br data-filtered="filtered">诚心的魅力,合作不变心
                    <br data-filtered="filtered">我们要有感恩之心，我们要由衷地向我们所有的合作伙伴深表感激，因为我们的成长也来自您的支持
                    <br data-filtered="filtered">我们要有赞赏之心，我们要由衷地赞赏所有的合作伙伴，您们表现出来的友好与合作精神令人欣慰。</p>
            </ul>
            <ul>
                <li>平台优势</li>
                <p>
                    91求学网总部位于上海，现已经开通上海、北京、广州、深圳、武汉、重庆、成都、南昌等几十余家直营分站，成
                    <br data-filtered="filtered">立了上海、广州、深圳等五家分公司，目前已经与超过500家机构进行合作，向用户提供600多个类别的数万种培
                    <br data-filtered="filtered">训课程。91求学网已成为教育培训市场动态的风向标，是行业从业者和参加培训者的重要参考平台。
                </p>
            </ul>
            <ul>
                <li>平台服务</li>
                <p>
                    机构服务
                    <br data-filtered="filtered">以提供招生宣传、战略规划、品牌推广、教育资讯等服务，协助更多的培训机构扩大招生量、开拓市场、建立品牌
                    <br data-filtered="filtered">学员服务
                    <br data-filtered="filtered">有效帮助学员查询、比较、选择合适的培训机构、培训课程、培训老师，学员可通过在线报名、预约试听、留言咨
                    <br data-filtered="filtered">询等形式订课。
                </p>
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
import homehead from '@/components/head/homeHead'
import homefoot from '@/components/foot/homefoot'
export default {
    data() {
        return{
            title: '关于我们',
            // banner列表
            imgList:[
            {src: 'http://www.91qiux.com/attachment/focus/1541728975fqgrt.jpg',name:'上海优路教育',sid:'23'},
            {src: 'http://www.91qiux.com/attachment/focus/15341295619qwkj.jpg',name:'上海优路教育',sid:'243'},
            {src: 'http://www.91qiux.com/attachment/focus/1541728844xd1rw.jpg',name:'上海优路教育',sid:'253'},
            ],
        }
    },
    components: {
        homehead,
        homefoot
    }
}
</script>
<style lang="stylus" scoped>
.meabout{
    width 100%;
        .content-bottom{
            float: right;
            width: 100%;
            padding: 0px 0.32rem 0.5rem;
            box-sizing: border-box;
            border: 1px solid #dcdcdc;
            -webkit-box-sizing: border-box;
            ul{
                width: 100%;
                margin-top: 0.4rem;
                li{
                    color: #434547;
                    font-size: 0.4rem;
                    font-weight: bold;
                    padding-bottom: 0.27rem;
                    border-bottom: 1px solid #dcdcdc;
                }
                p{
                    color: #878787;
                    padding-top: 0.35rem;
                    line-height: 0.54rem;
                    font-size: 0.3rem;
                }
            }
        
    }
    
}
</style>


