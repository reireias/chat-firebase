<template>
  <div>
    <h1>TODO: login</h1>
    <div id="firebase-auth-container"></div>
  </div>
</template>

<script>
import * as firebaseui from 'firebaseui'
import firebase from '@/plugins/firebase'
export default {
  layout: 'signin',
  mounted() {
    const auth = firebase.auth()
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
    const config = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/'
    }
    ui.start('#firebase-auth-container', config)
  }
}
</script>
