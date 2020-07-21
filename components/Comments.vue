<template>
  <v-layout class="comment-box">
    <v-container>
      <vue-disqus
        shortname="blooming-thoughts"
        :identifier="`https://jolly-heyrovsky-2d6338.netlify.app/${id}`"
        :url="`https://jolly-heyrovsky-2d6338.netlify.app/${id}`"
      ></vue-disqus>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  props: ['id']
}
</script>