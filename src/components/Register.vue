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
        if (this.registerForm.password !== this.registerForm.confirm) {
          alert("Password and confirmation password do not match!");
          return;
        }
        this.axios.post("/register", {
          username: this.registerForm.username,
          password: this.registerForm.password,
          email: this.registerForm.email
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
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
    </el-form>
  </div>
</template>

<style scoped>

</style>
