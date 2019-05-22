<template>
    <div class="schoolhead">
        <div class="first-div">
            <div class="logo left">
                <router-link to="">
                    <img src="http://www.91qiux.com/attachment/face/201810/1538964210jukb1.jpg"/>
                </router-link>
            </div>
            <!-- 搜索 -->
            <div class="head-right left">
                <div class="head-right-first">
                    <div>
                        <i class="iconfont icon-iconfontzhizuobiaozhun22" @click="searchname"></i>
                        <input v-model=searchvalue  class="div-input" type="text" placeholder="搜索课程名称"/>
                    </div>
                </div>
            </div>
            <router-link :to="{path:'/'}">
                <div class="last-div left"></div>
            </router-link>
            <div class="clear"></div>
        </div>
        <!-- 导航 -->
        <div class="school-nav box" :class="{'showallul':tobottom}">
            <ul>
                <li> <router-link :to="{path:'/school/'+sid}">机构首页</router-link></li>
                <li> <router-link :to="{path:'/school/'+sid+'/course.html'}">课程信息</router-link></li>
                <li> <router-link :to="{path:'/school/'+sid+'/area.html'}">校区分布</router-link></li>
                <li> <router-link :to="{path:'/school/'+sid+'/contactus.html'}">联系我们</router-link></li>
                <li> <router-link :to="{path:'/school/'+sid+'/news.html'}">学习动态</router-link></li>
                <li> <router-link :to="{path:'/school/'+sid+'/students.html'}">学习资讯</router-link></li>
                <li> <router-link :to="{path:'/school/'+sid+'/newsclass.html'}">班级信息</router-link></li>
                <li> <router-link :to="{path:'/school/'+sid+'/teachers.html'}">师资介绍</router-link></li>
                <li> <router-link :to="{path:'/school/'+sid+'/album.html'}">环境介绍</router-link></li>
                <li> <router-link :to="{path:'/school/'+sid+'/demand.html'}">在线报名</router-link></li>
                <div class="clear"></div>
            </ul>
            <span :class="{'tobottom':tobottom}" @click="tobottom = !tobottom"></span>
        </div>

        <!-- banner -->
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(tem,tindex) in imgList" :key="tindex">
                    <router-link to="">
                        <img :src="tem.src"/>
                    </router-link> 
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            searchvalue: '',
            sid: '12',
            tobottom: false,
            imgList:[
                {src:'http://www.91qiux.com/attachment/uphtml/20180716/cffc22a44a0cd8e340d8f611e8b0a7eb.jpg'},
            ],
        }
    },
    methods:{
        searchname(){

        }
    }
}
</script>

<style lang="stylus" scoped>
.schoolhead{
    width 100%
    .first-div{
        padding: 20px 10px 10px;
        .logo{
            width: 25%;
            height: 0.76rem;
            margin-right: 0.15rem
        }

        .head-right{
          left: 0rem;
          top: -18px;
          width: 40%;
          position: relative;
          margin-left 5px;
          padding-right: 85px;
          .head-right-first{
            position: relative;
              div{
                i{
                  position: relative;
                  top: 25px;
                  left: 25px;
                }
                .div-input{
                  width: 100%;
                  border: none;
                  height: 0.8rem;
                  outline: none;
                  padding-top: 2px;
                  font-size: 0.3rem;
                  border-radius: 10px;
                  padding-left: 1.5rem;
                  padding-right: 0.5rem;
                  background-color: #eeeeee;
                }
              }
          }
        }
        .last-div{
            width: 0.715rem;
            height: 0.715rem;
            cursor: pointer;
            border-radius: 50%;
            background: url(../../assets/bg/back.png) no-repeat center/85% 85%;
        }
    }
    .school-nav{
        overflow: hidden;
        position: relative;
        background-color: #f0eff5;
        height: 0.84rem;
        ul{
            li{
                width: 23%;
                float: left;
                font-size: 0.3rem;
                text-align: center;
                line-height: 0.9rem;
            }
        }
        span{
            right: 4%;
            top: 0.15rem;
            width: 0.63rem;
            height: 0.6rem;
            cursor: pointer;
            position: absolute;
            border-radius: 50%;
            background-color: #66c1ff;
        }
        span:after{
            right: 23%;
            top: 0.18rem;
            width: 0.2rem;
            content: '';
            height: 0.2rem;
            position: absolute;
            font-weight: normal;
            transform: rotate(225deg);
            border-top: 2px solid #FFF;
            border-right: 2px solid #FFF;
        }
        .tobottom:after{
            transform: rotate(136deg);
            border-top: 2px solid #FFF;
            border-right: 2px solid #FFF;
            margin: -1px 1px 0 0 ;
        } 
    } 
    .showallul{
        height: auto;
    }
    .banner{
      width 100%
      height 100px
      
      a img{
        width 100%
        height 100%
      }
    } 
}
</style>

