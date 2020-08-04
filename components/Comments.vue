<template>
  <div class="comments">
      <h2 class="commments__title"></h2>
      <Disqus class="comments__disqus"></Disqus>
  </div>
    <!--   <vue-disqus
        shortname="blooming-thoughts"
        :identifier="`https://jolly-heyrovsky-2d6338.netlify.app/${id}`"
        :url="`https://jolly-heyrovsky-2d6338.netlify.app/${id}`"
        
      ></vue-disqus> -->
      
    
</template>

<script>
export default {
  props: ['id']
}
</script>

<style lang="scss">
    .comments{
        width: 100%;

         &__title{
              font-family: 'Alegreya Sans';
              font-weight: 500;
              text-transform: uppercase;
              font-size: 1.3rem;  
              padding:0 14%; 
              margin: 0;    
            }

        &__disqus{
            width: 100%;
            padding:0 14%;


             &::before{
                content: "";
                background-color: #323232;
                height: 1px;
                width: 100%;
                z-index: 800;
                display: inline-block;
                text-align: center;
            
            }
        }
    }
</style>