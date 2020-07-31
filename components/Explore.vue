<template>
    <div>
        <ul id="explore">
            <li>Explore
                <ul>
                    <div class="small-block"></div>
                    <li v-for='(category, i) in categories' :key="i">
                        <nuxt-link tag='a' :to="`/categories/${category.name}`" class="myLink">{{category.name}}</nuxt-link>
                    </li> 
                    
                </ul>
            </li>
            <nuxt-link tag='li' to='/about' class="about">About</nuxt-link>           
        </ul>
    </div>    
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            categories: [],      
        }
    }, 
  async created(){
     const res = await axios.get("https://blooming-thoughts.herokuapp.com/categories")
     this.categories = res.data

  }
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
  
    ul > li {
        position: relative;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        list-style: none;
        font-weight: 700;
    
        @include respond(laptop){
        font-size: .9rem; 
        transform:  translateX(1rem);              
        }

        @include respond(tab-land){
        transform:  translateX(3rem);              
        }
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
        
        @include respond(laptop){
        font-size: .8rem;   
        transform: translateY(.2rem) translateX(-2.3rem);          
        }

        @include respond(tab-land){
        transform: translateY(.2rem) translateX(-1rem);      
        padding: 0;           
        }
    }

    ul ul li{
    padding: .5rem .3rem;

        @include respond(laptop){   
        transform: translateX(10px);          
        }

    @include respond(tab-land){
        padding: .5rem .35rem; 
            transform: translateX(10px); 
                
        }

    }

    ul > li:hover ul {
        display: block;
    }

    a{
    text-decoration: none;
    color: rgb(29, 29, 29);
    
    }

    #explore{
        display: flex;
        transform: translateX(-5rem);

        .about{
            margin-left: 1.4rem;
            
        }
    }

    .small-block{
      height: 15px;
      background-color: transparent;
    }

    .myLink:hover{
      color: #82D0C3;
      
    }


</style>