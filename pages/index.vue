<template>
  <div id="home">
     <notifications group="foo" position='top left' />
    <app-carousel  class='carousel'></app-carousel>
    <div class='subtitle-home'>
       <h2 class="sub-titulo">Latest Posts</h2>
    </div>
    <div class="collection" >
        <div v-for="(post, i) in posts" :key='i'>
            <Post :image='post.image.name' 
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
    
    <ListLifestyle></ListLifestyle>
    <ListTravel></ListTravel>
    
  </div>
</template>

<script>
import axios from "axios";
import Carousel from "../components/Carousel";
import Post from "../components/Post"
import Newsletter from "../components/Newsletter";
import ListTravel from "../components/ListTravel";
import ListLifestyle from "../components/ListLifestyle";

export default {
    components: {
      appCarousel: Carousel,
      Post,
      Newsletter,
      ListTravel,
      ListLifestyle
    },

    data(){
      return{
        posts: []
   
      }
  },
  async created(){

    const res = await axios.get("https://blooming-thoughts.herokuapp.com/posts")  
      //6 posts que aparecem na pagina inicial
        res.data.slice(4, 10).map((post) =>{
          return this.posts.push(post);
      })
  }
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

  .carousel{
    margin-bottom: 3rem;
  }

  .subtitle-home{
    font-family: 'Montserrat', sans-serif;
    color: #323232;
    font-weight: 700;
    padding: 4% 0;
    font-size: 1.4rem;
    z-index: 100;
    text-align: center;

  }

  #view-all{
    font-family: 'Montserrat', sans-serif;
    color: #323232;
    font-weight: 700;
    padding: 5rem 0;
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
    padding: 2% 15% 3% 15%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 1.5rem;
    row-gap: 7rem;
  }

</style>
