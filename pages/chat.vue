<template>
  <v-container>
    <v-row>
      <v-col>
        <div v-if="room">Room: {{ room.name }}</div>
      </v-col>
    </v-row>
    <v-row v-for="message in messages" :key="message.id">
      <v-col v-text="message.text"></v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="2">
        <v-text-field v-model="text" label="Message"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn color="primary" :disabled="!text" @click="onPost">post</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      text: null,
    }
  },
  computed: {
    ...mapGetters(['user', 'room', 'messages']),
  },
  created() {
    this.bindRoom({ id: this.$route.query.roomId })
    this.bindMessages({ id: this.$route.query.roomId })
  },
  methods: {
    onPost() {
      this.addMessage({
        uid: this.user.uid,
        authorIcon: this.user.photoURL,
        text: this.text,
        roomId: this.$route.query.roomId,
      })
      this.text = null
    },
    ...mapActions(['bindRoom', 'bindMessages', 'addMessage']),
  },
}
</script>
