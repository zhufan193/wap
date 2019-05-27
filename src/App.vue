<template>
  <div id="app">
    <router-view/>
  </div>

</template>
<script>
  export default {

  }
  //App接口
  window['setAppInfo'] =function (uid,os) {
    window.os=os
    window.uid=uid
  }
  //H5接口
  window.addEventListener('message',function(event){
    let data = event.data
    if(data.os !== undefined){
      window.os=data.os
      window.uid=data.uid
    }
  },false)
</script>
<style lang="stylus" rel="stylesheet/stylus">
.box{
  width: 100%;
  min-width: 320px;
  max-width: 640px;
}
div {
      display: block;
    }
img{
  width: 100%;
  height: 100%;
}
.clear {
    clear: both;
    height: 0px;
}
dd, dl, dt, p {
    margin: 0;
    padding: 0;
}
body {
    padding: 0px;
    font-size: 12px;
    min-width: 320px;
    max-width: 640px;
    margin: 0px auto !important;
    background-color: #fff !important;
}
html{background-color: #fff !important;}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.left{float: left !important;}
.right {float: right !important;}
h2{font-weight: bold;}
a{color: #000;}

// 分页
.pagination{
    text-align: center;
    padding: 0.55rem 0rem;
    border-bottom: 10px solid #f0eff5;
    span{
        font-size 15px;
    }
    .button-span{
        border: 1px solid #7d7d7d;
        border-radius: 4px;
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 0.1rem;
        font-size 16px;
        background-color: #fff;
        padding: 3px 5px;
        margin-right: 5px;
    }
    .span-num{
        border-radius: 4px;
        width: 0.6rem;
        height: 0.6rem;
        font-size 16px;
        padding: 3px 8px;
        background-color #068bf2;
        color: #fff;
    }
    .gotopage{
        font-size 14px;
        padding: 3px 10px;
        border: 1px solid #7d7d7d;
        border-radius: 4px;
        width: 40px;
    }
    .current{
        border: none;
        background-color: #068bf2;
        color: #fff;
    }
}
</style>
