<template>
  <div class=" mt-20">
    <img data-aos="fade-down"  data-aos-duration="1000" class=" relative z-10" src="../Img/kletka.svg" alt="">
    <div class=" flex justify-between  relative z-20 px-12 -mt-20 flex-wrap">
      <img  data-aos="fade-down-right" data-aos-duration="2000" src="../Img/IlyaPhoto.svg" alt="">
      <div class="flex flex-col items-start mt-10  " > 
        <h1 data-aos="fade-down"  data-aos-duration="2000" class=" text-title-color text-4xl font-bold">About Me</h1>
        <p  data-aos="fade-left"  data-aos-duration="2000" class=" max-w-xl about-text ">An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.</p>
        <button data-aos="zoom-in"  data-aos-duration="2000"  class="cursor-pointer  rounded px-6 text-white text-base font-normal py-4 bg-black">Download CV</button>
      </div>
      
    </div>

     <div  data-aos="fade-up"  data-aos-delay='1000'
     data-aos-anchor-placement="center-bottom"  class="scroll-button mt-16  flex justify-between pb-10 w-16">

                     <img class=" cursor-pointer w-5" src="../Img/icons/scroll-icon.svg" alt="">       
       
             <p class="  font-semibold text-sm text-gray-600">Scroll</p>
       
     </div>
   
  </div>
</template>

<script>




export default {

}
</script>

<style>


.about-text{
   font-weight: 300;
   font-size: 24px;
   line-height: 170%;
   color: #000C24;
   margin-top: 32px;
   margin-bottom: 48px;
}

 .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
  }
  /* 
    If the element intersects with the viewport, the before-enter class is added.
  */
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }

</style>