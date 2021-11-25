<template>
  <transition name="fade">
    <div class="big-image-container">
      <img :src="imageSrc" alt="" />
      <button class="close-btn" @click="closeEvent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["imageSrc"],
  methods: {
    closeEvent() {
      this.$emit("imageClose");
    },
  },
};
</script>

<style scoped lang="scss">
.big-image-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;
  width: auto;
  cursor: default;
  background-color: rgba(0, 0, 0, 0.9);

  img {
    margin: auto;
    object-fit: contain;
  }
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  color: $text-color;
  background-color: transparent;
  cursor: pointer;
  border-color: $text-color;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
