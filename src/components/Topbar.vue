
<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span>你好，{{user.username}}</span>
          <a class="button" href="#" @click.prevent="logout">登出</a>
        </div>
        <div v-else class="userActions">
          <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
          <SignUpDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
            <SignUpForm @success="login($event)"/>
          </SignUpDialog>
          <a class="button" href="#" @click.prevent="loginDialogVisible = true">登录</a>
          <SignUpDialog title="登录" :visible="loginDialogVisible" @close="loginDialogVisible = false">
            <LoginForm @success="login($event)"/>
          </SignUpDialog>
        </div>
        <el-button type="primary">保存</el-button>
        <el-button>预览</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import SignUpDialog from './SignUpDialog'
  import SignUpForm from './SignUpForm'
  import LoginForm from './LoginForm'
  import AV from '../lib/leancloud'
  export default {
    name: 'Topbar',
    data () {
      return {
        signUpDialogVisible: false,
        loginDialogVisible: false
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      },
      logined () {
        return this.user.id
      }
    },
    components: {
      SignUpDialog, SignUpForm, LoginForm
    },
    methods: {
      login (user) {
        this.signUpDialogVisible = false
        this.loginDialogVisible = false
        console.log('login')
        console.log(user)
        this.$store.commit('setUser', user)
      },
      logout () {
        AV.User.logOut()
        this.$store.commit('removeUser')
      }
    }
  }
</script>

<style>
  #topbar{
    background:#ffffff;
    /*box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);*/
    >.wrapper{
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      height:64px;
    }
    >.wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: 24px;
      color: #000000;
    }
  }
  .actions{
    display: flex;
    .userActions{
      margin-right: 3em;
    }
  }
</style>
