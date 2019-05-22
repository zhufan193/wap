<template>
    <!-- 在线报名 -->
    <div class="demand box" v-title v-bind:data-title="title">
        <div class="baoming">
            <ul>
                <li>
                    <span>您的姓名:</span>
                    <nut-textinput 
                        v-model="form.username"
                        placeholder="请输入您的姓名"
                        :clearBtn="false"
                    />
                </li>
                <li>
                    <span>行别:</span>
                    <nut-radio 
                    v-model="form.sex"
                    :label="1"
                    >男
                    </nut-radio>
                    <nut-radio 
                    v-model="form.sex"
                    :label="2"
                    >女
                    </nut-radio>
                </li>
                <li>
                    <span>联系地址:</span>
                    <nut-textinput 
                        v-model="form.adder"
                        placeholder="请输入您的联系地址"
                        :clearBtn="false"
                    />
                </li>
                <li>
                    <span>手机号码:</span>
                    <nut-textinput 
                        v-model="form.phone"
                        placeholder="请输入您的手机号码"
                        :clearBtn="false"
                    />
                </li>
                <li>
                    <span>QQ号码:</span>
                    <nut-textinput 
                        v-model="form.QQ"
                        placeholder="请输入您的QQ号码"
                        :clearBtn="false"
                    />
                </li>
                <li>
                    <span>固定电话:</span>
                    <nut-textinput 
                        v-model="form.tel"
                        placeholder="请输入您的固定电话"
                        :clearBtn="false"
                    />
                </li>
                <li>
                    <span>课程名称:</span>
                    <select v-model="form.coursename" placeholder="请选择课程名称">
                        <option>二维</option>
                        <option>34</option>
                    </select>
                </li>
                <li>
                    <span>留言内容:</span>
                    <textarea name="content" class="wenben" v-model="form.message" placeholder="请输入您的留言">
                    </textarea>
                </li>
                <li>
                    <span class="wenxin">
                        <strong>温馨提示</strong>
                         提交报名后我们有老师和您联系!
                    </span>
                    <span class="wenxin">
                        <input type="button" class="tijiao" value="提交" @click="getbutton" />
                    </span>
                </li>
        
                <div class="clear"></div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            title: '在线报名',
            form:{
                username:'',
                sex: '',
                adder: '',
                phone: '',
                QQ: '',
                tel: '',
                coursename: '',
                message: ''
            }
        }
    },
    methods: {
        getbutton() {
           if(!this.form.username){
              return this.$toast.fail('请填写您的姓名');
           } 
           if(!this.form.adder){
              return this.$toast.fail('请填写您的地址');
           } 
           var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
           if(!this.form.phone){
              return this.$toast.fail('请填写您的手机号码');
           }else if(!phoneReg.test(this.form.phone)){
               return this.$toast.fail('请填写正确的手机号码');
           }
           console.log("sub")

        }
    }
}
</script>
<style lang="stylus" scoped>
.demand{
    width 100%;
    .baoming{
        margin: 5px 10px;
        border: 1px solid #D7DBDE;
        border-radius: 3px;
        background: url(../../assets/bg/baoming.jpg) no-repeat left top;
        ul{
            margin-top: 15px;
            padding: 0px 15px 10px;
            padding-top: 50px;
            li{
                line-height: 40px;
                height: 40px;
                margin-bottom: 15px;
                /deep/ .nut-textinput input {
                    border: 1px solid #049df1;
                }
                select{
                    width: 76%;
                    height: 40px;
                    border: 1px solid #049df1;
                }
                span{
                    color: #2D2A2A;
                    font-size: 16px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    width: 70px;
                    margin-right: 5px;
                    float left;
                }
                .wenben{
                    width: 100%;
                    height: 120px;
                    border: 1px solid #049df1;
                    border-radius: 3px;
                    margin-top: 10px;
                    float left;
                }
                .wenxin{
                    float: left;
                    line-height: 49px;
                    text-align: center;
                    display: block;
                    width: 100%;
                    font-size 12px;
                }
                .tijiao{
                    width: 60px;
                    border-radius: 3px;
                    height: 30px;
                    background-color: #FF9900;
                    color: #fff;
                    border: none;
                    margin-top: 10px;
                    text-align center;
                }
            }
        }
    }

}
</style>


