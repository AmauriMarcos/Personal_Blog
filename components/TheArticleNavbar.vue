<template>
    <div>
        <div class="box">
            <div class="part1">
                <img  class="logo" src="../assets/logo.svg" alt="">
                <h3><span class="bloom">Blooming</span> Thoughts</h3>
            </div>
            <div class="part2">

            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    /* head: {
    link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;800;900&display=swap" }],
  }, */
}
</script>

<style lang="scss" scoped>
    .bloom{
        color: #ee7b54;
        margin-right: .5rem;
    }
   .box{
       display: flex;
    .part1{
       background-color: rgb(0, 0, 0);
       /* padding: 2rem; */
       width: 100%;
       height: 8rem;
       display: flex;
       justify-content: space-between;
       padding: 0 5rem;
       align-items: center;

       & h3{
           color: #fff;
       }
      

       h3{
           font-family: 'Abril Fatface', cursive;
           color: #fff;
           font-size: 2rem;
       }
       
   }

   /* .part2{
       background-color: #000;
       height: 4rem;
       width: 100%;
       align-self: flex-end;
    } */
   }

   .logo{
       width: 200px;
        height:200px;
       /*  transform: translateY(-2rem); */
     
   }

</style>
/*  ; */