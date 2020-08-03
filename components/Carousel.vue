<template>
  <div class="header">
    <div id="app">
      <v-app id="inspire" >
        <v-carousel style="height: 90vh" cycle>
                <v-carousel-item
                  v-for="(post,i) in posts"
                  :key="i"
                  :src="`${posts[i].image.name}`"
                  reverse-transition="fade-transition"
                >
                <nuxt-link :to="`/${posts[i].id}`" class="wrap-link">
                  <div class="call">
                    <h1 class="call__title">{{posts[i].title}}</h1>
                    <div class="call__box">
                      <p class="call__box-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos nesciunt delectus. Cumque veniam labore rerum commodi perspiciatis.</p>
                       <p class="call__box-description-mobile">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    </div>                  
                  </div>
                </nuxt-link>                  
                </v-carousel-item>  
                                         
        </v-carousel>
      </v-app>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {

  head:{
    link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;800;900&display=swap" }],
    
    link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap" }]
  },
  data(){
    return{
      posts: []
    }
  },
  async created(){
     const res = await axios.get("https://blooming-thoughts.herokuapp.com/posts")
       res.data.slice(0,4).map((post) =>{
           return this.posts.push(post);
       })
  }
}
</script>

<style lang='scss'>
@mixin respond($breakpoint){
        @if $breakpoint == phone {
            @media only screen and (max-width: 37.5em){ @content }; //600px
        }

        @if $breakpoint == tab-port {
            @media only screen and (max-width: 56.25em){ @content }; //900px
        }

        @if $breakpoint == tab-land {
            @media only screen and (max-width: 75em){ @content }; //1200px
        }

        @if $breakpoint == laptop {
            @media only screen and (max-width: 90em) {@content}; //1440px
        }

        @if $breakpoint == big-desktop {
            @media only screen and (min-width: 112.5em){ @content }; // + 1800px
        }
    }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
  }

  .wrap-link{
        text-decoration: none;     
        color: #fff !important;
    }

  .header{
    height: 85vh;
    
  }

  .v-carousel__item{
    height: 90vh !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v-carousel__controls{
    background: transparent !important;
  }

  .v-window__prev,
  .v-window__next{
    /* position: fixed !important; */
  }

.call{
  width: 55%;
  position: relative;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  &__title{
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 5rem;
    line-height: 1;

     @include respond(tab-land){
          font-size: 4rem;               
      }

      @include respond(tab-port){
          transform: translateY(2rem);  
         font-size: 3.7rem;            
      }

      @include respond(phone){ 
         font-size: 3.4rem;            
      }
  }

  &__box{
     width: 100%;
     height: 100%;
     background-color: rgba(0,0,0,.4);
     padding: 2rem;
     transform: translateY(4rem);

      @include respond(tab-land){
          padding: 1.5rem;               
      }

      @include respond(tab-port){
        transform: translateY(5rem);  
        font-size: .9rem;            
      }

      @include respond(phone){
         font-size: .7rem;     
         padding: 1rem 1.5rem;     
          
      }

    &-description{
       font-family: 'Montserrat', sans-serif;
       font-size: 1rem;

       @include respond(phone){
         display: none; 
      } 
    }

     &-description-mobile{
       display: none;
       font-family: 'Montserrat', sans-serif;
       font-size: 1rem;

       @include respond(phone){
         display: block; 
         font-size: .8rem;
      }
    }

  }
  
}

</style>
