<template>
    <!-- 课程信息 -->
    <div class="course box" v-title v-bind:data-title="title">
        <div class="courselist">
            <h2>课程列表</h2>
            <div class="school-content">
                <ul class="left" v-for="(course,cindex) in courseList" :key="cindex">
                    <li>
                        <router-link :to="{path:'/course/id-'+course.id+'-cityid-'+course.cityid+'.html'}">
                            <img :src="course.img" :title="course.name" :alt="course.name"/>
                        </router-link>
                    </li>
                    <p>
                        <router-link :to="{path:'/course/id-'+course.id+'-cityid-'+course.cityid+'.html'}">{{course.name}}</router-link>
                    </p>
                </ul>
                <div class="clear"></div> 
            </div>
        </div>
        <!-- 分页 -->
            <div class="pagination">
                <span>
                    共{{page}}页
                </span>
                <span @click="toleft" v-if="flage != 1" class="button-span"><</span>
                <span class="span-num">{{flage}}</span>
                <span @click="toright" v-if="flage != page" class="button-span">></span>
                <span>
                    跳至
                    <input type="number"  class="gotopage" v-model="topage" @blur="gotopage">
                    页
                </span>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            title: '课程信息',
            all: 100000, //数据总条数
            pagesize: 15,  //每页多少条
            page: 0, // 总共多少页
            flage: 1, //当前页
            topage: null,
            // 课程列表
            courseList: [
                {id: '1',cityid: '123',name: '深圳雅思培训班',img: 'http://www.91qiux.com/attachment/information/201902/pre_15509146777ceio.jpg'},
            ],
        }
    },
    created() {
        this.page = Math.ceil(this.all / this.pagesize);
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        "$route": "getDate"
    },
    methods:{
        // 上一页
        toleft() {
            this.flage = Number(this.flage);
            this.flage -= 1;
            // this.$router.push('/category/catid-'+12+'-cityid-'+123+'-page-'+this.flage+'.html');
        },
        // 下一页
        toright() {
            this.flage = Number(this.flage);
            this.flage += 1;
            // this.$router.push('/category/catid-'+12+'-cityid-'+123+'-page-'+this.flage+'.html');
        },
        gotopage() {
            if(this.topage > this.page){
                this.topage = null; 
                return this.$toast.fail('已超过最大页数');
            }else{
                this.flage = this.topage;
                this.topage = null;
                // this.$router.push('/category/catid-'+12+'-cityid-'+123+'-page-'+this.flage+'.html');
            }
        },
        // 调用接口获取列表数据
        getDate() {
        }
    },
}
</script>
<style lang="stylus" scoped>
.course{
    width 100%;
    .courselist{
        padding: 0px 0.3rem 0.3rem;
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

