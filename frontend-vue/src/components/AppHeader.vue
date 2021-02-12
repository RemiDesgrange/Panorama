<template>
  <nav>
    <ul>
      <li><router-link :to="{ name: 'home' }">Panorama</router-link> </li>
      <li><router-link :to="{ name: 'albums' }">Your Albums</router-link></li>
      <li><button @click="showNotif">Show new Notif</button></li>
    </ul>
    <div class="user-container">
      <ul v-if="isAuthenticated">
        <li>Hey ! Welcome {{ user }}</li>
      </ul>
      <ul v-else>
        <li>login</li>
      </ul>
    </div>
    <div id="burger"
         :class="{ 'active' : isSidebarActive }"
         @click.prevent="toggleSidebar">
        <slot>
            <button type="button" class="burger-button" title="Menu">
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
            </button>
        </slot>
    </div>
  </nav>
  <notifications/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Notifications from './Notifications.vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    Notifications
  },
  data() {
    return {
      user: "Bjorn",
      isBurgerActive: false,
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    ...mapState(['isSidebarActive'])
  },
  methods: {
    ...mapActions(['emitErrorMessage']),
    ...mapMutations(['toggleSidebar']),
    showNotif() {
      this.emitErrorMessage("coucou")
    },
  }
})
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}
li {
  display: inline-block;
  margin: 3px;
  padding: 12px;
}

nav ul {
  list-style-type: none;

}
/**
Burger
*/

button {
    cursor: pointer;
}

/* remove blue outline */
button:focus {
    outline: 0;
}

.burger-button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 2;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6s cubic-bezier(.165,.84,.44,1);
}

.burger-bar {
    background-color: #000;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
}

.burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
}

.burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
}

.burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
}

.burger-bar--3 {
    transform: translateY(6px);
}

#burger.active .burger-button {
    transform: rotate(-180deg);
}

#burger.active .burger-bar--1 {
    transform: rotate(45deg)
}

#burger.active .burger-bar--2 {
    opacity: 0;
}

#burger.active .burger-bar--3 {
    transform: rotate(-45deg)
}
</style>
