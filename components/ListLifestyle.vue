<template>
  <div>
    <div class='subtitle-home'>
       <h2 class="sub-titulo">Lifestyle</h2>
    </div>
    <div class="collection" >
        <div v-for="(lifestyle, i) in lifestyles" :key='i'>
            <Lifestyle :image='lifestyle.image.name' 
                  :title='lifestyle.title'
                  :date='lifestyle.date'
                  :author='lifestyle.author'
                  :id='lifestyle.id'
            ></Lifestyle>
        </div>
    </div>
  
  </div>
</template>
<script>
import axios from "axios";
import Lifestyle from "../components/Lifestyle";
export default {
    components: {
        Lifestyle
    },
    data(){
        return{
            lifestyles: []
        }
    },
    async created(){
         const res = await axios.get("https://blooming-thoughts.herokuapp.com/categories?name=Lifestyle");
         console.log(res)
         res.data.map((lifestyle) =>{
            let mylifestyle = lifestyle.posts.slice(-3)
            this.lifestyles = mylifestyle
         })
    }
}
</script>
<style lang="scss">
    .link-title{
        font-family: 'Montserrat', sans-serif;
        color: #323232;
        font-weight: 700;
        display: flex;
        font-size: 1.3rem;
        align-items: center;
        justify-content: center;
        z-index: 400;
        background: #f4f7f6;
    }
</style>