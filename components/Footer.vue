<template>
<div>
  
    <div class="footer">

        <div class="footer__medias">
            <h3 class="footer__title">Follow Us</h3>
            <div>
                <ul>
                    <li>
                        <a href="#">
                            <img src="../assets/bt-facebook.svg" alt="Facebook Icon" class=" social-media">
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="../assets/bt-instagram.svg" alt="Instagram Icon" class=" social-media">
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="../assets/bt-twitter.svg" alt="Twitter Icon" class=" social-media">
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="../assets/bt-pinterest.svg" alt="Pinterest Icon" class=" social-media">
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
  
        <div class="footer__content">                     
            <h3 class="footer__title">Contact Information</h3>

            <div class="footer__content-group">
                <p class="footer__content-group-sub-title">Blooming Thoughts</p>
                <p class="footer__content-group-text">442, Bulevar, broj 8</p>
                <p class="footer__content-group-text">Brzi Brod, Nis</p>
                <p class="footer__content-group-text"><span>Email:</span> blooming-thoughts@gmail.com</p>
            </div>                
        </div>   

        <div class="footer__form">             
            <form 
                action="/" 
                data-netlify="true"
                netlify-honeypot="bot-field" 
                class="form" 
                method="post"  
                name="blooming-thoughts" 
                @submit.prevent="handleSubmit"
            >
                <input type="hidden" name="form-name" value="blooming-thoughts" />

                <h3 class="footer__title">Send Us A Message</h3>

                <label for="name"></label>
                <input type="text" id="name" v-model="form.name" name="name" placeholder="Name" class="footer__form-input"  autocomplete="off"> 

                <label for="email"></label>
                <input type="email" id="email" v-model="form.email" name="email" placeholder="Email" class="footer__form-input"  autocomplete="off">

                <label for="message"></label>
                <textarea name="message" id="message" v-model="form.message"  placeholder="Message" class="footer__form-message"></textarea>
                
                <button type="submit" class="footer__form-button">Send Message</button>
            </form>              
        </div>   
    </div>
    
     <div class="colors">
        <ul>
            <li></li> <li></li> <li></li><li></li><li></li><li></li><li></li><li></li>
        </ul>
    </div>
</div>
    
</template>
<script>

export default {
  
    data(){
        return{
             form: {
                name: '',
                email: '',
                message: ''
            },
        }
    },
    methods:{
        encode(data){
            return Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&')
        },

        handleSubmit(){
     

            fetch('/', {
                method: 'post',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: this.encode({
                    'form-name': 'blooming-thoughts',
                    ...this.form
                })
                 
                
            })
            .then(() =>{
                this.$router.push({ path: '/' });
                window.scrollTo(0,0);
                this.form.name= '';
                this.form.email= '';
                this.form.message = '';  
                this.$toasted.success("Message sent successfully", { 
                    theme: "toasted-primary", 
                    position: "top-left", 
                    containerClass: 'myContainer',
                    fitToScreen: true,
                    fullWidth: true,
                    duration : 5000
                });                        
            })
            .catch((err) => console.log(`Error: ${err}`));
            
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
   
    .toasted-container.full-width.fit-to-screen .toasted:first-child{
        font-family: 'Montserrat', sans-serif;  
        padding: 1.5rem 1.7rem !important;
        background-color: #3ABA6F;  
        font-size: 1.5rem;
        color: rgb(250, 250, 250);
        font-weight: 300;
        position: relative;       
    }

    .myContainer{
        font-size: 2rem;
    }

    .footer{    
        background-color: #424242;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
        width: 100%;    
        margin-top: 7rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 5% 15%;

        @include respond(tab-port){
            row-gap: 3rem; 
            column-gap: 2rem;  
            padding: 7% 15%;           
        }

        &__title{
            font-family: 'Montserrat', sans-serif;
            font-size: 1.3rem;
            margin-bottom: 1rem;  
            font-weight: 200;
            text-transform: uppercase;

            @include respond(phone){
                font-size: 1.1rem;         
            }
        }
        
     
        &__content{
            font-family: 'Montserrat', sans-serif;
            height: 100%;
            width: 100%;
            align-items: flex-start;
            justify-content: space-around;
            outline: none;
            grid-column: 1/2;
            grid-row: 1/2;

             @include respond(tab-port){
                grid-column: 1/2;
                grid-row: 1/2;               
            }

            &-group{
            
                font-size: .8rem;
                line-height: 1.6;
                
                @include respond(phone){
                    font-size: .7rem;
                }

                &-sub-title{
                    font-weight: 600;
                }

                &-text{

                }
            }

                
            &-email{
                grid-column: 2/3;
                grid-row: 2/3;
                align-self: center;
                font-size: .8rem;
                transform: translateX(-5rem);               

                & span{                       
                    font-weight: 700;
                    margin-right: .2rem;
                }
            }            
        
        } 

        &__medias{       
            font-size: .8rem;
            line-height: 1.6;

            grid-column: 1/2;
            grid-row: 1/2;
            align-self: flex-end;

            @include respond(tab-port){
                grid-column: 2/3;
                grid-row: 1/2;   
                align-self: start; 
                justify-self: flex-end;           
            }

            & ul {
                display: flex;
                list-style: none;

                li{

                    a{

                        .social-media{
                            width: 32px;
                            height: 32px;
                            margin-right: .9rem;


                            @include respond(phone){
                                width: 25px;
                                height: 25px;
                                margin-right: .5rem;         
                            }
                        }
                    }

                }
            }
        }



        &__form{
            /*   justify-self: flex-end; */
            grid-column: 2/3;
            grid-row: 1/-1;

            @include respond(tab-port){
                grid-column: 1/-1;
                grid-row: 2/3;               
            }

            outline: none;

            & form{           
                display: grid;
            }

            &-title{
                font-size: 1.7rem;
                font-weight: 300;
                margin-bottom: 1rem;

            }

            &-input{
                
                border: none;
                border: 1px solid #ccc;
                border-radius: 3px;
                padding: .8rem 1.2rem;
                /*   width: 21.25rem; */
                margin-top: .5rem;
                background-color: white;
                    outline: none;
            }

            ::placeholder{
                color:#F29678;  
            }

            &-message{
                border: none;
                border: 1px solid #ccc;
                border-radius: 3px;
                padding: .8rem 1.2rem;
                /* width: 21.25rem; */
                height: 6.9rem;
                margin-top: .5rem;
                background-color: white;
                    outline: none;
            }

            &-button{
                border: none;
                padding: .7rem 1.2rem;
                background-color: #F29678; 
                /*  justify-self: center; */
                margin-top: .5rem;
                font-family: 'Montserrat', sans-serif; 
                border-radius: 3px;
                font-weight: 700;
                color: #424242;  
                outline: none;

                &:hover{
                    background-color: #e97b56;;
                }

            }

        }
     
   }

   .colors{
            height: 1rem;

            & ul{
                display: flex;
                background-color: honeydew;
                list-style: none;
                height: 100%;
                
                & li{
                    width: 100%;
                    padding: .3rem;
                }

                & li:nth-child(odd){
                   
                    background-color: #F29678;   
                }

                & li:nth-child(even){
                    background-color: #82d0c3;                   
                }
            }
        }
</style>