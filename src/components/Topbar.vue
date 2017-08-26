
<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <span>{{user}}</span>
        <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
        <SignUpDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          <SignUpForm @success="login($event)"/>
        </SignUpDialog>
        <a class="button" href="#">登录</a>
        <el-button type="primary">保存</el-button>
        <el-button>预览</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import SignUpDialog from './SignUpDialog'
  import SignUpForm from './SignUpForm'
  export default {
    name: 'Topbar',
    data () {
      return {
        signUpDialogVisible: false
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    components: {
      SignUpDialog, SignUpForm
    },
    methods: {
      login (user) {
        this.signUpDialogVisible = false
        this.$store.commit('setUser', user)
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
</style>
