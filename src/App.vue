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
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.left{float: left !important;}
.right {float: right !important;}
h2{font-weight: bold;}
a{color: #000;}
</style>
