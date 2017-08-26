<template>
  <div>
    <form @submit.prevent="login">
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
      </div>
    </form>
  </div>
</template>

<script>
  import AV from '../lib/leancloud'
  import getAVUser from '../lib/getAVUser'
  export default {
    name: 'LogInForm',
    data () {
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      login () {
        let {username, password} = this.formData
        AV.User.logIn(username, password).then(() => {
          this.$store.commit('setUser', getAVUser())
        }, (error) => {
          alert(JSON.stringify(error))
        })
      }
    }
  }
</script>
