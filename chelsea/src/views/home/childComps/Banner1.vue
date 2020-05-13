<template>
  <div class="h">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in searchBan" :key="item.advid" ref="imgH">
                    <img :src="item.img_url" />
                </div>
            </div>
        </div>
        <ul class="list">
            <li v-for="item in searchList" :key="item"><img :src="item" alt=""></li>
        </ul>
  </div>
</template>

<script>
import {getMain} from "@/api"
import Swiper from "swiper"
import "swiper/css/swiper.css"
export default {
    name:"Banner1",
    data() {
        return {
            searchBan:[],
            searchList:[],
            imgHeight:0
        }
    },
    mounted() {
        // this.getBanner();
        getMain().then((res)=>{
            if(res.data.code === "succeed") {
                this.searchBan = res.data.datas.list[0].data.images;
                this.$nextTick(()=>{
                    new Swiper ('.swiper-container', {
                        slidesPerView:1,
                        touchRatio:1,
                        loop:true,
                        autoplay:true
                    })
                })
            }
        })
        // getHeight(){
        //     console.log(this.refs.imgH.offsetHeight);
            
        // }
    },
    created() {
        this.getList()
    },
    methods:{
        //E宠国际
        async getList(){
            let res = await getMain();
            this.searchList = res.data.datas.list[0].data.menus;
            this.searchList =this.searchList.map((item)=>item.img_url)
            this.searchList = this.searchList.slice(0,5)
        }
    }
}
</script>

<style scoped lang="scss">
.swiper-container{
    position: relative;
    top: 0;
    z-index: -1;
    background-color: white;
}
    .list{
        // margin-left: 0.2rem;
            display: flex;
            flex-direction: row;
            margin-top: -0.5rem;
            z-index: 999;
        li{
            width: 1.48rem;
            height: 1.34rem;
            flex-wrap: nowrap;
            img{
                flex: 1;
            }
            background-color: transparent;
        }
    }
</style>