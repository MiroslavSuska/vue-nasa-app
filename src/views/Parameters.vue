<template>
  <div class="parameters-wrap">
    <h2>Select some other day of your choice</h2>

    <input
      type="date"
      id="date"
      name="trip-start"
      min="2018-01-01"
      ref="date"
      v-model="dateInput"
    />

    <button class="general-button" @click="anotherAPICall">Submit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dateInput: "",
      newNasaData: "",
      apiKey: "Pvn6UdRqkQ7zOuC4SsItIEstdApBfmBhiegi02Jc",
    };
  },
  methods: {
    anotherAPICall() {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&date=${this.dateInput}`
        )
        .then((response) => {
          //console.log(response.data + " nove nasa data");
          this.newNasaData = response.data;
        });
    },
  },
  watch: {
    newNasaData(value) {
      this.$root.$emit("dateChange", value);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.parameters-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  padding: 5px;
  margin: 20px;
  width: 170px;
  height: 30px;
}
</style>
