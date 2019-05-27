import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'/',
      alias: '/cityid/:cityid.html',
      component: () => import ('@/news/home/index'),
    },
    //首页种类选择
    {
      path: '/category/catid-:catid-cityid-:cid.html',
      name: 'category',
      alias: '/category/catid-:catid-cityid-:cid-page-pid.html',
      component: () => import ('@/news/categorys/index'),
    },
    // 搜索结果页
    {
      path: '/search:name',
      name: 'search',
      component: () => import ('@/news/search/index'),
    },
    // 机构
    {
      path: '/sch/:sid',
      name: 'sch',
      component: () => import ('@/news/school/index'),
      redirect: '/school/:sid',
      children:[
        // 机构首页
        {
          path:'/school/:sid',
          name:'school',
          component: () => import ('@/news/school/school')
        },
        // 课程信息
        {
          path:'/school/:sid/course.html',
          name:'course',
          alias: '/school/:sid/course-catid-:catid.html',
          component: () => import ('@/news/school/course')
        },
        // 详细课程信息
        {
          path:'/course/id-:cid-cityid-:cityid.html',
          name:'course',
          component: () => import ('@/news/school/courseXq')
        },
        // 校区分布
        {
          path:'/school/:sid/area.html',
          name:'area',
          component: () => import ('@/news/school/area')
        },
        // 校区分布详情
        {
          path:'/school/:sid/schoolinfo-id-:infoid.html',
          name:'schoolinfo',
          component: () => import ('@/news/school/schoolinfo')
        },
        // 联系我们
        {
          path:'/school/:sid/contactus.html',
          name:'contactus',
          component: () => import ('@/news/school/contactus')
        },
        // 学习动态
        {
          path:'/school/:sid/news.html',
          name:'news',
          component: () => import ('@/news/school/learn')
        },
        // 学习资讯
        {
          path:'/school/:sid/students.html',
          name:'students',
          component: () => import ('@/news/school/learninfo')
        },
        // 班级信息
        {
          path:'/school/:sid/newsclass.html',
          name:'newsclass',
          component: () => import ('@/news/school/newsclass')
        },
        // 师资介绍
        {
          path:'/school/:sid/teachers.html',
          name:'teachers',
          component: () => import ('@/news/school/teachers')
        },
        // 环境介绍
        {
          path:'/school/:sid/album.html',
          name:'photos',
          component: () => import ('@/news/school/photos')
        },
        // 在线报名
        {
          path:'/school/:sid/demand.html',
          name:'demand',
          component: () => import ('@/news/school/demand')
        },
        // 相关新闻
        {
          path:'/news/id-:nid-cityid-:cid.html',
          name:'news',
          component: () => import ('@/news/school/news')
        },
      ]
    },
    //首页种类选择
    {
      path: '/school/:sid/document-id-:did.html',
      name: 'document',
      component: () => import ('@/news/school/document'),
    },
    //关于我们
    {
      path: '/meabouts.html',
      name: 'meabout',
      component: () => import ('@/news/aboutus/index'),
      redirect: '/meabout.html',
      children: [
        {
          path: '/meabout.html',
          name: 'meabout/index',
          component: () => import ('@/news/aboutus/meabout'),
        },
        {
          // 招生服务
          path: '/addstudents.html',
          name: 'addstudents',
          component: () => import ('@/news/aboutus/addstudents'),
        },
        {
          // 分站联盟
          path: '/morecity.html',
          name: 'morecity',
          component: () => import ('@/news/aboutus/morecity'),
        },
      ]
    },
    // 问答列表页面
    {
      path: '/index/:qid/',
      name:'queanws/index',
      component: () => import ('@/news/queanws/index'),
      redirect: '/queanws/:qid/',
      children: [
        // 问答列表页面
        {
          path: '/queanws/:qid/',
          name:'lists',
          component: () => import ('@/news/queanws/lists'),
        },
        // 问答详情页面
        {
          path: '/queanws/:qid.html',
          name:'queanwsinfo',
          component: () => import ('@/news/queanws/queanwsinfo'),
        },
      ]
    },
    
  ]
})
