<template>
    <div id="posts">
        <h1 class="posts-title">ALL POSTS</h1>
        <div class="collection" >
            <div v-for="(post, i) in posts" :key='i'>
                <Post :image='post.image.name' 
                      :categories='post.categories'
                      :title='post.title'
                      :date='post.date'
                      :author='post.author'
                      :id='post.id'
                ></Post>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    async asyncData(){
        const res = await axios.get("https://blooming-thoughts.herokuapp.com/posts")
        return{posts: res.data}
    }
}
</script>

<style lang="scss">

    @mixin respond($breakpoint){
        @if $breakpoint == phone {
            @media only screen and (max-width: 37.5em){ @content }; //600px
        }

        @if $breakpoint == tab-port {
            @media only screen and (max-width: 62.5em){ @content }; //1000px
        }

        @if $breakpoint == tab-land {
            @media only screen and (max-width: 75em){ @content }; //1200px
        }

        @if $breakpoint == laptop {
            @media only screen and (max-width: 90em) {@content}; //1440px
        }

        @if $breakpoint == big-desktop {
            @media only screen and (min-width: 112.5em){ @content }; // + 1800px
        }
    }

    #posts{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 10rem;
    }

    .posts-title{
        font-family: 'Montserrat', sans-serif;
        color: #323232;
        font-weight: 700;
        padding: 2% 0;
        font-size: 1.4rem;
        z-index: 100;
        text-align: center;
        

        @include respond(phone){
            font-size: 1.2rem;     
            padding: 5% 0 10% 0;          
        }
    }
</style>