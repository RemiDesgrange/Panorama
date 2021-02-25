<template>
  <div class="notification-container">
    <div v-for="n in notifications" :key="n.id" :class="'severity-'+n.severity" class="notification">
        <span class="close" @click="deleteNotification(n.id)">&times;</span>
        <p>{{ n.message }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState } from "vuex";

export default defineComponent({
  name: 'Notifications',
  computed: {
    ...mapState(['notifications'])
  },
  methods: {
    ...mapMutations(['deleteNotification'])
  }
})
</script>

<style scoped>
.notification-container {
  display: flex;
  flex-direction: column-reverse;
}
.notification {
  margin: 10px;
  transition: 0.25s;
  transform: translateY(0);
  transition-timing-function: ease-in;
}
.close {
  font-size: 3em;
  cursor: pointer;
  text-align: right;
}
p {
  padding: 10px;
}
.severity-0 {
  background: rgba(red, 0.2);
  box-shadow: 0 5px 15px rgba(255, 0, 0, 0.5);
}
.severity-1 {
  background: rgba(yellow, 0.2);
  box-shadow: 0 5px 15px rgba(255, 255, 0, 0.5);
}
.severity-2 {
  background: rgba(green, 0.2);
  box-shadow: 0 5px 15px rgba(0, 255, 0, 0.5);
}
</style>
