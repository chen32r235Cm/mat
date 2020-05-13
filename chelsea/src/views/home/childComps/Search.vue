<template>
  <div>
                <banner1></banner1>
     <!-- <transition enter-active-class="anmited fadeIn" leave-active-class="animated fadeOut"> -->
        <div class="search" :class="{active:visible.flag}" v-roll="visible">
            <!-- <van-sticky :offset-top="0" position="0"> -->
            <div class="search-top">
                <input type="text" placeholder=" 周期配送">
                <span><i class="iconfont icon-buoumaotubiao36"></i></span>
            </div>
            <div class="swiper1" :class="{active:visible.flag}">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper-one"><router-link to="/home">{{navName[0]}}</router-link></div>
                    <div class="swiper-slide"><router-link to="/cart">
                    <img src="https://img2.epetbar.com/2020-02/22/22/bf66e76b887663d187dbbfc9e8dcd617.png" width="80" alt="">
                        </router-link></div>
                    <div class="swiper-slide"><router-link to="/cart">{{navName[2]}}</router-link></div>
                    <div class="swiper-slide"><router-link to="/cart">{{navName[3]}}</router-link></div>
                    <div class="swiper-slide"><router-link to="/cart">{{navName[4]}}</router-link></div>
                    <div class="swiper-slide"><router-link to="/cart">{{navName[5]}}</router-link></div>
                </div>
            </div>
            <!-- </van-sticky> -->
        </div>
 
     <!-- </transition> -->
     
  </div>
</template>

<script>
import {getMain} from "@/api"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import Banner1 from "./Banner1"
export default {
    name:"Search",
    components:{
        Banner1
    },
    props:{
        distance:{
            type:Number,
            default:30
        }
    },
    data() {
        return {
            visible:{
                flag:false
            },
            searchNav:[],
            searchBan: [],
            navName:[]
        }
    },
    created() {
        //这里就是获取搜索框的导航栏
        this.getNav()
    },
    methods:{
        async getNav() {
            let res = await getMain()
           if(res.data.code === "succeed"){
            this.searchNav = res.data.datas.navs.menus.data
           this.navName= this.searchNav.map((item)=> item.name)
               this.$nextTick(()=>{
                    new Swiper ('.swiper1', {
                        slidesPerView:5,
                        touchRatio:1,
                        // autoplay:true
                    })
                })
           }
            
        },
    }
}
</script>

<style scoped lang="scss">
        .search{
        position: fixed;
        top: 0;
        z-index: 99;
        height: 2.08rem;
        width: 100%;
        // position: relative;
        background-color: transparent;
        .search-top{
            display: flex;
                width: 100%;
                margin-top: 0.5rem;
                height: 0.6rem;
                input{
                margin: 0 0.5rem 0 0.8rem;
                width: 5.2rem;
                height: 0.5rem; 
                border-radius: 0.4rem;
                background-color: #f3f4f5;
                }
                i{
                    font-size: 0.48rem;
                }
        }
        .swiper-one{
            margin-left: 0.2rem;
            width: 34px;
            font-size: 18px;
            font-weight: 600;
        }
        .swiper-slide{
            margin-top: 0.3rem;
            a{

            color: white;
            }
        }
    }
    .active{
        background-color:white;
        top: 0;
        .swiper-slide{

            a{
                color: black;
            }
        }
    }
    .router-link-active{
        color: red;
    }

</style>