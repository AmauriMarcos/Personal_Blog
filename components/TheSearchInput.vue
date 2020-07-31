<template>
  <div id="search-form">
    <form @submit.prevent="onSubmit" class="form-search-box">
        <input id="search" type="text" placeholder="Search" v-model="text" autocomplete="off">
        <button type="submit" class="search"></button>       
    </form>
  </div>   
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            text: ''
        }
    },
    
    methods: {
     onSubmit(){           
        this.$router.push(`/search/${this.text}`)
        this.text = ''                  
    },

  },
  
}
</script>

<style lang="scss" scoped>

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

  
    .form-search-box {
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 300px;
      height: 100px;
      transform: translateX(-5rem);     

    .search {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        outline: none;
        left: 0;
        width: 40px;
        height: 40px;
        background: #EE7B54;
        border-radius: 50%;
        transition: all 1s;
        transform: translateX(.4rem);
        z-index: 4;
        box-shadow: 0 0 4px 0 rgba(70, 70, 70, 0.4);
      // box-shadow: 0 0 25px 0 crimson;
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
  input {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 33px;
    height: 33px;
    outline: none;
    border: 1px solid #82D0C3;
    background: transparent;
    color: rgb(0, 0, 0);
    font-weight: 400;

    padding: 0 80px 0 20px;
    border-radius: 30px;

    transition: all 1s;
    opacity: 0;
    z-index: 5;
 
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 300px;
      opacity: 1;
      cursor: text;
    }
    &:focus ~ .search {
      right: -250px;
      background: #82D0C3;
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 25px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 25px;
        height: 2px;
        border: none;
        background: white;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: #EE7B54;
      opacity: 0.5;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
    }
  }
}
</style>