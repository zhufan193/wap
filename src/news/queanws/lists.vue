<template>
    <!-- 问答列表页面 -->
    <div class="queanws box" v-title v-bind:data-title="title">

    </div>
</template>

<script>
export default {
    data() {
        return{
            title: '问题列表页',
        }
    },
}
</script>
<style lang="stylus" scoped>
.queanws{
    width: 100%;
}
</style>

