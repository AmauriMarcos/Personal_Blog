<template>
    <div class="category-id-page" @>
        <div class="category-id-page__box">
            <h3>Search Results for: {{searchText}}</h3>
        </div>
        <div v-for="result in results" :key='result.id' class="category-id-page__article">
            <Search
               :date='result.date'
               :title='result.title'
               :image='result.image.name'
               :id='result.id'
               :author='result.author'
            ></Search>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Search from "../../components/Search";

export default {
    components:{
      Search
    },
    data(){
        return{
            results: [],
            searchText: ''
        }
    },
    mounted(){
        
         this.$root.$on('search-text', text => {
             this.searchText = text
             axios.get(`https://blooming-thoughts.herokuapp.com/posts?title_contains=${text}`)
             .then((res) =>{
                return this.results = res.data
                 console.log(this.results)
             }).catch((err) =>{
                 console.log(err)
             })
        })  
    }
}
/*  */
</script>

<style lang="scss" scoped>
    .category-id-page{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 8rem;

        &__box{ 
           
            width: 100%;
            height: 70px;
            background-color: #f6f6f6;
            display: flex;
            align-items: center;
            padding: 3% 16%;

           /*  margin-left: 2rem; */

            h3{
                font-family: 'Montserrat', sans-serif;
                font-size: 1.2rem;
                font-weight: 600;
            }
        }

        &__article{
            width: 100%;
            padding: 1% 16%;
        }
    }
</style>