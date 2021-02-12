<template>
  <div v-if="isAuthenticated">
      <!-- show your album -->
  </div>
  <div v-else>
    <!-- show something else -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: 'Home',
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
})
</script>
