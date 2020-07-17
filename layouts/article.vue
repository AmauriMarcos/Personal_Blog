<template>
  <div>
    <TheArticleNavbar></TheArticleNavbar>
    <Nuxt />
  </div>
</template>
<script>
import TheArticleNavbar from "../components/TheArticleNavbar"
export default {
  components: {
    TheArticleNavbar
  },
  head: {
    link: [{rel:'stylesheet', href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"}]
  }
}
</script>
<style lang='scss' >


</style>
