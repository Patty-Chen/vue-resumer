import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'personal_info',
    resume: {
      displayItems: ['personal_info', 'work_history', 'education', 'projects', 'awards', 'contacts', 'others'],
      personal_info: {
        name: '',
        city: '',
        title: ''
      },
      work_history: [
        {company: 'aaa', content: 'aaaaa'},
        {company: 'bbb', content: 'bbbbb'},
        {company: 'ccc', content: 'ccccc'}
      ],
      education: ['test', 'test', 'test'],
      projects: ['test', 'test', 'test'],
      awards: [],
      contacts: [],
      others: []
    }
  },
  mutations: {
    switchTab (state, payload) {
      state.selected = payload
    }
  }
})
