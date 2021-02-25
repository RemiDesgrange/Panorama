<template>
  <photos />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Photos from "../../components/Photos.vue";

/**
 * visualize all your album.
 */
export default defineComponent({
  components: { Photos },
  name: 'ViewAllAlbums'
})
</script>
