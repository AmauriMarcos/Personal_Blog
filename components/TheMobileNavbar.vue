<template>
    <div class="nav-container">
        <nuxt-link tag='p' to='/' class="nav-container__title"><span class="blooming">Blooming<br></span> Thoughts</nuxt-link>

        <img @click="goHome()" src="../assets/browser.svg" alt="" class="home-icon" :class="{ showHome: homeOpacity}">

        <button class="search" @click="openForm()"></button>

        <div id="search-form">
            <form @submit.prevent="onSubmit" class="form-search-box" :class="{ open2: formIs }">
                <input id="search" type="text" placeholder="Search" v-model="text" autocomplete="off">
                <button type="submit" class="button-search"><img src="../assets/search-blog.svg" alt="" class="icon"></button>       
            </form>
        </div>

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
            text: '',
            categories: [],      
            isActive: false,
            formIs: false,
            homeOpacity: false
        }
    }, 
    
  async created(){
     const res = await axios.get("https://blooming-thoughts.herokuapp.com/categories")
     this.categories = res.data
  },
  methods: {
      changeClass(){
        this.isActive = !this.isActive;  
        this.homeOpacity = !this.homeOpacity;   
        
        if(this.homeOpacity){
            this.homeOpacity = true;
        }
      },
      openForm(){
        this.formIs = !this.formIs;   
        this.homeOpacity = !this.homeOpacity;    
      },
      removeClass(){
        this.isActive = false;
        this.formIs = false;
        this.homeOpacity = false;
      },
      onSubmit(){
        this.$router.push(`/search/${this.text}`)
        this.text = '' 
        this.formIs = false;
        this.homeOpacity = false;
      },
      goHome(){
          this.$router.push("/");
          this.formIs = false;
          this.homeOpacity = false;
          this.isActive = false;
      }
  }

}
</script>

<style lang="scss" scoped>

@mixin respond($breakpoint){

        @if $breakpoint == iphone {
            @media only screen and (max-width: 26.875em){ @content }; //430px
        }
        @if $breakpoint == phone {
            @media only screen and (max-width: 43.75em){ @content }; //700px
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

    .home-icon{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 2.3rem;
        left: 3.5rem;
        z-index: 700;
        opacity: 0;
        cursor: pointer;
        outline: none;

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

    form{

        display: flex;       
        justify-content: center;
        align-items: center;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;


        @include respond(tab-port){ 
            position: fixed;      
            z-index: 500;
            background: radial-gradient(#b5eee4, #6bb9ac);
            height:100vh;      
            width: 100%;   
            flex-direction: column;     
            clip-path: circle(100px at 90% -35%);
            transition: all .3s ease-out;  
                  
        }
    }

    .button-search{
        border: none;
        background-color: transparent;
        padding: .5rem 1rem;       
        cursor: pointer;
        z-index:10;
        transform: translateX(9rem) translateY(-1.5rem);
    }

    .icon{
        width: 32px;
        height: 32px;
        cursor: pointer;
        
    }

    #search{
        z-index: 1000;
        border: none;
        border-bottom: 1px solid #ffffff;
        width: 80%;
        padding: 1rem .5rem;
        outline: none;
        font-family: 'Montserrat', sans-serif; 
        font-size: 2rem;
        transform: translateY(2rem);
        color: #ffffff;
        position: relative;
        z-index: 5;
        
    }

    ::placeholder{
        font-family: 'Montserrat', sans-serif; 
        font-size: 2rem;
        color: #ffffff;
        font-weight: 200;
    }

    .search {
        position: absolute;
        margin: auto;
        z-index: 600;
        top: 0;
        right: -10rem;
        bottom: 0;
        outline: none;
        left: 0;
        width: 40px;
        height: 40px;
        background: #EE7B54;
        border-radius: 50%;
        transition: all 1s;
        z-index: 4;
        box-shadow: 0 0 4px 0 rgba(70, 70, 70, 0.4);
      // box-shadow: 0 0 25px 0 crimson;

      @include respond(tab-land){
          right: -28rem;
      }
      
      @include respond(phone){
          right: -12rem;
      }

      @include respond(iphone){
          right: -6rem;
      }

    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 13px;
      right: 0;
      bottom: 0;
      left: 13px;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(45deg);
      transition: all .5s;
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -2px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid white;
      transition: all .5s;
    }
  }

    ul,  {
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

    .open2{
          clip-path: circle(1300px at 90% -35%);
         
    }

    .showHome{
        opacity: 1;
    }

    .closeHome{
        opacity: 0;
    }

    .close{
         clip-path: circle(100px at 90% -35%);
    }


    
</style>