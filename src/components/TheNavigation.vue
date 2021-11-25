<template>
  <nav id="nav">
    <router-link to="/" class="general-button">Home</router-link>
    <router-link to="/parameters" class="general-button">Select</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 90px;
  left: 35px;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1100px) {
  nav {
    position: relative;
    flex-direction: row;
    justify-content: center;
    top: 0;
    left: 0;
    margin: 20px 30px;
  }
}
</style>
