<template>
    <nav class="navbar">
         <h1 class="navbar__title">Blooming Thoughts</h1>
         <div class="navbar__features">
            <ul class="navbar__list">
              <li class="navbar__list-items">Explore</li>
              <li class="navbar__list-items">Join</li>
            </ul>
            <div class="navbar__icons">
               <p>Search</p>
            </div>
         </div>
    </nav>
</template>

<script>
export default {
    head: {
    link: [{rel:'stylesheet', href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"}]
  },
}
</script>

<style lang="scss" scoped>
    .navbar{
      width: 100%;
      height: 6rem;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgb(255, 255, 255);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      z-index: 5;

      &__title{
        font-size: 2rem;
        font-family: 'Abril Fatface', cursive;
      }

      &__features{
          display: flex;
          justify-content: center;
          align-items: center;
      }

      &__list{
         list-style: none;
         display: flex;
         justify-content: center;
         align-items: center;

        &-items{
          margin-right: .5rem;
        }

      }

      &__icons{
          margin-left: 1rem;
      }
    }
</style>