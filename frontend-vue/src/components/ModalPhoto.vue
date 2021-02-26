<template>
  <div v-if="open" class="modal-mask">
    <div class="modal-wrapper">
      <button @click="$emit('close')" class="modal-button">
        &times;
      </button>
      <div class="modal-container">
        <img class="modal-image" :src="src"/>
      </div>
      <div class="third-column-for-flex"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "ModalPhoto",
  props: {
    src: {
      type: URL,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.modal-button {
  cursor: pointer;
  font-size: 5em;
  background: none;
  border: none;
}

.modal-image {
  max-width: 95%;
  height: 95vh;
}
</style>
