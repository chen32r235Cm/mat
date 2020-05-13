import Vue from "vue"

//自定义指定 滚动roll指令 要再全局main.js进行引入全局使用
//有el.offsetHeight 或者传值binging.value.distance
Vue.directive("roll",(el,binging)=>{
    window.addEventListener("scroll",()=>{

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > el.offsetHeight) {
            binging.value.flag = true
        }else{
            binging.value.flag = false
        }
    })
    
})