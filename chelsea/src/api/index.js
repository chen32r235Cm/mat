import axios from "axios"
export const getMain=()=>{
    return axios.get("ec/v3/index/main.html?do=getStaticV415&cdn_version=202005081908381&pet_type=dog&version=500&is_single=0&isWeb=1&system=wap&distinct_id=171f444e64725-0df2dc481b4603-4313f6b-3686400-171f444e6481be")

}
export const getAll=(type,page)=>{
    return axios.get(`ea/v3/index/main.html?version=500&tag=${type}&pet_type=&page=${page}&do=GetGuessYourLike&system=wap&isWeb=1&distinct_id=171f444e64725-0df2dc481b4603-4313f6b-3686400-171f444e6481be`)

}