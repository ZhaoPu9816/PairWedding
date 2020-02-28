<template>
  <div class="home-container">
      <div class="row-module flex-center-w">
          <div class="rsvp-form-area">
            <div class="row-module">
              <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
                <div class="flex-betwe-w">
                  <el-form-item class="form-item-input" prop="user">
                      <input v-model="ruleForm.user" type="text" placeholder="Your Name"/>
                  </el-form-item>
                  <el-form-item class="form-item-input" prop="email">
                    <input v-model="ruleForm.email" type="text" placeholder="Your Email"/>
                  </el-form-item>
                  <el-form-item class="form-item-input" prop="guest">
                      <input v-model.number="ruleForm.guest" placeholder="Guest"/>
                  </el-form-item>
                  <el-form-item class="form-item-input" prop="classtype">
                    <input v-model="ruleForm.classtype" type="text" placeholder="Ceremony & Party"/>
                  </el-form-item>
                  <el-form-item class="form-item-input textarea-box" prop="content">
                    <textarea v-model="ruleForm.content" placeholder="Share Something..."></textarea>
                    <div class="rsvp-submit-button text-center"><el-button @click="submitForm('ruleForm')" class="submit-btn" type="default">RSVG</el-button></div>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import '../../Common/fontSize.js'
export default {
  data () {
    return {
      ruleForm: {
        user: '',
        email: '',
        guest: '',
        classtype: '',
        content: ''
      },
      rules: {
        user: [
          {required: true, message: '名称不能为空', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
        ],
        guest: [
          {required: true, message: '请输入宾客数量'},
          {type: 'number', message: '请输入数字'}
        ],
        classtype: [
          {required: true, message: '类型不能为空(聚会或婚礼等)', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '说点什么吧！！！', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        if (valid) {
          this.axiosRequest({
            method: 'post',
            url: '/sendmessage',
            data: {
              user: this.ruleForm.user,
              email: this.ruleForm.email,
              guest: this.ruleForm.guest,
              classtype: this.ruleForm.classtype,
              content: this.ruleForm.content
            }
          }).then((res) => {
            if (res.status === 200) {
              this.$message({
                message: '留言成功',
                type: 'success'
              })
              this.$refs[formName].resetFields()
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../css/home.less';
</style>
