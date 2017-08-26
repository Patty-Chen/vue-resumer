
<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
        <SignUpDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          我就是 slot 内容
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
  export default {
    name: 'Topbar',
    data () {
      return {
        signUpDialogVisible: false
      }
    },
    components: {
      SignUpDialog
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
