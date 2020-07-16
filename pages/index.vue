<template>
  <div class="container">
    <header class="static">
      <div class="caixa">
        <h1>Tata Chega Lá!</h1>
      </div>
    </header>
    <main>
        <div v-for="n in 10" :key="n" class="master-rec">
           <div class="rectangle">
              {{n}}
           </div>
        </div>
    </main>  
  </div>
</template>

<script>
import axios from "axios";
export default {
    async asyncData(){
       const res = await axios.get("http://localhost:1337/posts")
       return {data: res.data}
    },
    mounted(){
       const controller = new this.$scrollmagic.Controller();

       new this.$scrollmagic.Scene({
         duration: 500,
         triggerElement: '.caixa'
       })
       .addIndicators()
       .setPin(".caixa")
       .addTo(controller);
    }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container{
    display: flex;
    justify-content: center;
    position: relative;
  }

  .static{
    width: 50%;
    height: 100vh;
    background-color: brown;

  }

  .caixa{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

  }

  h1{
    font-size: 4rem;

  }

  .master-rec{
    width: 50vw;
  }
  .rectangle{
     
      height: 20rem;
      background-color: rgb(201, 201, 201);
      margin-bottom: 1rem;

  }
</style>
