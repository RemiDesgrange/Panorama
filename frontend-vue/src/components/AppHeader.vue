<template>
  <nav>
    <ul>
      <li><router-link :to="{ name: 'home' }">Panorama</router-link> </li>
      <li><router-link :to="{ name: 'albums' }">Your Albums</router-link></li>
      <li><button @click="showNotif">Show new Notif</button></li>
    </ul>
    <div class="user-container">
      <ul v-if="isAuthenticated">
        <li>Hey ! Welcome {{ user }}</li>
      </ul>
      <ul v-else>
        <li>login</li>
      </ul>
    </div>
  </nav>
  <notifications/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import Notifications from './Notifications.vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    Notifications
  },
  data() {
    return {
      user: "Bjorn"
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['emitErrorMessage']),
    showNotif() {
      this.emitErrorMessage("coucou")
    }
  }
})
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}
li {
  display: inline-block;
  margin: 3px;
  padding: 12px;
}

nav ul {
  list-style-type: none;

}
</style>
