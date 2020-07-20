<template>
    <div class="newsletter">
        <div class="newsletter__img">
            <img src="https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/72785222_2452272684856530_2813152464474210304_o.jpg?_nc_cat=101&_nc_sid=84a396&_nc_ohc=3om4umRwAMEAX9FM9xy&_nc_ht=scontent.fbeg7-1.fna&oh=8a4b65559868d71fb7fa14abaff1dc5e&oe=5F39E219" alt="">
        </div>
        <div class="newsletter__call">
            <h2>Keep it Up </h2>
            <h2>with Blooming</h2>
            
        </div>
        <form @submit.prevent='sendNews' class="newsletter__form" >
            <input type="email" placeholder="E-mail" class="newsletter__form-input">
            <button class="newsletter__form-button">Subscribe</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        sendNews(){
            
        }
    }
}
</script>

<style lang="scss">

    ::placeholder{
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        color: #c1c1c1;
    }
    .newsletter{
        width: 100vw;
        height: 15rem;
        padding: 1% 16%;
        background-color: #bef5ec;
        display: flex;
        justify-content: space-between;
        align-items: center;


        &__img{
            height: 12.5rem;
            width: 12.5rem;
            

            & img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
            }
        }

        &__call{
                font-family: 'Montserrat', sans-serif;
               
            h2{
                font-weight: 700;
                text-transform: uppercase;
                color: #489286;
                font-size: 2rem;
                width:100%;
                text-align: center;
                line-height: 1.3;
            }

            p{
               /*  font-weight: 500;
                font-size: 1.3rem;
                letter-spacing: 1.2; */
            }
        }

        &__form{
            max-width: 21.87rem;
            display: flex;


            &-input{
                height: 2.875rem;
                border-radius: 2px;
                font-size: 14px;
                color: #b1b1b1;
                line-height: 20px;
                letter-spacing: .1em;
                padding: 5px 133px 0 0;
                text-indent: 16px;
              
                background-color: #fff;
                width: 100%;

                &[type='email']{
                    outline: none;
                }
                
            }

            &-button{
                height: 2.875rem;
                padding: 0 14px 0 15px;
                color: #000000;
                text-transform: uppercase;
                border-radius: 2px;
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
                text-align: center;
                width: 100%;
                background-color: #EE7B54;
                font-weight: 600;
                font-family: 'Montserrat', sans-serif;

            }
        }
    }
</style>