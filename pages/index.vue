<template>
  <div>
    <h1>TODO</h1>
    <v-btn @click="logout">ログアウト</v-btn>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  methods: {
    logout() {
      firebase.auth().signOut()
    }
  }
}
</script>
