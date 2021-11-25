<template>
  <div id="app">
    <h1>Astronomy picture of the day</h1>
    <the-navigation />
    <div class="content">
      <router-view :apiData="apiData" />
    </div>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
import axios from "axios";

export default {
  components: { TheNavigation },
  data() {
    return {
      apiData: "",
      apiKey: "Pvn6UdRqkQ7zOuC4SsItIEstdApBfmBhiegi02Jc",
    };
  },
  created() {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`)
      .then((response) => {
        console.log(response.data + " prve data");
        this.apiData = response.data;
      });
  },
  mounted() {
    this.$root.$on("dateChange", (data) => {
      this.apiData = data;
    });
  },
};
</script>

<style lang="scss">
@import "assets/scss/main";
</style>
