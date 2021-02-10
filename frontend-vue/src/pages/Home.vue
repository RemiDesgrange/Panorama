<template>
  <app-header />

</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../components/AppHeader.vue";

export default defineComponent({
  components: { AppHeader },
  name: 'Home'
})
</script>
