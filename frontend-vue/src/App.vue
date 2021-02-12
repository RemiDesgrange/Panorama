<template>
  <app-header />
  <sidebar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import Sidebar from './components/Sidebar.vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    AppHeader,
    Sidebar
  }
})
</script>
