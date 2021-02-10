<template>
  <app-header />
  Albums
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../../components/AppHeader.vue";

/**
 * visualize all your album.
 */
export default defineComponent({
  components: { AppHeader },
  name: 'ViewAllAlbums'
})
</script>
