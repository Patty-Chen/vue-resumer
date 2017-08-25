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
    switchTab (state, payload) {
      state.selected = payload
    },
    updateResumeArray (state, {field, index, subfield, value}) {
      console.log('updateResume called')
      console.log(index)
      state.resume[field][index][subfield] = value
    }
  }
})
