<template>
  <div class="image-container">
    <img :src="imageSrc" alt="" @click="resize = true" />
    <sized-image
      v-show="resize"
      :imageSrc="imageSrc"
      @imageClose="resize = false"
    />
  </div>
</template>

<script>
import SizedImage from "@/components/SizedImage";

export default {
  components: { SizedImage },
  props: ["imageSrc"],
  data() {
    return {
      resize: false,
    };
  },
};
</script>

<style scoped>
.image-container {
  cursor: pointer;
}
</style>
