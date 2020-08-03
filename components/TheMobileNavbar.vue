<template>
    <div class="nav-container">
        <nuxt-link tag='p' to='/' class="nav-container__title"><span class="blooming">Blooming<br></span> Thoughts</nuxt-link>
        <img class="nav-search" src="../assets/search-blog.svg" alt="">
        <nav class="nav">
             
            <div class="menu" @click="changeClass()">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>

            <div class="burger burger-arrow open">
                <div class="burger-lines"></div>
            </div>

            <ul  :class="{ open: isActive }">
                <li class="nav-links" @click="removeClass()">
                    <nuxt-link tag='a' to='/about' class="link" >About</nuxt-link> 
                </li>
            
                <li @click="removeClass()" class="nav-links" v-for='(category, i) in categories' :key="i">
                    <nuxt-link tag='a' :to="`/categories/${category.name}`" class="link">{{category.name}}</nuxt-link>
                </li>                    
            </ul>
        </nav>
    </div>
    
</template>

<script>

import axios from "axios";
export default {
    
    data(){
        return{
            categories: [],      
            isActive: false
        }
    }, 
  async created(){
     const res = await axios.get("https://blooming-thoughts.herokuapp.com/categories")
     this.categories = res.data
  },
  methods: {
      changeClass(){
          this.isActive = !this.isActive;        
      },
      removeClass(){
          this.isActive = false;
      }
  }

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

    .nav-search{
        width: 32px;
        height: 32px;
        position: absolute;
        top: 2rem;
        right: 8rem;
    }
    .nav-container{
        height: 6rem;
        width: 100%;
        display: none;
        position: fixed;  
        top: 0;
        left: 0;      
        background-color: white; 
        z-index: 500;
        overflow: hidden;

        @include respond(tab-port){
            display: block;
        }

        &__title{
            font-size: 1.6rem;
            font-family: 'Abril Fatface', cursive;
            cursor: pointer;
            color: #82D0C3;
            position: absolute;
            top: .9rem;
            left: 2rem;

            & .blooming{
                color: #ee7b54;
                margin-right: .5rem;
          }
        }

    }

    .menu {
        display: inline-block;
        position: absolute;
        width: 45px;
        top: 2.3rem;
        right: 3rem;
/*         transform: translate(-50%, 150%); */
        font-size: 26px;
        font-family: 'Montserrat', sans-serif; 
        font-weight: 700;
        color: #ee7b54;
        cursor: pointer;
        z-index: 600;
    }

   
    .bar {
        width: 80%;
        height: 4px;
        background: #ee7b54;
        margin: 0 auto 7px;
        transition: transform 0.4s ease;
    }

  
    .nav{
   
        position: relative;        

    }

    ul {
        width: 50%;
        height: 100%;
        list-style: none;
        display: flex;       
        justify-content: center;
        align-items: center;
        margin-left: auto; 


        
        @include respond(tab-port){ 
            position: fixed;      
            z-index: 500;
            background: radial-gradient(#b5eee4, #6bb9ac);
            height: 100vh;      
            width: 100%;   
            flex-direction: column;     
            clip-path: circle(100px at 90% -35%);
            transition: all .3s ease-out;  
                  
        }
    }

    .nav-links{
        font-size: 35px;
        margin-bottom: 1.3rem;
        font-weight: 300;
        text-transform: uppercase;
    }
 
    .link{    
        color: white;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;  

        &:link,
        &:visited{
            display: inline-block;
            font-size: 1.7rem;
            font-weight: 300;
            text-decoration: none;
            color: white;
            padding: .325rem 1.25rem;
            text-transform: uppercase;
            background: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
            background-size: 225%;
            transition: all .3s;         
        }

        &:hover,
        &:active {
            background-position: 100%;
            color: #ee7b54;
            transform: translateX(.625rem);
        }
         
    }

    .open{
        clip-path: circle(1300px at 90% -35%);
    }

    .close{
         clip-path: circle(100px at 90% -35%);
    }


    
</style>