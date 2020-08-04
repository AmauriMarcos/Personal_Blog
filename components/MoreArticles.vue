<template>
    <nuxt-link :to="`/${id}`" class="wrap-link">
    <div class="more-articles-container">
        <div class="more-articles-container__box-img">
            <img :src="`${img}`" alt="" class="more-articles-container__box-img-thumbnail">
        </div>
        <p class="more-articles-container__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit quasi tempore fuga dicta. </p>
    </div>
    </nuxt-link>
</template>

<script>
export default {
    props: ["img", "id"]
}
</script>

<style lang="scss">
    .wrap-link{
        text-decoration: none;     
    }

    .more-articles-container{
         font-family: 'Alegreya Sans';
         width: 100%;
         height: 100%;
         margin-bottom: 3rem;

        &__title{
           font-size: 1.125rem;
        }

        &__box-img{
                width: 100%;
                height: 12rem;

            &-thumbnail{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__description{
             margin-top: .5rem;
             line-height: 1.5rem;
             font-size: 1rem;
             color: #323232;
        }
    }
</style>