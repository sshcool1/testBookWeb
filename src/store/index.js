import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resourceHost = 'http://localhost:8080'
const store = () => new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    LOGIN (state, token) {
      state.token = token
    },
    LOGOUT (state) {
      state.token = null
    }
  },
  actions: {
    async login ({state, commit}, {userId, password}) {
      try {
        axios.post(`${resourceHost}` + '/user/login', {userId, password})
        .then((res) => {
          console.log(res.headers);
          if(res.result) {
            commit('LOGIN', res.token)
          }else{
            commit('LOGOUT');
          }
        })
      } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new Error('Bad credentials')
        }
        throw error
      }
    },
    async logout ({commit, state}) {
      try {
        commit('LOGOUT');
      } catch (e) {
        console.log(e)
      }
    }
  }
})

export default store
