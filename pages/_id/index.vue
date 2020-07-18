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
                    <p>by {{article.author}} <span class="simb">|</span></p>
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
   /*  layout: 'article', */
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
    h4{
         background: linear-gradient(180deg, rgba(255,255,255,0)65%, #83d1c4 65%);
         display: inline;
     
    }

    p{
        /* margin-top: 1rem; */
    }
    .main{
        display: grid;
        margin: 1rem;
        background: #f4f7f6;
    }
    .theBackground{
        height: 40rem;
        widows: 100%;
        background: #83d1c4;
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
            width: 95%;
            margin: 3rem;

            & h1{
                font-family: 'Alfa Slab One', cursive;
                color: #111111;
                line-height: 1;
                letter-spacing: .3rem;
               /*  font-weight: 700; */
                font-size: 4.8rem;
            }
        }

        &__info{
                font-family: 'Montserrat', sans-serif;
                font-size: .9rem;
                display: flex;
                padding: 2rem;
                margin-left: auto;
                transform: translateX(-10rem);
                font-weight: 300;

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
            font-family: 'Alegreya', serif;
            font-size: 1.3rem;
            line-height: 1.7;
            font-weight: 500;
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