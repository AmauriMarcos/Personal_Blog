<template>
    <div class="nav-container">
        <nav class="nav">
            <div class="menu" @click="changeClass()">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
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

    .nav-container{
        height: 6rem;
        width: 100%;
        display: none;
        position: fixed;  
        top: 0;
        left: 0;      
        background-color: white; 
        z-index: 500;

        @include respond(tab-port){
            display: block;
        }

    }

    .menu {
        display: inline-block;
        position: absolute;
        width: 30px;
        top: 50%;
        left: 85%;
        transform: translate(-50%, 200%);
        font-size: 26px;
        font-family: 'Montserrat', sans-serif; 
        font-weight: 700;
        color: #ee7b54;
        cursor: pointer;
        z-index: 600;
    }

    .menu::before,
    .menu::after {
        position: absolute;
        transition: 0.4s ease;
        opacity: 0;
        pointer-events: none;
    }
    .menu:before {
        content: "M \00a0 \00a0 \00a0 \00a0 \00a0 \00a0 \00a0 \00a0 U";
        top: -60px;
        left: -90%;
        width: 215px;
    }
    .menu:after {
        content: "N";
        top: 50px;
        left: 110%;
    }
    .menu:hover::before,
    .menu:hover::after {
        top: -7px;
        opacity: 1;
        transition: 0.2s ease, opacity 0.17s 0.03s ease-in;
    }

    .bar {
        width: 80%;
        height: 3px;
        background: #ee7b54;
        margin: 0 auto 4.5px;
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
            clip-path: circle(100px at 90% -15%);
            transition: all 1s ease-out;  
                  
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
            transition: all .4s;         
        }

        &:hover,
        &:active {
            background-position: 100%;
            color: #ee7b54;
            transform: translateX(.625rem);
            font-weight: 00;
        }
         
    }

    .open{
        clip-path: circle(1300px at 90% -15%);
    }

    .close{
         clip-path: circle(100px at 90% -15%);
    }
</style>