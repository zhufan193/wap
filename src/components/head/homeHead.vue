<template>
    <!--首页头部 -->
  <header class="header">
    <slot name="left"></slot>
    <div class="box headall">
        <div class="head-left">
            <router-link to="">
                <img src="@/assets/headimg/logo.gif"/>
            </router-link>
        </div>
        <!-- 城市 -->
        <div class="city ">
            <div class="city-top">
                <span @click="ishow = !ishow">{{cityname}}</span>
            </div>
        </div>

        <!-- 更换城市 -->
        <div class="sjymfl-tb-top-div" :class="{'showdiv':ishow}">
              <div class="city-first">
                <p>请选择城市：</p>
              </div>
              <div class="city-tab">
                  <mt-navbar v-model="selected">
                    <mt-tab-item id="1">热门城市</mt-tab-item>
                    <mt-tab-item id="2">ABCD</mt-tab-item>
                    <mt-tab-item id="3">EFGHJ</mt-tab-item>
                    <mt-tab-item id="4">KLMNP</mt-tab-item>
                    <mt-tab-item id="5">QRSTW</mt-tab-item>
                    <mt-tab-item id="6">XYZ</mt-tab-item>
                  </mt-navbar>
                  <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                      <mt-cell>
                        <ul>
                            <li>
                              <span>A</span>
                              <p>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                              </p>
                            </li>
                        </ul>
                      </mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                      <mt-cell>
                        <ul>
                            <li>
                              <span>E</span>
                              <p>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                              </p>
                            </li>
                        </ul>
                      </mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                      <mt-cell>
                        <ul>
                            <li>
                              <span>G</span>
                              <p>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                              </p>
                            </li>
                        </ul>
                      </mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="4">
                      <mt-cell>
                        <ul>
                            <li>
                              <span>X</span>
                              <p>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                              </p>
                            </li>
                        </ul>
                      </mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="5">
                      <mt-cell>
                        <ul>
                            <li>
                              <span>Z</span>
                              <p>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                              </p>
                            </li>
                        </ul>
                      </mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="6">
                      <mt-cell>
                        <ul>
                            <li>
                              <span>A</span>
                              <p>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                                <router-link to="">安庆</router-link>
                              </p>
                            </li>
                        </ul>
                      </mt-cell>
                    </mt-tab-container-item>
                  </mt-tab-container>
              </div>
        </div>
        
        <!-- 搜索 -->
        <div class="head-right">
            <div class="head-right-first">
                <div>
                    <i class="iconfont icon-iconfontzhizuobiaozhun22" @click="search"></i>
                    <input v-model="searchname" class="div-input" type="text" placeholder="请输入课程名称"/>
                </div>
            </div>
        </div>
    </div>
    <div class="clear"></div>
  </header>
</template>

<script>
  export default {
      props:{
        title: '',
      },
      data () {
        return {
          searchname: '',
          cityname: '总站',
          selected: '1',
          ishow: false,  // 是否显示更换城市
        }
      },
      methods:{
        search() {
          console.log("搜索")
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/variable.styl"
  .header
    top: 0px;
    left: 0px;
    width: 100%;
    position: fixed;
    z-index: 100;
    .headall
        top: 0px;
        left: 0px;
        width: 100%;
        height: 1.5rem;
        margin: 0px auto;
        position: relative;
        background-color: #fff;
        padding: 12px 30px 0 20px;
        .head-left{
            width: 27%;
            overflow: hidden;
            float left
            img{
              width: 100%;
              height: 100%;
            }
        }
        .city{
            top: 0.48rem;
            position: absolute;
            .city-top{
              span{
                left: 3.28rem;
                width: 100%;
                z-index: 100;
                text-align: center;
                position: relative;
                cursor: pointer;
                top: 6px;
                color: #e61439;
                font-size: 0.3rem;
              }
            }
        }
        .sjymfl-tb-top-div{
            top: 100%;
            left: 0px;
            width: 100%;
            display: none;
            text-align: left;
            line-height: 0px;
            position: absolute;
            z-index: 9999;
            padding: 0px 0.27rem 0.1rem 0.27rem;
            background-color: #f0eff5;
            border: 1px solid lightgray;
            .city-first{
              height: 30px;
              font-size: 0.27rem;
              font-weight: bold;
              line-height: 30px;
              margin-bottom: 8px;
              border-bottom: 1px dotted #666;
            }
            .city-tab{
              width: 84%;
              
              /deep/ .mint-cell{
                background-color: #f0eff5;
              }
              /deep/ .mint-navbar{
                background-color: #f0eff5;
              }
              ul{
                position: absolute;
                left: 0px;
                li{
                  span{
                    width: 5%;
                    font-size: 0.27rem;
                    line-height: 0.5rem;
                    text-align: center;
                    margin-bottom: 0.1rem;
                  }
                  p{
                    width: 100%;
                    padding: 0px 0.1rem;
                    line-height: 0.6rem;
                    border-radius: 3px;
                    display: inline-block;
                    vertical-align: middle;
                    margin: 0px 0.11rem 0.13rem 0px;
                    a{
                      text-align: center;
                      display: block;
                      color: #000;
                      font-size: 0.25rem;
                      padding: 0.036rem 0.25rem;
                      border-radius: 0.1rem;
                      height: 0.6rem;
                      line-height: 0.55rem;
                      float: left;
                    }
                  }
                }
              }
            }

        }
        .showdiv{
          display block
        }
        .head-right{
          left: 3rem;
          top: -0.9rem;
          width: 40%;
          position: relative;
          padding-right: 3rem;
          .head-right-first{
            position: relative;
              div{
                i{
                  position: relative;
                  top: 45px;
                  left: -62px;
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
                  border: 1px solid #e61439;
                }
              }
          }
        }

     
</style>


 












 
