<template>
  <div>
    <div class="nav-article">
        <h2 class="nav-article__brand">Blooming Thoughts</h2>
    </div>
    <Nuxt />
  </div>
</template>
<script>

export default {
  head: {
    link: [{rel:'stylesheet', href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"}]
  }
}
</script>
<style lang='scss' >
    .nav-article{
        height: 4.5rem;
        width: 100%;
        background-color: rgb(27, 27, 27);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;

        &__brand{
           color: #fff;
           font-family: 'Abril Fatface', cursive;
           font-size: 1.5rem;
           letter-spacing: .6px;
        }
    }

</style>
