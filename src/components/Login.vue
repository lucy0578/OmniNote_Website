<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      onSubmit() {
        var _this = this

        // 后端创建后
        // this.axios.post("/login", {
        //   username: this.loginForm.username,
        //   password: this.loginForm.password
        // })
        // .then(function (response) {
        //   console.log(response.data.status)
        //   if (response.data.status === 200) {
        //     _this.$store.commit('login', response.data.object),
        //     _this.$router.push({path: '/'})
        //   }
        //   else {
        //     alert("Your account or password is incorrect!")
        //   }
        // })
        // .catch(function (error) {
        //   console.log(error)
        // })

        // 后端创建后可以删掉
        let mockRepose = {
          status: 200,
          object: {
            username: _this.loginForm.username,
            token: "fake-jwt-token"
          }
        };
        if (mockRepose.status == 200) {
          _this.$store.commit('login', mockRepose.object);
          _this.$router.push({path: '/'})
        }
        else {
          // alert可以参考elementui界面写template
          alert("Your account or password is incorrect!")
        }
        //
      },
      toRegister() {
        this.$router.push("/register");
      }
    }
  }
</script>

<template>
  <div>
    <el-form ref="form" :model="loginForm" label-width="80px">
      <el-form-item>
        <el-input placeholder="Please enter your username" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Please enter your password" v-model="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="form-confirm">Log in</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="toRegister" class="form-confirm">New here? Create an account</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

</style>
