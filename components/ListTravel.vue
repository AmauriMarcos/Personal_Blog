<template>
  <div class="travel">
    <div class='subtitle-home'>
       <h2 class="sub-titulo">Travel</h2>
    </div>
    <div class="collection" >
        <div v-for="(travel, i) in travels" :key='i'>
            <Travel :image='travel.image.name' 
                  :travel='Travel'
                  :title='travel.title'
                  :date='travel.date'
                  :author='travel.author'
                  :id='travel.id'
            ></Travel>
        </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";
import Travel from "../components/Travel";
export default {
    components: {
        Travel
    },
    data(){
        return{
            travels: []
        }
    },
    async created(){
         const res = await axios.get("https://blooming-thoughts.herokuapp.com/categories?name=Travel");
          console.log(res)
         res.data.map((travels) =>{
            let myTravels = travels.posts.slice(-3)
            this.travels = myTravels
         })
    }
}
</script>
<style lang="scss">
    .sub-titulo{
        background: linear-gradient(180deg, rgba(255,255,255,0)65%, #83d1c4 65%);
        display: inline-block;

    }


</style>