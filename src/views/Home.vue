<template>
  <div class="home" v-if="apiData">
    <h2>{{ apiData.title }}</h2>
    <p class="color">{{ apiData.date }}</p>

    <div class="wrapper">
      <div class="flex">
        <image-container
          v-if="apiData.media_type === 'image'"
          :imageSrc="apiData.url"
        />
        <video-container v-else :videoSrc="apiData.url" />
      </div>
      <div class="text-wrap">
        <h3>Explanation</h3>
        <p>{{ apiData.explanation }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageContainer from "@/components/ImageContainer";
import VideoContainer from "@/components/VideoContainer";
//import axios from "axios";

export default {
  components: { ImageContainer, VideoContainer },
  props: ["apiData"],
  data() {
    return {
      apiKey: "Pvn6UdRqkQ7zOuC4SsItIEstdApBfmBhiegi02Jc",
    };
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 6vh 0 0 6vh;
}

.text-wrap {
  margin-left: 25px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: $text-color;
    padding: 15px;
    border: 2px #6d6565 solid;
    border-radius: 12px;
    background-color: rgba(174, 158, 158, 0.2);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
}

.color {
  color: $text-color;
}

.flex {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1100px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
  .text-wrap {
    margin: 2em 0 0 0;
    width: 100%;
  }
}
</style>
