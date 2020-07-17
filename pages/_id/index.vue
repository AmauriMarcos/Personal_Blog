<template>
    <div class="main">
        <div class="theBackground">

        </div>
        <div class="article">
           
            <div class="article__title corp">
                <h1>{{article.title}}</h1>
            </div>

             <div class="article__image">
                <img :src="`http://localhost:1337${url}`" alt="">
            </div>

            <div class="article__info corp">
                <div class="article__info--date">
                    <p>{{article.date}}</p>
                </div>
                <div class="article__info--author">
                    <p>{{article.author}}</p>
                </div>
            </div>
            <div class="article__body corp">
                <p>{{article.body}}</p>
            </div>       
        </div>   
    </div>
    
</template>

<script>
import axios from "axios";
export default {
    layout: 'article',
      head:{
        link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" }],
        
        link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap" }]
    },
    data(){
        return{
            article: [],
            url: ''
        }
    },
   async created(){
       const res = await axios.get(`http://localhost:1337/posts/${this.$route.params.id}`)
       this.article = res.data
       this.url = this.article.image.url
    }
}
</script>

<style lang="scss">
    .main{
        display: grid;
    }
    .theBackground{
        height: 40rem;
        widows: 100%;
        background: rgb(241, 241, 241);
        grid-column: 1/-1;
        grid-row: 1/2;
        z-index: 1;
    }
    .article{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        grid-column: 1/-1;
        grid-row: 1/2;
        z-index: 10;
        padding: 3% 10%;

        &__image{
            height: 30rem;
            width: 55rem;
           

            img{
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        &__title{
            font-size: 1.8rem;
            font-family: 'Abril Fatface', cursive;
            color: #323232;
            width: 90%;
            margin: 3rem;
        }

        &__info{

            &--date{

            }

            &--author{

            }
        }

        &__body{

        }
    }

    .corp{
        padding: 2% 15%;
    }

</style>    