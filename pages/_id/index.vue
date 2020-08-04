<template>
    <div class="main">
      
        <div class="theBackground">
            
        </div>
      
        <div class="article">
           
            <div class="article__title corp">
                <h1>{{article.title}}</h1>
            </div>

             <div class="article__image">
                <img :src="`${url}`" alt="">
            </div>

            <div class="article__info ">
                <div class="article__info--picture">
                    <img src="../../assets/img/lindinha.JPG" alt="" class="article__info--picture-round-img">
                </div>
                 <div class="article__info--author">
                    <p>by {{article.author}}</p>
                </div>
                <div class="article__info--date">
                    <p>{{date}}</p>
                </div>             
            </div>

            <div class="article__body corp">
                <p v-html="content">{{content}}</p>
            </div>   
             
        </div>   
         <Comments :id='article.id'></Comments>  
    </div>   
</template>



<script>

const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
})
.use(require('markdown-it-highlightjs'))
.use(require('markdown-it-attrs'));

import axios from "axios";
import Comments from "../../components/Comments";
export default {
   /*  layout: 'article', */
   componets:{
       Comments
   },
    data(){
        return{
            article: [],
            url: '',
            content: '',
            date: ''
        }
    },
    async created() {
        const result = await axios.get(`https://blooming-thoughts.herokuapp.com/posts/${this.$route.params.id}`);

        this.article = result.data
        this.url = this.article.image.name
        console.log(this.article.date);
        this.content = md.render(result.data.body);  

        const d = new Date(this.article.date)
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
        this.date = `${da} ${mo} ${ye}`
             

    },

}
</script>

<style lang="scss">

@mixin respond($breakpoint){
  
        @if $breakpoint == phone {
            @media only screen and (max-width: 48.125em){ @content }; //770px
        }

         @if $breakpoint == pre-phone {
            @media only screen and (max-width: 56.25em){ @content }; //900px
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

    body{
        background: #f4f7f6;
    }
    
    h4{
         background: linear-gradient(180deg, rgba(255,255,255,0)65%, #83d1c4 65%);
         display: inline;
     
    }

    a{
        text-decoration: none;
        font-family: 'Alegreya Sans';
        color: tomato;
    }

    p{
        /* margin-top: 1rem; */
    }

  
    .main{
        display: grid;

        margin: 1rem;
        background: #f4f7f6;

         @include respond(pre-phone){
            margin: 0;           
        }
    }
    .theBackground{
        height: 40rem;
        width: 100%;
        background: #83d1c4;
        margin-right:3.15rem;
        grid-column: 1/-1;
        grid-row: 1/2;
        z-index: 1;
        /* -webkit-clip-path: polygon(0 0, 100% 0, 100% 25vh, 0 100%); */
        clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 70vh);
        clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 70vh);

         @include respond(pre-phone){
            margin-right: 0;
            clip-path: none;  
            background: #f4f7f6;
        }

        
    }
    .article{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        grid-column: 1/-1;
        grid-row: 1/2;
        z-index: 10;
        padding: 3% 5%;

        @include respond(tab-land){
            padding: 0;
        }

         @include respond(port){
            padding: 3% 8%;
        }
        

        &__image{
            height: 30rem;
            width: 55rem;
             margin: 0 auto;

             @include respond(tab-land){
                height: 25rem;
                width: 50rem;
             }

             @include respond(tab-port){
                height: 20rem;
                width: 45rem;
               
            }

            @include respond(pre-phone){
                height: 20rem;
                width: 100vw;
              
            }
       

            img{
                object-fit: cover;
                width: 100%;
                height: 100%;
                
            }
        }

        &__title{
           /*  width: 95%; */
            margin: 7rem 0 3rem 0;
            color: #323232;
           

            & h1{
               font-family: 'Alegreya Sans';
                color: #323232;
                line-height: 1.1;
                letter-spacing: .1rem;
               /*  font-weight: 700; */
                font-size: 4.4rem;
                font-weight: 900;

                @include respond(tab-land){
                     font-size: 4rem;
                }

                 @include respond(pre-phone){
                    font-size: 3.3rem;             
                 }

                  @include respond(phone){
                    font-size: 2.7rem;     
                    margin-top: 2rem;        
                 }
            }
        }

        &__info{
                font-family: 'Montserrat', sans-serif;
                font-size: .9rem;
                display: grid;
                grid-template-columns: repeat(2,1fr);
                justify-content: center;
                align-items: center;
                padding: 2rem;
                margin-left: auto;
                transform: translateX(-15rem);
                font-weight: 300;
                column-gap: 1rem;

                 @include respond(pre-phone){
                      transform: translateX(-1rem);            
                 }

            &--picture{
                grid-column: 1/2;
                grid-row: 1/3;
                width: 50px;
                height: 50px; 
                justify-self: flex-end;

                 @include respond(pre-phone){
                    width: 40px;
                    height: 40px;            
                 }

                &-round-img{
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &--author{
                font-family: 'Alegreya Sans';
                font-weight: 700;
                grid-column: 2/3;
                grid-row: 1/2;
                font-family: inherit;
                font-size: inherit;

                 @include respond(pre-phone){
                    font-size: .8rem;           
                 }
                      
            }

            &--date{
                font-family: 'Alegreya Sans';
                font-weight: 500;
                grid-column: 2/3;
                grid-row: 2/3;
                font-family: inherit;
                font-size: inherit;

                @include respond(pre-phone){
                    font-size: .7rem;           
                 }
            }

         
        }

        &__body{
            font-family: 'Alegreya Sans';
            font-size: 1.5rem;
            line-height: 1.7;
            font-weight: 300;
            white-space: pre-line;
            

        }
    }

    .corp{
        padding: 2% 9%;
    }


</style>    