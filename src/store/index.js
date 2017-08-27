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
    model: {
      work_history: {company: '', content: ''},
      education: {school: '', content: ''},
      projects: {name: '', content: ''},
      awards: {name: '', content: ''}
    },
    resume: {
      displayItems: ['personal_info', 'work_history', 'education', 'projects', 'awards', 'contacts'],
      personal_info: {
        name: '',
        city: '',
        title: '',
        birthday: ''
      },
      work_history: [],
      education: [],
      projects: [],
      awards: [],
      contacts: {
        mobile: '111',
        email: '222'
      }
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
      console.log(value)
    },
    setUser (state, payload) {
      console.log(payload)
      Object.assign(state.user, payload)
    },
    removeUser (state) {
      state.user.id = ''
      state.user.username = ''
    },
    addItem (state, payload) {
      let obj = {}
      Object.assign(obj, state.model[payload.field])
      state.resume[payload.field].push(obj)
    }
  }
})
