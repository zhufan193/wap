<template>
    <!-- 问答详情页面 -->
    <div class="queanwsInfo box" v-title v-bind:data-title="title">
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
        <div class="content">
            <h2>测试</h2>
            测试
        </div>
        <!-- 课程特色 -->
        <div class="tese">
            <ul>
                <li :class="{active: activeValue == '1'}" @click="activeValue = '1'">网站新闻</li>
                <li :class="{active: activeValue == '2'}" @click="activeValue = '2'">机构文章</li>
                <div class="clear"></div>
            </ul>
        </div>
        <div class="clainfo" v-if="activeValue == '1'">
            <ul>
                <li v-for="ins in 5">
                    <router-link :to="{path: '/news/id-'+12+'-cityid-'+123+'.html'}">
                        <span>呼和浩特职场英语培训学校</span>
                        <label> 05-06</label>
                    </router-link>
                    <div class="clear"></div>
                </li>
            </ul>
        </div>  
        <div class="clainfo" v-else>
            <ul>
                <li v-for="ins in 5">
                    <router-link :to="{path: '/school/'+864+'/document-id-'+46453+'.html'}">
                        <span>机构文章机构文章</span>
                        <label> 05-07</label>
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
            title: '问答详情页',
            activeValue: '1'
        }
    }
}
</script>
<style lang="stylus" scoped>
.queanwsInfo{
    width: 100%;
    padding: 0px;
    overflow: hidden;
    .first-p{
        margin-top 70px;
        font-size: 16px;
        line-height: 30px;
        font-weight: bold;
        padding: 0px 25px;
        background-color: #eaeaea;
    }
    .content{
        text-align: left;
        h2{
            text-align: center;
            margin: 10px auto;
            font-size: 1.5em;
        }
    }
    .tese{
        padding: 0.39rem 0.7rem;
        ul{
            li{
                float: left;
                color: #454545;
                cursor: pointer;
                font-size: 0.4rem;
                text-align: center;
                width: 50%;
                font-weight bold;
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

