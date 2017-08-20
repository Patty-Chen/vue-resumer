<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <button class="primary">保存</button>
        <button>预览</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Topbar'
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
