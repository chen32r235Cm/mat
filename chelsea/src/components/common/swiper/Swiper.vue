<template>

<div>
        <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
       <slot></slot>
    </div>

</div>
</div>

</template>

<script>
import Swiper from "swiper"
import "swiper/css/swiper.css"
export default {
    props:{
        swipeid:{
            type:String,
            default:""
        },
        loop:{
            type:Boolean,
            default:true
        },
        autoplay:{
            type:Boolean,
            default:false
        },
        slidesPerView:{
            type:Number,
            default:1
        }
    },
    mounted() {
        var that = this;
         console.log(that.autoplay == true);
        new Swiper("." + that.swipeid,{
            loop:that.loop,
            // t:console.log(that),
            autoplay:that.autoplay,

            
            slidesPerView:that.slidesPerView
           
            
        })
    }
    // props:{
    //     controls:{
    //         type:Array,
    //         default:[true,1]
    //     }
    // },

    
}
</script>

<style>
.swiper-container {
    width: 100%;
    height: 200px;
}  
</style>