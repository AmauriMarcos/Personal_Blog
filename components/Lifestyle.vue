<template>
    <nuxt-link :to="`/${id}`" class="wrap-link">
        <div class="card">
            <div class="card__thumbnail">
                <img :src="`${image}`" alt="" class="card__thumbnail-img">
            </div>
            <div class="card__category">
                <div class="card__category-name">
                        <p>Lifestyle</p>
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
    props: ['image', 'title', 'id', 'date', 'author']
}
</script>
<style lang="scss">

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
            }
        }

        &__title{
            grid-column: 1/-1;
            grid-row: 2/3;
            font-family: 'Abril Fatface', cursive;
            color: #323232;
            width: 95%;
            font-size: 2rem;
            line-height: 1.3;

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