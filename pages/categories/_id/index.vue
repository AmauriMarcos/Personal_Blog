<template>
    <div class="category-id-page">
        <div class="category-id-page__box">
            <h3>Category: {{$route.params.id}}</h3>
        </div>
         
        <div v-for="article in articles" :key='article.id' class="category-id-page__article">
            <Article :date='article.date'
                     :title='article.title'
                     :author='article.author'
                     :image='article.image.name'
                     :id='article.id'
            ></Article>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Article from "../../../components/Article"
export default {
    components:{
        Article
    },
    data(){
        return{
            category: [],
            articles: []
        }
    },
    async created(){
        const res = await axios.get(`https://blooming-thoughts.herokuapp.com/categories?name=${this.$route.params.id}`)
        this.category = res.data
        this.category.map((categ) =>{
            this.articles = categ.posts
        })
    },
  
}
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