<template>
  <div class="travel">
    <div class='subtitle-home'>
       <h2 class="sub-titulo sub-travel">Travel</h2>
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

            myTravels.forEach((travel) =>{
                const d = new Date(travel.date)
                const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
                const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
                const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
                travel.date = `${da} ${mo} ${ye}`

                 return this.travels.push(travel);
            
            })
         })
    }
}
</script>
<style lang="scss">

@mixin respond($breakpoint){
        @if $breakpoint == phone {
            @media only screen and (max-width: 37.5em){ @content }; //600px
        }

        @if $breakpoint == tab-port {
            @media only screen and (max-width: 62.5em){ @content }; //1000px
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
    .sub-titulo{
        background: linear-gradient(180deg, rgba(255,255,255,0)65%, #83d1c4 65%);
        display: inline-block;
    }

    .travel{
        @include respond(phone){
            margin-top: 3.5rem;
        }
    }


</style>