import firebase from '@/plugins/firebase'

export default ({ route, store, redirect }) => {
  const auth = firebase.auth()
  auth.onAuthStateChanged((user) => {
    if (user) {
      // store.dispatch('setUser', user)
      console.log('TODO: setUser')
    } else {
      // store.dispatch('unsetUser')
      console.log('TODO: unsetUser')
      if (route.name !== 'login') {
        redirect('/login')
      }
    }
  })
}
