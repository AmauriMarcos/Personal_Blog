<template>
     <div class="blooming-category-article">
         <div class="blooming-category-article__display">
            <p class="blooming-category-article__display-date">{{date}}</p>
            <h2 class="blooming-category-article__display-title">{{title}}</h2>
            <p class="blooming-category-article__display-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad rem harum, laborum voluptatum maiores beatae!</p>
            <h4 class="blooming-category-article__display-author">{{author}}</h4>
         </div>
         
         <div class="blooming-category-article__box-image">
             <img :src="`http://localhost:1337${image}`" alt="" class="blooming-category-article__box-image__img">
         </div>
     </div>
</template>

<script>
export default {
    props: ['date', 'title', 'author', 'image']
}
</script>

<style lang="scss">
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

            }

            &-author{
                color: #323232;
                font-weight: 600;
            }
        }

        &__box-image{
            width: 12rem;
            height: 12rem;
            transform: translateX(-5rem);

            &__img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
</style>