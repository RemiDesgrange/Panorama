<template>
  <div class="photos-container">
    <div v-for="p in photos" :key="p.id" class="photo-container">
      <photo :src="p.url" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Photo from './Photo.vue'
import { mapState, mapActions } from 'vuex'

export default defineComponent({
  name: 'Photos',
  components: {
    Photo
  },
  computed: {
    ...mapState({
      photos: 'photos'
    })
  },
  methods: {
    ...mapActions([
      'fetchPhotos'
    ])
  },
  mounted() {
    this.fetchPhotos()
  }
})
</script>

<style scoped>
.photos-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 400px));
  justify-items: center;
  align-items: center;
  column-gap: 5px;
  row-gap: 5px;
}
</style>
