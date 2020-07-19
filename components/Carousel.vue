<template>
  <div class="header">
    <div id="app">
      <v-app id="inspire" >
        <v-carousel style="height: 90vh" cycle>
            
              <v-carousel-item
                v-for="(post,i) in posts"
                :key="i"
                :src="`http://localhost:1337${posts[i].image.url}`"
                reverse-transition="fade-transition"
              >
              <div class="call">
                <h1 class="call__title">{{posts[i].title}}</h1>
                <div class="call__box">
                  <p class="call__box-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos nesciunt delectus. Cumque veniam labore rerum commodi perspiciatis. Dignissimos voluptates, atque modi accusamus placeat beatae eveniet animi minima! Eius, repudiandae!</p>
                </div>
                
              </div>
              
               
              </v-carousel-item>  
                                             
        </v-carousel>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts'],
  head:{
    link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;800;900&display=swap" }],
    
    link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap" }]
  }
}
</script>

<style lang='scss'>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
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
  }

  &__box{
     width: 100%;
     height: 100%;
     background-color: rgba(0,0,0,.4);
     padding: 2rem;
     transform: translateY(4rem);

    &-description{
       font-family: 'Montserrat', sans-serif;
       font-size: 1rem;
    }

  }
  
}

</style>
