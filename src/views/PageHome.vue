<template>
  <div class="pageHome">
    <header>
      <img class="logo" src="@/assets/2.png" alt="" />
      <img class="header-title" src="@/assets/3.png" />
    </header>
    <main class="main">
      <div class="main-left">
        <div calss="mainLefttop">
          <view-left />
        </div>
        <div class="product-name">
          <view-product />
        </div>
        <div class="ProvinceTurnover">
          <province-turnover />
        </div>
        <!-- 省交易额 -->
        <div class="provinceVolume">
          <proviceJiaoyi />
        </div>
      </div>
      <div class="main-content">
        <div class="main-top">
        <!-- 大盒子 -->
          <div class="dataWords">
             <div class="dataLeft">
                <h4 class="dataTitle">总交易额(万吨)</h4>
                 <div class="money">80,0000</div>
             </div>
             <div class="dataRight">
                <h4 class="dataTitle">总交易量(万吨)</h4>
                 <div class="money">2,232</div>
             </div> 
          </div>
          <!-- 大盒子 -->
           <div class="classify">
               <div class="classifyNumber">
                  <div class="classifyLeft">总运单量</div>&nbsp;&nbsp;
                  <div class="classifyMoney">63.645</div>
               </div>
               <div class="classifyNumber">
                    <div class="classifyLeft">总运单量</div>&nbsp;&nbsp;
                  <div class="classifyMoney">63.645</div>
               </div>
               <div class="classifyNumber">
                <div class="classifyLeft">总运单量</div>&nbsp;&nbsp;
                  <div class="classifyMoney">63.645</div>
               </div>
           </div>
           <div class='classify'>
               <div class="classifyNumber">
                  <div class="classifyLeft">服务城市</div>&nbsp;&nbsp;
                  <div class="classifyMoney">170</div>
               </div>
               <div class="classifyNumber">
                    <div class="classifyLeft">企业会员</div>&nbsp;&nbsp;
                  <div class="classifyMoney">408</div>
               </div>
               <div class="classifyNumber">
                <div class="classifyLeft">认证车辆</div>&nbsp;&nbsp;
                  <div class="classifyMoney">77.413</div>
               </div>
           </div>      
        </div>
        <div class="main-map">
        <div style="height:400px;weight:100%">
         <!-- 地图 -->
        <centerMap style="height:400px;weight:100%"/>
        </div>
       
        </div>
        <div class="main-bottom"></div>
      </div>
      <div class="main-right">
        <div calss="mainLefttop">
          <network />
        </div>
        <div class="transportation">
          <transportation />
        </div>
        <div class="hotline">
          <hotline />
        </div>
        <div class="Regi">
          <Regi />
        </div>
      </div>
    </main>
    <footer class="footer"></footer>
  </div>
</template>
<script>
import viewLeft from "@/components/viewLeft";
import viewProduct from "@/components/viewProduct";
import ProvinceTurnover from "@/components/ProvinceTurnover";
import network from "@/components/network ";
import Network from "@/components/network .vue";
import transportation from "@/components/transportation";
import hotline from "@/components/Hotline.vue";
import Regi from "@/components/Regi";
import proviceJiaoyi from "@/components/proviceJiaoyi";
import centerMap from '../components/echart/centerMap'
// import header from '@/components/header'
export default {
  // eslint-disable-next-line
  name: 'pageHome',
  components: {
    viewLeft,
    viewProduct,
    ProvinceTurnover,
    network,
    Network,
    transportation,
    hotline,
    Regi,
    proviceJiaoyi,
    // header
    centerMap
  },
};
</script>
<style lang="scss">
@import "../styles/var.scss";

</style>
