<script>
  export default {
    name: "Register",
    data() {
      return {
        registerForm: {
          username: '',
          password: '',
          email: ''
        }
      }
    },
    methods: {
      onSubmit(){
        var _this = this
        // 后端创建后
        // this.axios.post("/register", {
        //   username: this.registerForm.username,
        //   password: this.registerForm.password,
        //   email: this.registerForm.email
        // })
        // .then(function (response) {
        //   console.log(response)
        //   // 注册逻辑还没想好写什么
        //   if (this.registerForm.password !== this.registerForm.confirm) {
        //     alert("Password and confirmation password do not match!")
        //   }
        // })
        // .catch(function (error) {
        //   console.log(error)
        // })

        // 后端创建后可以删掉
        let mockRepose = {
          status: 200,
          object: {
            username: _this.registerForm.username,
            token: "fake-jwt-token"
          }
        };
        if (mockRepose.status == 200) {
          _this.$store.commit('register', mockRepose.object);
          // 注册逻辑还没想好写什么
          if (this.registerForm.password !== this.registerForm.confirm) {
            alert("Password and confirmation password do not match!")
          }
          else {
            _this.$router.push({path: '/'})
          }
        }
        else {

        }
        //
      },
      toLogin() {
        this.$router.push("/login");
      }
    }
  }
</script>

<template>
  <div>
    <el-form ref="form" :model="registerForm" label-width="80px">
      <el-form-item>
        <el-input placeholder="Please enter your username" v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Please enter your password" v-model="registerForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Please confirm your password" v-model="registerForm.confirm" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Please enter your email" v-model="registerForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="form-confirm">Register</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="toLogin" class="form-confirm">Already have an account? Log in</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

</style>
