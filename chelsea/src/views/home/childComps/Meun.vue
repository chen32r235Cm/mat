<template>
  <div>
    <van-tabs v-model="activeName" @click="onClick">
        <van-tab v-for="(item,index) in hobList" :title="item" :key="index">
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>

// import { getAll } from "@/api";
export default {
    name:"Meun",
    data() {
        return {
            tag:"all",
            activeName:0,
            currentType:'all',
            // goods:{
            //     'all':{page:0,list:[]},          //全部
            //     'import':{page:0,list:[]},       //进口
            //     'grain':{page:0,list:[]},        //主粮
            //     'snacks':{page:0,list:[]},        //零食
            //     'curing':{page:0,list:[]},       //养护
            //     'dailyuse':{page:0,list:[]}      //日用
            // }
        }
    },
    props:{
        hobList:{
            type:Array,
            default() {
                []
            }
        }
    },
    created() {
        // this.getD('all'),
        // this.getD('import'),
        // this.getD('grain'),
        // this.getD('snacks'),
        // this.getD('curing'),
        // this.getD('dailyuse'),
        this.onClick()

    },
    methods:{
        onClick() {
            switch(this.activeName) {
                case "undefined" : this.currentType = 'all' 
                break
                case 0 : this.currentType = 'all' 
                break
                case 1 : this.currentType = 'import'
                break
                case 2 : this.currentType = 'grain'
                break
                case 3 : this.currentType = 'snacks'
                break
                case 4 : this.currentType = 'curing'
                break
                case 5 : this.currentType = 'dailyuse'
                break     
        }
            console.log(this.currentType);
            this.$emit('kk',this.currentType)
        },
        // async getD(type) {
        //     let res =await getAll(type)
        //     console.log(res.data.datas);

        // }
    }
}
</script>

<style scoped lang="scss">
    
</style>