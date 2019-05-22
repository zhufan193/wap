<template>
    <div class="homefoot">
        <!-- 关于我们 -->
        <div class="aboutus">
        <ul>
            <li>
                <router-link to="">关于我们</router-link>
            </li>
            <li>
                <router-link to="">我们的服务</router-link>
            </li>
            <li>
                <router-link to="">用户帮助</router-link>
            </li>
        </ul>
        <div class="clear"></div>
        </div>
        <div class="ifoot">
            <p>copyright 2009-2019 http://www.91qiux.com All Rights Reserved</p>
            <p>91求学教育网 版权所有 <a href="http://www.miitbeian.gov.cn" target="_blank">赣ICP备18008108号-1</a></p>
        </div> 
    </div>
</template>
<style lang="stylus" scoped>
.homefoot{
    .aboutus{
        ul{
          padding:10px 1.5rem 30px ;
          li{
            float:left;
            width: 30%;
            text-align: center;
            font-size: 0.35rem;
            border-right: 1px solid #dcdcdc;
            a{
              color: #424242;
            }
          }
          li:nth-last-child(1){
            border-right: 0px;
          }
        }
    }
    .ifoot{
        width: 100%;
        overflow: hidden;
        text-align: center;
        padding: 0.55rem 0rem;
        background-color: #f0f0f0;
        p{
            font-size: 0.3rem;
        }
        p:nth-child(2){
            margin-top: 10px;
        }
        a {
            color: #000;
            text-decoration: none;
        }
    }
}
</style>

