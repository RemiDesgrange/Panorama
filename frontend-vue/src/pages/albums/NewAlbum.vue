<template>
  <app-header />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../../components/AppHeader.vue";

/**
 * visualize all your album.
 */
export default defineComponent({
  components: { AppHeader },
  name: 'NewAlbum'
})
</script>
