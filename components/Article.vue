<template>
     <nuxt-link :to="`/${id}`" class="wrap-link"> 
     <div class="blooming-category-article">
       <!--   <nuxt-link :to="`/${id}`"> -->
         <div class="blooming-category-article__display">
            <p class="blooming-category-article__display-date">{{date}}</p>
            <h2 class="blooming-category-article__display-title">{{title}}</h2>
            <p class="blooming-category-article__display-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad rem harum, laborum voluptatum maiores beatae!</p>
            <h5 class="blooming-category-article__display-author">{{author}}</h5>
         </div>
         
         <div class="blooming-category-article__box-image">
             <img :src="`${image}`" alt="" class="blooming-category-article__box-image__img">
         </div>
         
     </div>
     </nuxt-link>
</template>

<script>
export default {
    props: ['date', 'title', 'author', 'image', 'id']
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
    .wrap-link{
        text-decoration: none;     
    }
    .blooming-category-article{
        display: flex;
        justify-content: space-between;
        position: relative;
        font-family: 'Montserrat', sans-serif;

        
        &::after{
            content: "";
            height: 1px;
            background-color: rgba(50, 50, 50, 0.25);
            width: 95%;
            position: absolute;
            bottom: -15px;

        }

        &__display{
                
            & > *{
                margin: .8rem 0;
            }
            &-date{
                font-size: .7rem;
                font-weight: 300;
            }

            &-title{
                font-size: 1.5625rem;
                font-weight: 700;
                color: #323232;
              
            }

            &-description{
                width: 88%;     
                font-weight: 300;
                color: #323232;   

            }

            &-author{
                color: #323232;
                font-weight: 600;
                text-decoration: none;
                font-size: 1rem;
            }
        }

        &__box-image{
            width: 12rem;
            height: 12rem;

            @include respond(tab-port){
                width: 16rem;
                height: 12rem;
                align-self: center;
            }

            @include respond(tab-port){
                width: 16rem;
                height: 8rem;
                align-self: center;
            }

            @include respond(phone){
                width: 30rem;
                height: 8rem;
                align-self: center;
            }
            

            &__img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
</style>