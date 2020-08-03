<template>
    <div class="newsletter">
        <div class="newsletter__img">
            <img src="../assets/img/lindinha.JPG" alt="">
        </div>
        <div class="newsletter__call">
            <h2>Stay up to date </h2>
            <h2>with our latest news</h2>
            <p>Let your thoughts bloom and your dreams blossom...</p>
            
        </div>
        <form @submit.prevent='submitNewsletter' class="newsletter__form" >
            <input type="email" placeholder="E-mail" class="newsletter__form-input" v-model="email">
            <button class="newsletter__form-button" type="submit">Subscribe</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            email: ''
        }
    },
    methods:{
        
        submitNewsletter(){
            axios.post("https://jolly-heyrovsky-2d6338.netlify.app/.netlify/functions/index", {email: this.email},
                { headers : {
                    "Content-Type": "application/json"
                }}
            ).then((res) =>{
                console.log(res.status)
            }).catch(error => {console.log(error)})

            this.$toasted.success("Thank you for your subscription !!!", { 
                theme: "toasted-primary", 
                position: "top-left", 
                containerClass: 'myContainer',
                fitToScreen: true,
                fullWidth: true,
                duration : 5000
            }) 

            this.email = ''
        
        }         
        
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

    ::placeholder{
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        color: #c1c1c1;
    }
    .newsletter{
        width: 100vw;
        height: 15rem;
        padding: 3% 10%;
        background-color: #bef5ec;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include respond(tab-land){   
             padding: 3% 4%;          
        }

        @include respond(tab-port){   
            height: 100%;
             padding: 5% 4%;
            display: grid;
            justify-items: center;
            grid-template-columns: repeat(2, 1fr);
           /*  gap: 1rem; */
            row-gap: 2rem;
        }

        @include respond(tab-land){   
             padding: 10% 4%;          
        }


        &__img{
            height: 12.5rem;
            width: 12.5rem;

            @include respond(tab-port){   
                grid-column: 1/2;
                grid-row: 2/3;                
            }

            @include respond(tab-land){   
                height: 11.5rem;
                width: 11.5rem;         
            }

            @include respond(phone){   
                height: 10.5rem;
                width: 10.5rem;   
               /*  justify-self: flex-start;  */  

                grid-column: 1/-1;
                grid-row: 1/2;         
            }
            

            & img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
            }
        }

        &__call{
                font-family: 'Montserrat', sans-serif;

                @include respond(tab-port){   
                    grid-column: 1/-1;
                    grid-row: 1/2;               
                }

                 @include respond(phone){   
                    grid-column: 1/-1;
                    grid-row: 2/3;               
                }
               
            h2{
                font-weight: 700;
                text-transform: uppercase;
                color: #489286;
                font-size: 1.6rem;
                width:100%;
                text-align: center;
                line-height: 1.3;

                @include respond(tab-land){   
                    font-size: 1.4rem;       
                }
           
            }

            p{
                font-weight: 500;
                font-size: 1rem;
                letter-spacing: 1.2;
                margin-top: 1rem;

                @include respond(tab-land){   
                    font-size: .9rem;       
                }
            }
        }

        &__form{
            max-width: 21.87rem;
            display: flex;

            @include respond(tab-port){   
                grid-column: 2/3;
                grid-row: 2/3;                
            }

            @include respond(phone){   
                grid-column: 1/-1;
                grid-row: 3/4;               
            }


            &-input{
                height: 2.875rem;
                border-radius: 2px;
                font-size: 1rem;
                color: #b1b1b1;
                line-height: 20px;
                letter-spacing: .1em;
                padding: 5px 0 0 0;
                text-indent: 16px;
                font-family: 'Montserrat', sans-serif;
              
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
                font-size: .8rem;
                outline: none;
                border-radius: 2px;
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
                text-align: center;
                width: 50%;
                background-color: #EE7B54;
                font-weight: 600;
                font-family: 'Montserrat', sans-serif;

                @include respond(phone){   
                     font-size: .7rem;              
                }

                &:hover{
                    background-color: #f06334;
                }

            }
        }
    }
</style>