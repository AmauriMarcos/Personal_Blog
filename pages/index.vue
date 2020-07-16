<template>
  <div>
    <app-carousel></app-carousel>
  </div>
</template>

<script>
import axios from "axios";
import Carousel from "../components/Carousel";
export default {
    components: {
      appCarousel: Carousel
    },
    async asyncData(){
       const res = await axios.get("http://localhost:1337/posts")
       return {posts: res.data}
    }

}
</script>

<style lang='scss'>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>
