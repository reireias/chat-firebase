import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from '@/plugins/firebase'

const db = firebase.firestore()

export const state = () => {
  return {
    loading: true,
    user: null,
    rooms: [],
    room: null,
    messages: [],
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
  addRoom(_, payload) {
    const room = {
      name: payload.name,
      owner: payload.uid,
    }
    db.collection('users').doc(payload.uid).collection('rooms').add(room)
  },
  deleteRoom(_, payload) {
    db.collection('users')
      .doc(payload.uid)
      .collection('rooms')
      .doc(payload.id)
      .delete()
  },
  bindRooms: firestoreAction(({ bindFirestoreRef }, payload) => {
    return bindFirestoreRef(
      'rooms',
      db.collection('users').doc(payload.uid).collection('rooms')
    )
  }),
  bindRoom: firestoreAction(({ bindFirestoreRef }, payload) => {
    return bindFirestoreRef('room', db.collection('rooms').doc(payload.id))
  }),
  bindMessages: firestoreAction(({ bindFirestoreRef }, payload) => {
    return bindFirestoreRef(
      'messages',
      db.collection('rooms').doc(payload.id).collection('messages')
    )
  }),
  addMessage(_, payload) {
    const message = {
      author: payload.uid,
      authorIcon: payload.authorIcon,
      text: payload.text,
    }
    db.collection('rooms')
      .doc(payload.roomId)
      .collection('messages')
      .add(message)
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
  rooms(state) {
    return state.rooms
  },
  room(state) {
    return state.room
  },
  messages(state) {
    return state.messages
  },
}
