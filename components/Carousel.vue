<template>
  <div class="header">
    <div id="app">
      <v-app id="inspire" >
        <v-carousel style="height: 90vh" cycle>
            <div class="images">
                <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
                  reverse-transition="fade-transition"
                  
      
                >
                <div class="text">
                  <h1>HOLA</h1>
                  <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos nesciunt delectus. Cumque veniam labore rerum commodi perspiciatis. Dignissimos voluptates, atque modi accusamus placeat beatae eveniet animi minima! Eius, repudiandae!</P>
                </div>
                
                </v-carousel-item>  
            </div>                                  
        </v-carousel>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1519074598089-6436475c7f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1511184117514-74b2b39697a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        },
      ],
    }
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

  .images{
    width: 100%;
    height: 100% !important;
    overflow:  !important;
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
  position: fixed !important;
}

.text{
  width: 30%;
  position: relative;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  
}

</style>
