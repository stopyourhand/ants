<template>
    <div class="trading">
        <p class="title">{{title}}</p>
        <div class="tradingContent">
            <ul class="tradingIndex">
                <li v-for="(val,key) in titleList" @click="pIndex=key" :class="{'chooseIndex':pIndex==key}">{{val}}</li>
            </ul>
            <GoodsDetail v-for="index in titleList.length" v-if="pIndex==index-1" :detailGoods="tradingGoods | dataHandle(pIndex)" :pIndex="pIndex" :title="title"></GoodsDetail>
        </div>
    </div>
</template>

<script>
import GoodsDetail from './goodsDetail.vue'
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            pIndex:0,
            title:"正在交易",
            titleList:["闲置物品","租赁物品","赠送物品","寻求物品"]
        }
    },
    components:{
        GoodsDetail
    },
    computed:{
        ...mapGetters('user',{
            tradingGoods:"getTradingGoods"
        })
    },
    filters:{
        dataHandle:(data,pIndex)=>{
            if(pIndex==0){
                return data.idleList
            }else if(pIndex==1){
                return data.leaseList
            }else if(pIndex==2){
                return data.giveList
            }else{
                return data.seekList
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../assets/less/define.less';

.trading{
    height: 1000px;
    .tradingContent{
        display: flex;
        font-size: 18px;
        color: @deepFontColor;
        .tradingIndex{
            display: flex;
            flex-direction: column;
            height: 893px;
            width: 208px;
            border-right: 4px solid @borderColor;
            li{
                padding: 20px 62px;
                border-bottom: 4px solid @borderColor;
                cursor: pointer;
            }
            .chooseIndex{
                color: @topicDeepBColor;
                background-color: @borderColor;
                box-shadow: 10px 0px 0px @topicDeepBColor inset;
            }
        }
    }
}
</style>
