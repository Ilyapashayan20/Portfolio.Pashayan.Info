<template>
<div class="wrapper">

<div id="Home" class="  m-auto px-32">

    <Navbar class=" pt-12" />

    <div class="name-block mt-64 flex flex-col">
        <transition
        appear
         @before-enter='beforeEnter'
         @enter='enter'>
         <img class=" w-64" src="../Img/name.svg" alt="">
         </transition>
        <transition 
         appear
         @before-enter='beforeEnterText'
         @enter='enterText'>
         <p class=" mt-6 text-2xl font-semibold text-white">Junior Front-end Developer</p>
        </transition>
        

         <transition 
         appear
         @before-enter='beforeEnterSocila'
         @enter='enterSocial'>
        <div class="social-media-bloxk mt-8 flex justify-between w-48">
            <a href="/" class="social-media"><img src="../Img/icons/twitter.svg" alt=""></a>
            <a href="/" class="social-media"><img src="../Img/icons/github.svg" alt=""></a>
            <a href="/" class="social-media"><img src="../Img/icons/linkedin.svg" alt=""></a>
            <a href="/" class="social-media"><img src="../Img/icons/insta.svg" alt=""></a>

        </div>
         </transition>

    </div>
    
    <div class="scroll-button mt-48  flex justify-between pb-10 w-16">
        <transition
         appear
         @before-enter='beforeEnterScrol'
         @enter='enterScrol'>
                     <img class=" cursor-pointer w-5" src="../Img/icons/scroll-icon.svg" alt="">       
        </transition>
        <transition
         appear
         @before-enter='beforeEnterScrolText'
         @enter='enterScrolText'>
             <p class="  font-semibold text-sm text-gray-600">Scroll</p>
        </transition>
       
    </div>
</div>



</div>


<router-view />
</template>

<script>

import gsap from 'gsap'
import  Navbar from '../components/Navbar.vue'

export default {
    components: {Navbar},
    setup(){
        const beforeEnter = (el) =>{
            el.style.transform = 'translateX(-50px)'
            el.style.opacity = 0
        }
        const enter = (el) =>{
            setTimeout(() => {
                  gsap.to(el,{
                duration:1.4,
                y:0,
                x:0,
                opacity: 1,
               
            } )
                
            }, 1000);

        }

         const beforeEnterText = (el) =>{
           
            el.style.transform = 'translateX(50px)'
            el.style.opacity = 0
        }

        const enterText = (el) =>{
            setTimeout(() => {
                  gsap.to(el,{
                duration:1.4,
                y:0,
                x:0,
                opacity: 1,
               
            } )
                
            }, 700);
    

        }


           const beforeEnterSocila = (el) =>{
           
            el.style.transform = 'translateY(50px)'
            el.style.opacity = 0
        }
        const enterSocial = (el) =>{
            setTimeout(() => {
                  gsap.to(el,{
                duration:1.4,
                y:0,
                x:0,
                opacity: 1,
               
            } )
                
            }, 200);
        }

           const beforeEnterScrolText = (el) =>{
           
           
            el.style.opacity = 0
        }
        const enterScrolText = (el) =>{
            setTimeout(() => {
                  gsap.to(el,{
                duration:1.4,
                
                opacity: 1,
               
            } )
                
            }, 2600);
        }
      
        const beforeEnterScrol = (el) =>{
           
            el.style.transform =  'rotate(180deg)'
            el.style.opacity = 0
        }
        const enterScrol = (el) =>{
            setTimeout(() => {
                  gsap.to(el,{
                duration:0.6,
                y:0,
                rotate:0,
                x:0,
                opacity: 1,
               
            } )
                
            }, 2000);
        }
        return {beforeEnter,enter,beforeEnterText,enterText,beforeEnterSocila,enterSocial,enterScrolText,enterScrol,beforeEnterScrol,beforeEnterScrolText}
    }

}

</script>
  <style>
    .wrapper{
       background-image: url("../Img/groups/gp.png");
       background-size:cover;
       width: 100%;
    
  }
  .social-media {
  transition: transform 0.4s ease-in-out;
}
.social-media:hover {
  transform: rotate(360deg);
}

  </style>