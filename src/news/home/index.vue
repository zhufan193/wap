<template>
  <div class="word-cup" v-title v-bind:data-title="title">
    <HeaderTop/>
    <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(tem,tindex) in imgList" :key="tindex">
              <router-link :to="{path:'/school/'+tem.sid}">
                <img v-lazy="tem.src"/>
              </router-link> 
          </mt-swipe-item>
        </mt-swipe>
    </div>
    <!-- 培训机构 -->
    <div class="shcoolList">
        <ul>
            <li v-for="(ptem,pindex) in pxList" :key="pindex">
                <router-link :to="{path:'/category/catid-'+ptem.catid+'-cityid-'+ptem.cityid+'.html'}" title="语言培训" alt="语言培训">
                  {{ptem.name}}
                </router-link>
            </li>
            <div class="clear"></div>
        </ul>
    </div>
    <!-- 名校馆 -->
    <div class="goodSchool">
        <span>名校馆</span>
        <ul>
            <li v-for="(tem,tindex) in temList" :key="tindex">
                <router-link :to="{path:'/sch/'+tem.sid}">
                    <img v-lazy="tem.src"/>
                </router-link>
            </li>
            <div class="clear"></div>
        </ul>
    </div>
    <!-- 外语培训 -->
    <div class="englishlist">
        <span class="first-span">
          外语培训
        </span>
        <span @click="show0 = !show0">
          <i></i>
        </span>
        <div class="english-list">
            <ul :class="{'showul':show0}">
                <li v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{newcla:etem.id == selectEnglish}" @click="selectEnglish = etem.id">
                  <router-link to="">
                      {{etem.name}}
                  </router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <div>
            <div class="div-content" v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{showcla:etem.id == selectEnglish}">
            <ul v-for="(course,cindex) in etem.sch" :key="cindex">
                <li>
                    <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">
                        <img :src="course.img" />
                    </router-link>
                </li>
                <li class="second-li">
                    <p class="first-p">
                        <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">{{course.course}}</router-link>
                    </p>
                    <p class="second-p">
                        <span>培训学校</span>
                        <router-link :to="{path:'/school/'+course.sid+'/'}">{{course.school}}</router-link>
                    </p>
                </li>
                <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
    </div>

    <!-- 电脑培训 -->
    <div class="englishlist">
        <span class="first-span">
          电脑培训
        </span>
        <span @click="show1 = !show1">
          <i></i>
        </span>
        <div class="english-list">
            <ul :class="{'showul':show1}">
                <li v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{newcla:etem.id == selectPc}" @click="selectPc =  etem.id">
                  <router-link to="">
                      {{etem.name}}
                  </router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <div>
            <div class="div-content" v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{showcla:etem.id == selectPc}">
            <ul v-for="(course,cindex) in etem.sch" :key="cindex">
                <li>
                    <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">
                        <img :src="course.img" />
                    </router-link>
                </li>
                <li class="second-li">
                    <p class="first-p">
                        <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">{{course.course}}</router-link>
                    </p>
                    <p class="second-p">
                        <span>培训学校</span>
                        <router-link :to="{path:'/school/'+course.sid+'/'}">{{course.school}}</router-link>
                    </p>
                </li>
                <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
    </div>

    <!-- 资格考试培训 -->
    <div class="englishlist">
        <span class="first-span">
          资格考试培训
        </span>
        <span @click="show2 = !show2">
          <i></i>
        </span>
        <div class="english-list">
            <ul :class="{'showul':show2}">
                <li v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{newcla:etem.id == selectExam}" @click="selectExam = etem.id">
                  <router-link to="">
                      {{etem.name}}
                  </router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <div>
            <div class="div-content" v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{showcla:etem.id == selectExam}">
            <ul v-for="(course,cindex) in etem.sch" :key="cindex">
                <li>
                    <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">
                        <img :src="course.img" />
                    </router-link>
                </li>
                <li class="second-li">
                    <p class="first-p">
                        <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">{{course.course}}</router-link>
                    </p>
                    <p class="second-p">
                        <span>培训学校</span>
                        <router-link :to="{path:'/school/'+course.sid+'/'}">{{course.school}}</router-link>
                    </p>
                </li>
                <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
    </div>

    <!-- 中小学培训 -->
    <div class="englishlist">
        <span class="first-span">
          中小学培训
        </span>
        <span @click="show3 = !show3">
          <i></i>
        </span>
        <div class="english-list">
            <ul :class="{'showul':show3}">
                <li v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{newcla:etem.id == selectschool}" @click="selectschool = etem.id">
                  <router-link to="">
                      {{etem.name}}
                  </router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <div>
            <div class="div-content" v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{showcla:etem.id == selectschool}">
            <ul v-for="(course,cindex) in etem.sch" :key="cindex">
                <li>
                    <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">
                        <img :src="course.img" />
                    </router-link>
                </li>
                <li class="second-li">
                    <p class="first-p">
                        <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">{{course.course}}</router-link>
                    </p>
                    <p class="second-p">
                        <span>培训学校</span>
                        <router-link :to="{path:'/school/'+course.sid+'/'}">{{course.school}}</router-link>
                    </p>
                </li>
                <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
    </div>

    <!-- 文体艺术培训 -->
    <div class="englishlist">
        <span class="first-span">
          文体艺术培训
        </span>
        <span @click="show4 = !show4">
          <i></i>
        </span>
        <div class="english-list">
            <ul :class="{'showul':show4}">
                <li v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{newcla:etem.id == selectart}" @click="selectart = etem.id">
                  <router-link to="">
                      {{etem.name}}
                  </router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <div>
            <div class="div-content" v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{showcla:etem.id == selectart}">
            <ul v-for="(course,cindex) in etem.sch" :key="cindex">
                <li>
                    <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">
                        <img :src="course.img" />
                    </router-link>
                </li>
                <li class="second-li">
                    <p class="first-p">
                        <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">{{course.course}}</router-link>
                    </p>
                    <p class="second-p">
                        <span>培训学校</span>
                        <router-link :to="{path:'/school/'+course.sid+'/'}">{{course.school}}</router-link>
                    </p>
                </li>
                <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
    </div>

    <!-- 学历教育培训 -->
    <div class="englishlist">
        <span class="first-span">
          学历教育培训
        </span>
        <span @click="show5 = !show5">
          <i></i>
        </span>
        <div class="english-list">
            <ul :class="{'showul':show5}">
                <li v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{newcla:etem.id == selectjiaoyu}" @click="selectjiaoyu = etem.id">
                  <router-link to="">
                      {{etem.name}}
                  </router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <div>
            <div class="div-content" v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{showcla:etem.id == selectjiaoyu}">
            <ul v-for="(course,cindex) in etem.sch" :key="cindex">
                <li>
                    <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">
                        <img :src="course.img" />
                    </router-link>
                </li>
                <li class="second-li">
                    <p class="first-p">
                        <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">{{course.course}}</router-link>
                    </p>
                    <p class="second-p">
                        <span>培训学校</span>
                        <router-link :to="{path:'/school/'+course.sid+'/'}">{{course.school}}</router-link>
                    </p>
                </li>
                <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
    </div>

    <!-- 出国留学培训 -->
    <div class="englishlist">
        <span class="first-span">
          出国留学培训
        </span>
        <span @click="show6 = !show6">
          <i></i>
        </span>
        <div class="english-list">
            <ul :class="{'showul':show6}">
                <li v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{newcla:etem.id == selectother}" @click="selectother = etem.id">
                  <router-link to="">
                      {{etem.name}}
                  </router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <div>
            <div class="div-content" v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{showcla:etem.id == selectother}">
            <ul v-for="(course,cindex) in etem.sch" :key="cindex">
                <li>
                    <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">
                        <img :src="course.img" />
                    </router-link>
                </li>
                <li class="second-li">
                    <p class="first-p">
                        <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">{{course.course}}</router-link>
                    </p>
                    <p class="second-p">
                        <span>培训学校</span>
                        <router-link :to="{path:'/school/'+course.sid+'/'}">{{course.school}}</router-link>
                    </p>
                </li>
                <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
    </div>

    <!-- 职业技能培训 -->
    <div class="englishlist">
        <span class="first-span">
          职业技能培训
        </span>
        <span @click="show7 = !show7">
          <i></i>
        </span>
        <div class="english-list" >
            <ul :class="{'showul':show7}">
                <li v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{newcla:etem.id == selectfex}" @click="selectfex = etem.id">
                  <router-link to="">
                      {{etem.name}}
                  </router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <div>
            <div class="div-content" v-for="( etem,eindex) in engList" :key="eindex"  :id="etem.id" :class="{showcla:etem.id == selectfex}">
            <ul v-for="(course,cindex) in etem.sch" :key="cindex">
                <li>
                    <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">
                        <img :src="course.img" />
                    </router-link>
                </li>
                <li class="second-li">
                    <p class="first-p">
                        <router-link :to="{path:'/course/id-'+course.courseid+'-cityid-'+course.cityid+'.html'}">{{course.course}}</router-link>
                    </p>
                    <p class="second-p">
                        <span>培训学校</span>
                        <router-link :to="{path:'/school/'+course.sid+'/'}">{{course.school}}</router-link>
                    </p>
                </li>
                <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
    </div>
    <!-- 最新课程 -->
    <div class="city-tab">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">课程</mt-tab-item>
          <mt-tab-item id="2">动态</mt-tab-item>
          <mt-tab-item id="3">资讯</mt-tab-item>
          <mt-tab-item id="4">新闻</mt-tab-item>
          <mt-tab-item id="5">问答</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <mt-cell>
              <ul>
                  <li v-for="a in 5">
                      <router-link to="">
                        广州酒吧领舞培训班
                        <label>05-19</label>
                      </router-link>
                  </li>
              </ul>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell>
              <ul>
                  <li v-for="a in 5">
                      <router-link :to="{path:'school/'+1107+'/document-id-'+46995+'.html'}">
                        广州酒吧领舞培训班
                        <label>05-15</label>
                      </router-link>
                  </li>
              </ul>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell>
              <ul>
                  <li v-for="a in 5">
                      <router-link :to="{path:'school/'+1107+'/document-id-'+465+'.html'}">
                        广州酒吧领舞培训班
                        <label>05-11</label>
                      </router-link>
                  </li>
              </ul>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
            <mt-cell>
              <ul>
                  <li v-for="a in 5">
                      <router-link :to="{path:'/news/id-'+12886+'-cityid-'+0+'.html'}">
                        广州酒吧领舞培训班
                        <label>05-10</label>
                      </router-link>
                  </li>
              </ul>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="5">
            <mt-cell>
              <ul>
                  <li v-for="a in 5">
                      <router-link :to="{path:'/queanws/'+12+'.html'}">
                        广州酒吧领舞培训班
                        <label>05-15</label>
                      </router-link>
                  </li>
              </ul>
            </mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
        <div class="clear"></div>
    </div>
    <!-- 底部 -->
    <homefoot></homefoot>
  </div>
</template>
<script>
  import HeaderTop from '@/components/head/homeHead'
  import homefoot from '@/components/foot/homefoot'
  export default {
    data() {
      return {
        title: '91求学网',
        selectEnglish: '1',  // 外语培训id
        selectPc: '1',  // 培训外语培训id
        selectExam: '1',  // 培训id
        selectschool: '1', // 中小学
        selectart: '1', // 文体艺术
        selectjiaoyu: '1', // 学历教育
        selectother: '1', // 出国留学
        selectfex: '1', // 职业技能
        show0:false,
        show1:false,
        show2:false,
        show3:false,
        show4:false,
        show5:false,
        show6:false,
        show7:false,
        selected: '1',
        // banner列表
        imgList:[
          {src: 'http://www.91qiux.com/attachment/focus/1541728975fqgrt.jpg',name:'上海优路教育',sid:'23'},
          {src: 'http://www.91qiux.com/attachment/focus/15341295619qwkj.jpg',name:'上海优路教育',sid:'243'},
          {src: 'http://www.91qiux.com/attachment/focus/1541728844xd1rw.jpg',name:'上海优路教育',sid:'253'},
        ],
        // 培训列表
        pxList:[
          {name:'语言培训',catid:'23',cityid:'123'},
          {name:'语言培训',catid:'233',cityid:'123'},
          {name:'语言培训',catid:'234',cityid:'123'},
          {name:'语言培训',catid:'235',cityid:'123'},
        ],
        temList:[
          {src:'http://www.91qiux.com/attachment/face/201807/1532142592ry9lo.jpg',sid:'123'},
          {src:'http://www.91qiux.com/attachment/face/201807/1532142592ry9lo.jpg',sid:'1234'},
          {src:'http://www.91qiux.com/attachment/face/201807/1532142592ry9lo.jpg',sid:'1235'},
          {src:'http://www.91qiux.com/attachment/face/201807/1532142592ry9lo.jpg',sid:'1236'},
        ],
        // 外语
        engList:[
          {   name:'少儿英语',id:'1',
              sch:[
                {
                  img:'http://www.91qiux.com/attachment/information/201902/pre_1551253249josv5.jpg', 
                  course:'常州青少年英语培训班',
                  school:'常州美联英语',
                  courseid: '12',
                  cityid: '123',
                  sid: '125'
                },
                {
                  img:'http://www.91qiux.com/attachment/information/201902/pre_1550560810ne7k7.jpg', 
                  course:'上海青少年英语培训班',
                  school:'上海美联英语',
                  courseid: '12',
                  cityid: '123',
                  sid: '125'
                },
              ]
          },
          {   name:'少儿英语',id:'2',
              sch:[
                {
                  img:'http://www.91qiux.com/attachment/information/201902/pre_1551253249josv5.jpg', 
                  course:'常州青少年英语培训班',
                  school:'常州美联英语',
                  courseid: '12',
                  cityid: '123',
                  sid: '125'
                },
                {
                  img:'http://www.91qiux.com/attachment/information/201902/pre_1551253249josv5.jpg',
                  course:'上海青少年英语培训班',
                  school:'上海美联英语',
                  courseid: '12',
                  cityid: '123',
                  sid: '125'
                },
              ]},
        ],
        
      }
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        "$route": "getDate"
    },
    methods:{
      getDate(){
        this.$router.go(0)
      },

    },
    components:{
      HeaderTop,
      homefoot
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .word-cup{
    width 100%
    position absolute
    background-color #fff
    top 80px
    .banner{
      width 100%
      height 100px
      
      a img{
        width 100%
        height 100%
      }
    }
    .shcoolList{
      margin-top 10px
      padding-top: 5px;
      padding-bottom: 0px;
      ul{
        li{
            float: left;
            width: 25%;
            line-height: 1rem;
            text-align: center;
            line-height: 0.9rem;
            a:before{
              content: "";
              color: #fff;
              width: 1rem;
              height: 1rem;
              padding: 10px;
              display: block;
              margin: 0px auto;
              text-align: center;
              background-size: 100% 100%;
              background: url(../../assets/bg/wypx.jpg) center/100%;
            }
        }
      }
    }
    .goodSchool{
      padding 20px 15px;
        span {
          color: #31a9fc;
          margin-left: 0.3rem;
          font-size: 0.5rem;
          padding-left 10px;
          font-weight: bold;
          border-left 2px solid #31a9fc;
        }
        ul{
          padding-top: 20px;
          margin-left 10px;
          li{
              float: left;
              text-align: center;
              margin-right:15px;
              margin-bottom: 20px;
              border: 1px solid #d0d0d0;
              width: 28%;
              a{
                img{
                  overflow: hidden;
                  padding: 0.2rem 0px;
                  width: 100%;
                }
              }
          }
        }
    }
    .englishlist{
      padding 0px 15px;
      .first-span{
          color: #31a9fc;
          position: relative;
          margin-left: 0.3rem;
          font-size: 0.5rem;
          padding-left 10px;
          font-weight: bold;
          border-left 2px solid #31a9fc;
      }
      i{
        display: inline-block;
        float: right;
        width: 5%;
        margin-top: 0.1rem;
        height: 0.5rem;
        background: url(../../assets/bg/add.png) no-repeat center/100% 100%;
      }
      .english-list{
        width 100%;
        margin 20px 10px;
          ul{
            height: 30px;
            overflow: hidden;
            li{
              float left;
              overflow: hidden;
              font-size: 0.3rem;
              line-height: 0.75rem;
              text-align: center;
              margin-right: 10px;
              margin-bottom: 0.3rem;
              border: 1px solid #595959;
                a{
                  color: #595959;
                  padding: 0 10px;
                }
            }
            .newcla{
              border: 1px solid #E61439;
              background-color: #E61439;
              a{color: #fff;}
            }
          }
      }
      .showul{
            height: auto !important;
          }
      .div-content{
        width: 100%;
        display: none;
        ul{
          width: 100%;
          padding-left: 10px;
          li{
            width: 46%;
            height: 2.33rem;
            border: 1px solid #fff;
            float: left;
            p{font-size: 0.3rem;}
            .first-p{
              height: 0.65rem;
              overflow: hidden;
              font-weight: bold;
              font-size: 0.35rem;
              a{
                color: #5b5b5b;
                padding-bottom: 0.09rem;
                border-bottom: 1px solid #5b5b5b;
              }
            }
            .second-p{
              height: 0.65rem;
              color: #adadad;
              overflow: hidden;
              a{
                color: #adadad;
              }
            }
          }
          .second-li{
            width: 3.7rem;
            line-height: 0.6rem;
            margin-top: 0.5rem;
            margin-left: 23px;
          }
        }
      }
      .showcla{
        display:block;
      }
    }
    .city-tab{
      width: 100%;
      /deep/ .mint-cell-wrapper{
          background-image: linear-gradient(180deg, #fff, #fff 50%, transparent 50%) !important;
      }
      /deep/ .mint-cell-value{
        width: 100%;
      }
      ul{
        width: 100%;
        padding: 10px;  
        li{
          padding-top: 10px;
          a{
            color: #434343;
            font-size: 14px;
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
