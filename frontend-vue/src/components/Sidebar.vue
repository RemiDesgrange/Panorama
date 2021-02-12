<template>
  <div class="sidebar">
    <!-- <div
      class="sidebar-backdrop"
      v-if="isSidebarActive"
      @click="closeSidebarPanel"
    /> -->

    <transition name="slide">
      <div v-if="isSidebarActive" class="sidebar-panel">
        <ul>
          <li><router-link :to="{name: 'home'}">Home</router-link></li>
          <li><router-link :to="{name: 'albums'}">Albums</router-link></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "Sidebar",
  computed: {
    ...mapState(["isSidebarActive"]),
  },
  methods: {
    ...mapMutations(["closeSidebarPanel"]),
  },
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active
{
  transition: transform 200ms ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in-out 150ms
}

.sidebar-panel {
  overflow-y: auto;
  background-color: rgba(105,105,105, 0.4);
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 1;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
}

ul {
  list-style-type: none;
}

ul > li {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

</style>
