<template>
    <nuxt-link :to="`/${id}`" class="wrap-link">
        <div class="card">
            <div class="card__thumbnail">
                <img :src="`${image}`" alt="" class="card__thumbnail-img">
            </div>
            <div class="card__category">
                <div class="card__category-name" v-for="(category, i) in categories" :key='i'>
                        <p>{{category.name}}</p>
                </div>
            </div>
            <h2 class="card__title">                
                <nuxt-link tag='a' :to="`/${id}`" class="card__title-link">
                    {{title}} 
                </nuxt-link>               
            </h2>
            <p class="card__description">Algo muito curto apenas para prender sua atenção</p>
            <p class="card__author">{{author}}</p>
            <p class="card__date">{{date}}</p>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: ["image", "categories", "title",  "date", "author", "id"],
    head:{
        link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" }],
        
        link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap" }],
         link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;800;900&display=swap" }],
         link: [{rel: 'stylesheet'}, {href: "https://fonts.googleapis.com/css2?family=B612:wght@700&family=Ubuntu:wght@700&display=swap"}]
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
    
    .wrap-link{
        text-decoration: none;     
    }
    .card {
        height: 25rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: .5rem;
    

        &__thumbnail{
            grid-column: 1/-1;
            grid-row: 1/2;
            z-index: 1;
            width: 100%;
            height: 16.875rem;

            @include respond(phone){
                 height: 15rem;
            }

            &-img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                
            }
        }

        &__category{
            
            background-color: #fff;
            grid-column: 2/3;
            grid-row: 1/2;
            z-index: 5;
            display: flex;
            justify-self: flex-end;
            align-self: flex-start;
            padding: .65rem;

            &-name{
                font-size: 1rem;
                font-family: 'Poppins', sans-serif;
                color: #323232;
                font-weight: 700;

                @include respond(phone){
                  font-size: .9rem;
                }
            }
        }

        &__title{
            grid-column: 1/-1;
            grid-row: 2/3;
             font-family: 'Abril Fatface', cursive;
          /*   font-weight: 700; */
            color: #323232;
            width: 95%;
            font-size: 2rem;
            line-height: 1.3;

            @include respond(phone){
                font-size: 1.7rem;
            }

            &-link{
                text-decoration: none;
                color: inherit;
            }

            &-link:hover{             
                background: linear-gradient(180deg, rgba(255,255,255,0)65%, #83d1c4 65%);
            }
        }

        &__description{
            grid-column: 1/-1;
            grid-row: 3/4;
            font-family: 'Poppins', sans-serif;
            /* font-family: 'Montserrat', sans-serif; */
            font-size: .9rem;
             color: #323232;
        }

        &__author{
            grid-column: 1/-1;
            grid-row: 4/5;
            font-size: .93rem;
            color: #323232;
            font-family: 'Poppins', sans-serif;
        }

        &__date{
            grid-column: 1/-1;
            grid-row: 5/6;
            font-size: .75rem;
            color: #7A7A7A;
            font-family: 'Poppins', sans-serif;
        }
     }

</style>