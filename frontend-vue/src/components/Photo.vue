<template>
  <div class="img-container">
    <picture>
      <img
        :class="classList.join(' ')"
        class="img"
        :src="src"
        loading="lazy"
        @load="loaded()"
        @click="clicked()"
      />
    </picture>
    <button class="img-info">info</button>
    <input type="checkbox" class="img-selector" v-model="isSelected">
  </div>
</template>

<script lang="ts">
//$emit('photo-clicked', src)
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import ModalPhoto from './ModalPhoto.vue';

export default defineComponent({
    name: 'Photo',
    components: {
      ModalPhoto
    },
    props: {
      src: {
        type: URL,
        required: true
      }
    },
    data() {
      return {
        classList: ['loader'] as string[],
        isSelected: false,
        modalOpen: false,
      }
    },
    methods: {
      ...mapMutations(['setClickedPhoto']),
      clicked () {
        this.setClickedPhoto(this.src)
      },
      loaded () {
        this.classList = this.classList.filter((c) => c !== 'loader')
        this.classList.push('img-loaded')
      }
    },
})
</script>

<style scoped>
.img {
  position: relative;
  max-width: 400px;
  max-height: 400px;
}

.img-info,
.img-display-modal,
.img-selector {
  position: absolute;
  display: none;
}

.img-info {
  top: 2%;
  right: 2%;
}

.img-display-modal {
  top: 50%;
  right: 50%;
}

.img-selector {
  top: 2%;
  right: 20%;
}


.img-container:hover .img-info,
.img-container:hover .img-display-modal,
.img-container:hover .img-selector {
  display: inline-block;
}

img {
  opacity: 1;
  box-shadow: rgb(105, 105, 105) 2px 2px 1px;
  margin: 2px;
  border-radius: 5px;
}

.img-loaded {
  animation: load 1s linear;
}

@keyframes load {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* spinner fully css https://projects.lukehaas.me/css-loaders/
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: rgb(105, 105, 105);
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
} */
</style>
