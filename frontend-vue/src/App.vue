<template>
  <photos />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Photos from './components/Photos.vue'

export default defineComponent({
  name: 'App',
  components: {
    Photos
  }
})
</script>