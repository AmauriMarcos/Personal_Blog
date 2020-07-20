<template>
  <div id="home">
    <app-carousel></app-carousel>
    <div id='subtitle-home'>
       <h2>Latest Posts</h2>
    </div>
    <div class="collection" >
        <div v-for="(post, i) in posts" :key='i'>
            <Post :image='post.image.url' 
                  :categories='post.categories'
                  :title='post.title'
                  :date='post.date'
                  :author='post.author'
                  :id='post.id'
            ></Post>
        </div>
    </div>
    <div id="view-all">
      <nuxt-link class="view-all-link" to="/posts">View All</nuxt-link>
    </div>
    <Newsletter></Newsletter>
  </div>
</template>

<script>
import axios from "axios";
import Carousel from "../components/Carousel";
import Post from "../components/Post"
import Newsletter from "../components/Newsletter";

export default {
    components: {
      appCarousel: Carousel,
      Post,
      Newsletter
    },

    data(){
      return{
        posts: []
      }
  },
  async created(){
     const res = await axios.get("http://localhost:1337/posts")
       res.data.slice(4,-1).map((post) =>{
           return this.posts.push(post);
       })
  }
    
   /*  async asyncData(){
       const res = await axios.get("http://localhost:1337/posts")
       let arr = [];
       res.data.slice(4,-1).map((post,i) =>{
           arr.push(post)
       })

       return {posts: res.data}
    } */

}
</script>

<style lang='scss'>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .view-all-link{
    text-decoration: none;
    background: linear-gradient(180deg, rgba(255,255,255,0)65%, #e7ab96 65%);
    color: #323232;

      &:hover{
        background: linear-gradient(180deg, rgba(255,255,255,0)65%, #EE7B54 65%);
      }
  }

  #home{
    background: #f4f7f6;
  }

  #subtitle-home{
    font-family: 'Montserrat', sans-serif;
    color: #323232;
    font-weight: 700;
    transform: translateY(5rem);
    padding: 2% 0;
    display: flex;
    font-size: 1.4rem;
    align-items: center;
    justify-content: center;
    z-index: 100;
  
  }

  #view-all{
    font-family: 'Montserrat', sans-serif;
    color: #323232;
    font-weight: 700;
    padding: 2% 0;
    display: flex;
    font-size: 1.3rem;
    align-items: center;
    justify-content: center;
    z-index: 400;
    background: #f4f7f6;
  }

  .theme--light.v-application{
    background: #f4f7f6 !important;
  }

  .collection{
    padding: 7% 15%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 1.5rem;
    row-gap: 7rem;
  }

</style>
