<template>
  <v-app>
    <v-toolbar flat max-height="64">
      <v-toolbar-title>Example Chat Application with Firebase</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined @click="logout">logout</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  methods: {
    logout() {
      firebase.auth().signOut()
    },
  },
}
</script>
