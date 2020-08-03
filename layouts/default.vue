<template>
  <div>
    <TheNavbar></TheNavbar>
    <TheMobileNavbar></TheMobileNavbar>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import TheNavbar from "../components/TheNavbar";
import TheMobileNavbar from "../components/TheMobileNavbar";
import Footer from "../components/Footer";
export default {
  TheMobileNavbar,
   TheNavbar,
   Footer
}
</script>
<style lang='scss' scoped>
    
</style>
