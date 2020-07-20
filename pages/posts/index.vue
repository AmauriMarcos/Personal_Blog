<template>
    <div id="posts">
        <h1 class="posts-title">ALL POSTS</h1>
        <div class="collection" >
            <div v-for="(post, i) in posts" :key='i'>
                <Post :image='post.image.url' 
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
        const res = await axios.get("http://localhost:1337/posts")
        return{posts: res.data}
    }
}
</script>

<style lang="scss">
    #posts{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 10rem;
    }

    .posts-title{

    }
</style>