<template>
  <div>
      <search :distance="distance"></search> 

      <banner2></banner2>
      <scroll>
        <template>
          <meun :hobList="hobList" v-if="hobList.length" @kk="hobbiesClick"></meun>
        </template>
        <template>
          <!-- <meun-list :goods="showGoods" ></meun-list> -->
          <meun-list></meun-list>
        </template>
        <template>
          <ul>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
            <li>10</li>
          </ul>
        </template>
      </scroll>
     
  </div>
</template>

<script>
import { getMain } from "@/api";
import { getAll } from "@/api";
import Scroll from "@/components/common/scroll/Scroll"

import Search from "./childComps/Search"
// import Banner1 from "./childComps/Banner1"
import Banner2 from "./childComps/Banner2"
import Meun from "./childComps/Meun"
import MeunList from "./childComps/MeunList"
export default {
    name:'Home',
    data() {
      return {
        distance:40,
        hobList:[],
        hobbies:"" ,   //这个是猜你喜欢的所对应的值
        goods:{
              'all':{page:0,list:[]},          //全部
              'import':{page:0,list:[]},       //进口
              'grain':{page:0,list:[]},        //主粮
              'snacks':{page:0,list:[]},        //零食
              'curing':{page:0,list:[]},       //养护
              'dailyuse':{page:0,list:[]}      //日用
          }
      }
    },  
    components:{
     Search,Banner2,Meun,Scroll,MeunList
    },
    created() {
      this.getC(),
      this.getD('all'),
      this.getD('import'),
      this.getD('grain'),
      this.getD('snacks'),
      this.getD('curing'),
      this.getD('dailyuse')
    },
    computed:{
      // showGoods() {
      //   return this.goods[this.hobbies].list;
      // }
    },
    methods:{
      async getC(){
            let res = await getMain();
            for(var i=0;i<res.data.datas.list[14].data.header.menus.length;i++){
                this.hobList.push(res.data.datas.list[14].data.header.menus[i].name)
            }
            console.log(this.hobList);  
        },
        hobbiesClick(type) {
          this.hobbies = type;
          console.log(this.hobbies);
          
        },
      async getD(type) {
        const page = this.goods[type].page + 1;
        let res =await getAll(type,page)
        this.goods[type].list.push(...res.data.datas);
        this.goods[type].page += 1
        console.log(res.data.datas);
        console.log(this.goods[this.hobbies].list);
        
      }
      
    }
}
</script>

<style >

</style>