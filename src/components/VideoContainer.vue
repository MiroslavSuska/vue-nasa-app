<template>
  <div class="image-container">
    <iframe :src="videoSrc" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  props: ["videoSrc"],
};
</script>

<style scoped></style>
