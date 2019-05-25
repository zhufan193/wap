<template>
    <!-- 问答详情页面 -->
    <div class="queanwsInfo box" v-title v-bind:data-title="title">
        <p class="first-p">
            当前位置：
            <router-link :to="{name:'/'}">
                首页
            </router-link>&gt;
            <router-link :to="{name:'/'}">
                抚州出国英语培训
            </router-link>&gt;
            <router-link to="">
                上海托福 阅读一共多少题
            </router-link>
        </p>

        <!-- 课程特色 -->
        <div class="tese">
            <ul>
                <li :class="{active: activeValue == '1'}" @click="activeValue = '1'">网站新闻</li>
                <li :class="{active: activeValue == '2'}" @click="activeValue = '2'">机构文章</li>
                <div class="clear"></div>
            </ul>
        </div>
            
    </div>
</template>

<script>
export default {
    data() {
        return{
            title: '问题列表页',
            activeValue: '1'
        }
    }
}
</script>
<style lang="stylus" scoped>
.queanwsInfo{
    width: 100%;
    padding: 0px 25px;
    overflow: hidden;
    .first-p{
        
    }
}
</style>

