<template>
  <div class="photos-container">
    <div v-for="pu in photosUrl" :key="pu" class="photo-container">
      <photo :src="pu" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Photo from './Photo.vue'

export default defineComponent({
  name: 'Photos',
  components: {
    Photo
  },
  data() {
    return {
      photosUrl: []
    }
  },
  mounted() {
    for (let x=400; x<=410; x++) {
      this.photosUrl.push(`https://picsum.photos/seed/${x}/400/100`)
    }
    for (let x=400; x<=410; x++) {
      this.photosUrl.push(`https://picsum.photos/seed/${x}/400/500`)
    }
  }
})
</script>

<style scoped>
.photos-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-items: center;
  align-items: center;
  column-gap: 5px;
  row-gap: 5px;
}
</style>