<template>
  <div>
    <div v-for="item in guaList" :key="item">
      <img :src="item" alt />
    </div>
    <div class="sum-list">
      <div v-for="item in sumList" :key="item">
        <img :src="item" alt />
      </div>
    </div>
    <div class="sup-list">
      <div v-for="item in supList" :key="item">
        <img :src="item" alt />
      </div>
    </div>
    <div class="act-box">
      <div class="act-list" v-for="item in actList" :key="item">
         <img :src="item" alt />
    </div>
      <div class="act-list1" >
        <div v-for="item in actList1" :key="item">
          <img :src="item" alt />
        </div>
      </div>
    </div>
    <ul class="act-list2">
      <li v-for="item in actList2" :key="item">
        <img :src="item" alt />
      </li>
    </ul>
    <div>
      <ul class="cate-list">
        <li v-for="item in cateList" :key="item">
          <img :src="item" alt />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getMain } from "@/api";
// import Swiper from "swiper"
// import "swiper/css/swiper.css"
export default {
  name: "Banner2",
  data() {
    return {
      guaList: [], //正品保障
      sumList: [], //立夏保障
      supList: [], //超值保障
      litList: [], //限量保障
      actList: [], //活动保障
      actList1: [],
      actList2: [],
      cateList: [], //品类
      newList: [],   //新品轮播

    };
  },
  created() {
    this.getM();
    // this.getB()
  },
  methods: {
    //E宠国际
    async getM() {
      let res = await getMain();
      console.log( res.data.datas.list[13].data);
      
      //  console.log(res.data.datas.list[10].data.column_images[0][0].src);
      for (var i = 1; i < 5; i++) {
        this.guaList.push(
          res.data.datas.list[i].data.column_images[0][0].img_url
        );
      }
      for (var j = 0; j < 4; j++) {
        this.sumList.push(
          res.data.datas.list[5].data.column_images[j][0].img_url
        );
      }
      for (var k = 0; k < 2; k++) {
        this.supList.push(
          res.data.datas.list[6].data.column_images[k][0].src
        );
      }
      this.actList.push(
        res.data.datas.list[9].data.column_images[0][0].src
      );
       for (var r = 0; r < 2; r++) {
        this.actList1.push(
          res.data.datas.list[9].data.column_images[1][r].src
        );
      }
      
      for (var f = 0; f < 3; f++) {
        this.actList2.push(
          res.data.datas.list[10].data.column_images[f][0].src
        );
      }
      for (var s = 0; s < 3; s++) {
        this.cateList.push( 
          res.data.datas.list[11].data.images[s].img_url
        );
      }

     
    },
  
  }
};
</script>

<style scoped lang="scss">
    .sum-list,
    .sup-list,
    .pub-list {
        display: flex;
        width: 100%;
        // flex-basis: row;
        justify-content: space-between;
    div {
        width: 50%;
        img {
        width: 100%;
        flex: 1;
        }
    }
    }
    .sup-list {
    img {
        height: 2.2rem;
    }
        margin-bottom: 0.2rem;
    }
    .act-box{
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      .act-list{
        width: 50%;
      }
      .act-list1 {
        flex: 1;
        flex-direction: column;
    }
    }
    
    .act-list2 {
        width: 100%;
        flex-direction: row;
        display: flex;
        img{
          flex: 1;
        }
    }
    .cate-list{
            display: flex;
            flex-direction: row;
        li{
            width: 33.3%;
            flex-wrap: nowrap;
            img{
                flex: 1;
            }
        }
    }


</style>