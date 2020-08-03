<template>
    <div class="navbar">

        <div class="navbar__brand-title">
          <nuxt-link tag='h1' to='/' class="navbar__brand-title-text"><span class="blooming">Blooming</span> Thoughts</nuxt-link>
        </div>
          
        <div class="navbar__explore-component">
          <Explore></Explore>
        </div>

        <div class="navbar__search-component">
            <TheSearchInput></TheSearchInput>
        </div>

        <div class="navbar__logo">
          <!--  <img  src="../assets/logoT.svg" alt=""> -->
        </div>
                
    </div>
</template>

<script>
import TheSearchInput from "../components/TheSearchInput";
import Explore from "../components/Explore";

import axios from "axios";
export default {
  components:{
    TheSearchInput,
    Explore
  },
    head: {
    link: [{rel:'stylesheet', href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"}]
  },
 

 
}
</script>

<style lang="scss" scoped>

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


    .navbar{
      width: 100%;
      height: 6rem;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgb(255, 255, 255);
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);  
      z-index: 500;

      @include respond(laptop){
          padding: 0%;     
          
      }

      @include respond(tab-port){
          display: none;    
          opacity: 0;
      }

      &__brand-title{
          grid-column: 1/2;
          grid-row: 1/2;
          /* transform: translateX(5rem); */

        @include respond(tab-port){
           display: none;                
        }
        
        &-text{
          font-size: 2rem;
          font-family: 'Abril Fatface', cursive;
          cursor: pointer;
          color: #82D0C3;
          transform: translateX(4.7rem);

          & .blooming{
            color: #ee7b54;
            margin-right: .5rem;
          }
            
          @include respond(laptop){
            font-size: 1.8rem;    
            
          }
          @include respond(tab-port){
            display: flex;
            flex-direction: column;  
            font-size: 1.6rem;        
          }
        }
    }

      &__explore-component{
        position: relative;
        grid-column: 2/4;
        grid-row: 1/2;
      }

      &__search-component{
        position: relative;
        grid-column: 4/5;
        grid-row: 1/2;
      }

   
      &__logo{
         grid-column: 1/1;
         grid-row: 1/2;
      }

      
    }

</style>