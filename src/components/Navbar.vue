<template>

     <nav class="flex max-w-xl justify-between items-center">
         <transition  v-for="(menuLink,index) in menuLinks" :key="menuLink" :data-index ='index'
         appear
         @before-enter='beforeEnter'
         @enter='enter'>
             <router-link :to="menuLink.link"  class=" text-lg font-medium text-gray-600" active-class="menu-active">{{ menuLink.name }}</router-link>
         </transition>   
     </nav>

</template>



<script>

import gsap from 'gsap'
import {ref} from 'vue'
export default {
    setup(){

        const menuLinks = ref([
            {name: 'Home' , link: '/'},
            {name: 'About' , link: '/s'},
            {name: 'Skils' , link: '/s'},
            {name: 'Works' , link: '/s'},
            {name: 'Contact' , link: '/s'}
        ])
        const beforeEnter = (el) =>{
           
            el.style.transform = 'translateY(-50px)'
            el.style.opacity = 0
        }
        const enter = (el,done) =>{
            gsap.to(el,{
                duration:0.8,
                y:0,
                opacity: 1,
                onComplete: done,
                delay: el.dataset.index * 0.2

            } )
        }

        return{beforeEnter,enter,menuLinks}
    }

}
</script>

<style>
.menu-active{
   font-weight: 700;
   font-size: 21.4px;
   line-height: 24px;
   color: #F44336;
}


</style>