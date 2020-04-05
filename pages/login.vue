<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <div class="display-3" style="text-align: center;">login</div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <div id="firebase-auth-container"></div>
      </v-col>
    </v-row>
  </v-container>
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
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/',
    }
    ui.start('#firebase-auth-container', config)
  },
}
</script>
