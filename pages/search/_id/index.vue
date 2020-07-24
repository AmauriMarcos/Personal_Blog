<template>
    <div class="category-id-page">
        <div class="category-id-page__box">
            <h3>Search Results for: {{$route.params.id}}</h3>
        </div>

        <div v-for="result in results" :key='result.id' class="category-id-page__article" >
            <Search
                :date='result.date'
                :title='result.title'
                :image='result.image.name'
                :id='result.id'
                :author='result.author'
                v-if="!empty"
            ></Search>
        </div>
       
        <div class="no-results" v-if="empty">
            <h2>0 results for {{$route.params.id}}</h2>
        </div>
       
    </div>
</template>
<script>
import Search from "../../../components/Search";
import axios from "axios";
export default {
    components:{
        Search
    },
    data(){
        return{
            results: [],
            empty: false
        }
    },
    async created(){
       const res = await axios.get(`https://blooming-thoughts.herokuapp.com/posts?title_contains=${this.$route.params.id}`)
            
            if(typeof res.data !== 'undefined' && res.data.length > 0){
                this.results = res.data
                this.empty = false;
            }else{             
                this.empty = true
            }
                   
    }
   
}
</script>

<style lang="scss">
    .no-results{
        height: 90vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-top: 5rem;
    }
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