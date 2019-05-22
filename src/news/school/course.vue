<template>
    <!-- 课程信息 -->
    <div class="course box" v-title v-bind:data-title="title">
        <div class="courselist">
            <h2>课程列表</h2>
            <div class="school-content">
                <ul class="left" v-for="ins in 4" :key="ins">
                    <li>
                        <router-link :to="{path:'/course/id-'+14101+'-cityid-'+3+'.html'}">
                            <img src="http://www.91qiux.com/attachment/information/201902/pre_15509146777ceio.jpg" title="" alt=""/>
                        </router-link>
                    </li>
                    <p>
                        <router-link to="">深圳雅思培训班</router-link>
                    </p>
                </ul>
                <div class="clear"></div> 
            </div>

            <!-- 分页 -->
            <div>
                分页未写
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            title: '课程信息',
        }
    }
}
</script>
<style lang="stylus" scoped>
.course{
    width 100%;
    .courselist{
        padding: 0px 0.3rem 0.3rem;
        border-bottom: 5px solid #f0eff5;
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

}
</style>

