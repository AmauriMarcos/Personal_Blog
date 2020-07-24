<template>
  <div class="comments">
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
        width: 100vw;

        &__disqus{
            width: 100%;
            padding:0 15%;
        }
    }
</style>