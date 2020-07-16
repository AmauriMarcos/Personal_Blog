<template>
  <div>
    <app-carousel :posts='posts'></app-carousel>
    <div class="collection" >
        <div v-for="(post, i) in posts" :key='i'>
            <Post :image='post.image.url' 
                  :categories='post.categories'
                  :title='post.title'
                  :date='post.date'
                  :author='post.author'
            ></Post>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Carousel from "../components/Carousel";
import Post from "../components/Post"

export default {
    components: {
      appCarousel: Carousel,
      Post
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

  .collection{
    padding: 7% 15%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 1.5rem;
    row-gap: 7rem;
  }

</style>
