import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'personal_info',
    user: {
      id: '',
      username: ''
    },
    resume: {
      displayItems: ['personal_info', 'work_history', 'education', 'projects', 'awards', 'contacts', 'others'],
      personal_info: {
        name: '',
        city: '',
        title: '',
        birthday: ''
      },
      work_history: [
        {company: 'aaa', content: 'aaaaa'},
        {company: 'bbb', content: 'bbbbb'},
        {company: 'ccc', content: 'ccccc'}
      ],
      education: [
        {school: 'aaa', content: 'aaaaa'},
        {school: 'bbb', content: 'bbbbb'}
      ],
      projects: ['test', 'test', 'test'],
      awards: [],
      contacts: [],
      others: []
    }
  },
  mutations: {
    initState (state, payload) {
      Object.assign(state, payload)
    },
    switchTab (state, payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResumeArray (state, {field, index, subfield, value}) {
      console.log('updateResumeArray called')
      console.log(index)
      state.resume[field][index][subfield] = value
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResumeItem (state, {field, subfield, value}) {
      state.resume[field][subfield] = value
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser (state, payload) {
      Object.assign(state.user, payload)
      console.log(state.user)
    }
  }
})
