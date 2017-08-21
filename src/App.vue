
<template>
  <div class=page>
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'
  import 'normalize.css/normalize.css'
  import './assets/reset.css'
  import Vue from 'vue'
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'

  Vue.use(ElementUI)

  export default {
    name: 'app',
    data: function () {
      return {
        text: '你好'
      }
    },
    components: {Topbar, ResumeEditor, ResumePreview}
  }
</script>
<style lang="scss">
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    >main{
      flex-grow: 1;
    }
    >main{
      min-width: 1024px;
      max-width: 1440px;
      margin: 0;
      display: flex;
      justify-content: space-around;
    }
  }
  #resumeEditor{
    width: 35%;
    background: #444;
  }
  #resumePreview{
    width: 61.66667%;
    background: #777;
  }

</style>
