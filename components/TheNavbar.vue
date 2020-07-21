<template>
    <div class="navbar">
         <nuxt-link tag='h1' to='/' class="navbar__title"><span class="bloom">Blooming</span> Thoughts</nuxt-link>
         <ul class="navbar__explore">
            <li>Explore
                <ul>
                  <div class="small-block"></div>
                  <li v-for='(category, i) in categories' :key="i">
                      <nuxt-link tag='a' :to="`/categories/${category.Name}`" class="myLink">{{category.Name}}</nuxt-link>
                  </li> 
              </ul>
            </li>
        </ul>
        <img class="navbar__logo" src="../assets/logo.svg" alt="">
    </div>
</template>

<script>
import axios from "axios";
export default {
    head: {
    link: [{rel:'stylesheet', href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"}]
  },
  data(){
    return{
       categories: []
    }
  },
  async created(){
     const res = await axios.get("http://localhost:1337/categories")
     this.categories = res.data
  } 
}
</script>

<style lang="scss" scoped>

    .small-block{
      height: 15px;
      background-color: transparent;
    }
    .myLink:hover{
      color: #82D0C3;
      
    }

      ul > li {
          position: relative;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          list-style: none;
      }

      ul ul {
          position: absolute;
          top: 1em;
          left: 0;
          display: none;
          background-color: rgb(255, 255, 255);
          list-style: none;
          font-size: 1rem;
          font-family: 'Montserrat', sans-serif;
          padding: 0 3rem 0 1rem;
          width: 10rem;
          transform: translateY(.2rem) translateX(-1.3rem);
      }

      ul ul li{
        padding: .5rem .3rem;

      }

      ul > li:hover ul {
          display: block;
      }

      a{
        text-decoration: none;
        color: rgb(29, 29, 29);
      
      }
    .bloom{
        color: #ee7b54;
        margin-right: .5rem;
      }
   
    .navbar{
      width: 100%;
      height: 6rem;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgb(255, 255, 255);
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 500;
      padding: 0 10%;

      &__logo{
        width: 200px;
        height: 200px;
      }

      &__title{
        font-size: 2rem;
        font-family: 'Abril Fatface', cursive;
        cursor: pointer;
        color: #82D0C3;;
        transform: translateX(4.7rem);
      }

    

      &__icons{
          margin-left: 1rem;
      }

      &__features:hover ul.categories{
          max-height: inherit;
          opacity: 1;
          
      }

      
    }

     .categories{
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        max-height: 0px;
        opacity: 0;
        overflow: hidden;
        transition: opacity 300ms ease;
        /* display: flex;
        flex-direction: column; */
    }
   
</style>