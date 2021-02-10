<template>
  <app-header />
  Album {{ albumId }}
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import AppHeader from "../../components/AppHeader.vue";

/**
 * Visualise 1 album in detail
 */
export default defineComponent({
  components: { AppHeader },
  name: 'ViewAlbum',
  data() {
    return {
      albumId: null as string | null
    }
  },
  methods: {
    ...mapActions(["emitErrorMessage"])
  },
  mounted() {
    try {
      this.albumId = this.$route.params.albumId
    } catch(e) {
      this.emitErrorMessage("This album cannot be found !")
    }
  }
})
</script>
