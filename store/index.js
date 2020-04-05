import { vuexfireMutations } from 'vuexfire'

export const state = () => {
  return {
    loading: true,
    user: null,
  }
}

export const mutations = {
  ...vuexfireMutations,
  setUser(state, user) {
    state.user = user
    state.loading = false
  },
}

export const actions = {
  setUser({ commit }, payload) {
    const user = {
      uid: payload.uid,
      email: payload.email,
      photoURL: payload.photoURL,
    }
    commit('setUser', user)
  },
  unsetUser({ commit }) {
    commit('setUser', null)
  },
}

export const getters = {
  authenticated(state) {
    return state.user !== null
  },
  user(state) {
    return state.user
  },
  loading(state) {
    return state.loading
  },
}
