<template>
    <picture >
      <img 
        :class="classList.join(' ')"
        :src="src" 
        loading="lazy"
        @load="loaded()" 
        @click="clicked()" 
        max-width="400"
        max-height="400"
      />
    </picture>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Photo',
    props: {
        src: {
          type: String,
          required: true
        },
        width: {
          type: Number,
          required: false,
          default: 100
        },
        height: {
          type:  [String, Number],
          required: false,
          default: "auto"
        }
    },
    data() {
      return {
        isImageLoaded: false,
        classList: ['loader']
      }
    },
    methods: {
      clicked () {
        console.log("pompom")
      },
      loaded () {
        this.isImageLoaded = true
        this.classList = this.classList.filter((c) => c !== 'loader')
        this.classList.push('img-loaded')
      }
    },
})
</script>

<style scoped>
img {
  opacity: 1;
  box-shadow: rgb(105, 105, 105) 2px 2px 1px;
  margin: 3;
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

/* spinner fully css https://projects.lukehaas.me/css-loaders/  */
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
}


</style>