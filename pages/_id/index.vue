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

            <div class="article__info ">
                 <div class="article__info--author">
                    <p>{{article.author}} <span class="simb">||</span></p>
                </div>
                <div class="article__info--date">
                    <p>{{article.date}}</p>
                </div>             
            </div>
            <div class="article__body corp">
                <p v-html="content">{{content}}</p>
            </div>       
        </div>   
    </div>   
</template>



<script>

    const md = require('markdown-it')({
        html: true,
        linkify: true,
        typographer: true,
    })
    .use(require('markdown-it-highlightjs'))
    .use(require('markdown-it-attrs'));

import axios from "axios";
export default {
    layout: 'article',
      head:{
        link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" }],
        
        link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Ultra&display=swap" }],
        link: [{rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap" }]
    },
    data(){
        return{
            article: [],
            url: '',
            content: ''
        }
    },
    async created() {
        const result = await axios.get(`http://localhost:1337/posts/${this.$route.params.id}`);

        this.article = result.data
        this.url = this.article.image.url
        this.content = md.render(result.data.body)

    },

}
</script>

<style lang="scss">
    .main{
        display: grid;
        margin: 1rem;
    }
    .theBackground{
        height: 40rem;
        widows: 100%;
        background: #fce205;
        grid-column: 1/-1;
        grid-row: 1/2;
        z-index: 1;
/*         -webkit-clip-path: polygon(0 0, 100% 0, 100% 25vh, 0 100%); */
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 60vh);
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
            font-size: 2.5rem;
            font-family: 'Ultra', serif;
            color: #000000;
            line-height: 1;
            width: 95%;
            margin: 3rem;
        }

        &__info{
                font-family: 'Montserrat', sans-serif;
                font-size: .9rem;
                display: flex;
                padding: 2rem;
                margin-left: auto;
                transform: translateX(-10rem);
                font-weight: 700;

            &--author{
                font-family: inherit;
                font-size: inherit;
                      
            }

            &--date{
                font-family: inherit;
                font-size: inherit
            }

         
        }

        &__body{
            font-family: 'Montserrat', sans-serif;
            font-size: 1.1rem;
            line-height: 1.7;
            white-space: pre-line;

        }
    }

    .corp{
        padding: 2% 15%;
    }

    .simb{
        margin: 0 .5rem;
    }

</style>    