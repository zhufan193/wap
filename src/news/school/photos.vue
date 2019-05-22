<template>
    <!-- 环境介绍 -->
    <div class="photos box" v-title v-bind:data-title="title">
        <h2>
            教学相册
        </h2>
        
        <ul>
            <li v-for="(item,index) in imgList" :key="index" @click="getbigimg(item.url)">
                <img :src="item.url" >
            </li>
            <div class="clear"></div>
        </ul>
        <div class="big-firstdiv" :class="{'showdiv':showdiv}" @click="showdiv = !showdiv">
            <div @click="showdiv = !showdiv">
                <img :src="bigimg" @click="showdiv = !showdiv">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            title: '环境介绍',
            bigimg: '',
            showdiv: false,
            imgList:[
                {url: 'http://www.91qiux.com/attachment/album/201810/1539747860jhumk.jpg'},
                {url: 'http://www.91qiux.com/attachment/album/201810/1539747884l9soy.jpg'},
                {url: 'http://www.91qiux.com/attachment/album/201810/1539747860jhumk.jpg'},
                {url: 'http://www.91qiux.com/attachment/album/201810/1539747860jhumk.jpg'},
            ]
        }
    },
    methods:{
        getbigimg(url) {
            this.showdiv = !this.showdiv;
            this.bigimg = url;
        }
    }
}
</script>
<style lang="stylus" scoped>
.photos{
    padding: 0px 0.3rem 0.3rem;
    border-bottom: 10px solid #f0eff5;
    h2{
        color: #31a9fc;
        position: relative;
        padding-left: 10px;
        font-size: 0.5rem;
        border-left: 2px solid #31a9fc;
        font-weight:bold;
    }
    .big-firstdiv{
        position: fixed; 
        top: 0px; 
        left: 0px; 
        background: rgba(0, 0, 0, 0.7); 
        z-index: 999; 
        width: 100%; 
        height: 100%; 
        display: none;
        div{
            position: absolute; 
            top: 168px; 
            left: 25px;
            img{
                border: 5px solid rgb(255, 255, 255); 
                width: 320px;
            }
        }
    }
    .showdiv{
        display block;
    }
    ul{
        margin-left: -5px;
        li{
            width: 45%;
            height: 3.4rem;
            float: left;
            margin: 10px 5px;
        }
    }
}
</style>

