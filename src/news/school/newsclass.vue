<template>
    <!-- 班级信息 -->
    <div class="learn box" v-title v-bind:data-title="title">
        <!-- 培训信息 -->
        <div class="learninfo">
            <h2>深圳美联英语班级信息</h2>
            <ul>
                <li v-for="ins in 5">
                    <router-link to="">
                        深圳哪个少儿英语培训机构排名
                        <label>2019-03-16</label>
                    </router-link>
                </li>
                <div class="clear"></div>
            </ul>
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
            title:'班级信息',
        }
    },
    created(){
    }
    
}
</script>
<style lang="stylus" scoped>
.learn{
    width 100%;
    .learninfo{
        padding: 0px 0.3rem;
        border-bottom: 10px solid #f0eff5;
        margin-top: 5px;
        h2{
            font-size: 0.38rem;
            text-align: center;
            margin-bottom: 0.4rem;
        }
        ul{
            padding 10px 0;
            li{
                padding-top: 0.3rem;
                a{
                    color: #434343;
                    font-size: 0.33rem;
                    label{
                        float: right;
                        color: #434343;
                    }
                }
            }
        }
    }

}
</style>


