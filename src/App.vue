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
  import store from './store/index.js'
  import getAVUser from './lib/getAVUser.js'

  Vue.use(ElementUI)

  export default {
    name: 'app',
    store,
    components: {Topbar, ResumeEditor, ResumePreview},
    created () {
      let state = localStorage.getItem('state')
      if (state) {
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state)
      this.$store.commit('setUser', getAVUser())
    }
  }
</script>
<style lang="scss">
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    >main{
      flex-grow: 1;
      min-width: 1024px;
      max-width: 1440px;
      margin-top: 16px;
      margin-bottom: 16px;
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
