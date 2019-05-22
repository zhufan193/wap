<template>
    <!-- 校区分布 -->
    <div class="area box" v-title v-bind:data-title="title">
        <div class="arealist">
            <h2>校区列表</h2>
            <div>
                <ul v-for="ins in 5">
                    <li>
                        <h2>静安共康校区</h2>
                        <p>
                            <span>校区地址：</span>
                            共和新路46
                        </p>
                        <span class="yuanwen">
                            <router-link :to="{path:'/school/'+12+'/schoolinfo-id-'+123+'.html'}">
                                阅读原文
                            </router-link>
                        </span>
                    </li>
                </ul>
                <!-- 分页 -->
                <div>
                    分页未写
                </div>
                <div class="clear"></div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return{
            title: '校区分布',

        }
    }
}
</script>
<style lang="stylus" scoped>
.area{
    width 100%;
    .arealist{
        padding: 0px 0px 5px 10px;
        border-bottom: 10px solid #f0eff5;
        h2{
            color: #31a9fc;
            position: relative;
            padding-left: 10px;
            font-size: 0.5rem;
            border-left: 2px solid #31a9fc;
            font-weight:bold;
        }
        ul{
            width: 45%;
            padding: 5px;
            border-radius: 15px;
            margin: 10px 5px 0 0;
            border: 1px solid #d2d2d2;
            display: inline-block;
            li{
                h2{
                    border: 0;
                    height: 0.8rem;
                    text-align: left;
                    line-height: 0.8rem ;
                    color #000;
                }
                p{
                    padding-left:10px;
                    text-indent: 0px ;
                    line-height: 0.4rem;
                }
                .yuanwen{
                    border: 1px solid #31a9fc;
                    background-color: #31a9fc;
                    width: 35%;
                    display: block;
                    height: 0.6rem;
                    margin: 0.2rem 10px;
                    text-align: center;
                    line-height: 0.6rem;
                    border-radius: 10px;
                    a{
                        color: #fff;
                    }
                    
                }
            }

        }
    }

}
</style>
