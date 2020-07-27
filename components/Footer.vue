<template>
<div>
  
    <div class="footer">
  
        <div class="footer__content">
            <div class="footer__content-contact-info">
                
                <h3 class="footer__content-contact-info-title">Contact Information</h3>

                <div class="footer__content-contact-info-group-content">
                    <p class="footer__content-contact-info-group-content-sub-title">Blooming Thoughts</p>
                    <p class="footer__content-contact-info-group-content-text">442, Bulevar, broj 8</p>
                    <p class="footer__content-contact-info-group-content-text">Brzi Brod, Nis</p>
                </div>
                
                <p class="footer__content-contact-info-email"><span>Email:</span> blooming-thoughts@gmail.com</p>

                 <h3 class="footer__content-contact-info-title-2">Follow Us</h3>

                <div class="footer__content-contact-info-group-content-2">
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

           

            <div class="footer__content-form">
               
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

                    <h3 class="footer__content-form-title">Send Us A Message</h3>

                    <label for="name"></label>
                    <input type="text" id="name" v-model="form.name" name="name" placeholder="Name" class="footer__content-form-input"  autocomplete="off"> 

                    <label for="email"></label>
                    <input type="email" id="email" v-model="form.email" name="email" placeholder="Email" class="footer__content-form-input"  autocomplete="off">

                    <label for="message"></label>
                    <textarea name="message" id="message" v-model="form.message"  placeholder="Message" class="footer__content-form-message"></textarea>
                    
                    <button type="submit" class="footer__content-form-button">Send Message</button>
                </form>              
            </div>
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
                    className: 'myClass',
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
    .myClass{
         font-family: 'Montserrat', sans-serif;  
         font-weight: 700;
         font-size: 1.3rem;
         background-color: rgb(126, 209, 126);      
    }

    .footer{    
        background-color: #424242;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
        width: 100%;    
        margin-top: 7rem;
     
        &__content{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            font-family: 'Montserrat', sans-serif;
            padding: 5% 15%;
            height: 100%;
            width: 100%;
            align-items: flex-start;
            justify-content: space-around;
            outline: none;

            &-contact-info{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;

                &-title{
                    grid-column: 1/-1;
                    grid-row: 1/2;
                    font-size: 1.7rem;
                    font-weight: 300;
                }

                &-group-content{
                    grid-column: 1/2;
                    grid-row: 2/3;
                    font-size: .8rem;
                    line-height: 1.6;

                    &-sub-title{
                        font-weight: 600;
                    }

                    &-text{

                    }
                }

                 &-title-2{
                    grid-column: 1/-1;
                    grid-row: 3/4;
                    font-size: 1.7rem;
                    font-weight: 300;
                    margin-top: 2rem;
                }

                &-group-content-2{
                    grid-column: 1/2;
                    grid-row: 4/5;
                    font-size: .8rem;
                    line-height: 1.6;

                    & ul {
                        display: flex;
                        list-style: none;

                        li{

                            a{

                                .social-media{
                                    width: 32px;
                                    height: 32px;
                                    margin-right: .9rem;
                                }
                            }

                        }
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

            &-form{
                justify-self: flex-end;
                outline: none;

                & form{
               
                     display: grid;
                }

                &-title{
                    font-size: 1.7rem;
                    font-weight: 300;
                }

                &-input{
                    border: none;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    padding: .8rem 1.2rem;
                    width: 21.25rem;
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
                    width: 21.25rem;
                    height: 6.9rem;
                    margin-top: .5rem;
                    background-color: white;
                     outline: none;
                }

                &-button{
                    border: none;
                    padding: .7rem 1.2rem;
                    background-color: #F29678; 
                    justify-self: center;
                    margin-top: .5rem;
                    border-radius: 3px;
                    font-weight: 700;
                    color: #424242;  

                    &:hover{
                        background-color: #e97b56;;
                    }

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