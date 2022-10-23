<template>
  <div id="normal-box">
    <div class="bg-color-black">
      <div class="title">
        <div>
          <img src="../assets/5.png" class="img-log" /><span class="img-title"
            >车辆类型TOP5</span
          >
        </div>
        <div>
          <img src="../assets/6.png" alt="" class="img-nav" />
        </div>
      </div>
      <div>
         <div class="pageBox">
        <div class="page">
          <div class="tetx">轻型仓栅式货车</div>
          <div class="pic bord1"></div>
        </div>
         <div class="page">
          <div class="tetx">轻型仓栅式货车</div>
          <div class="pic bord2"></div>
        </div>
         <div class="page">
          <div class="tetx">轻型仓栅式货车</div>
          <div class="pic bord3"></div>
        </div>
         <div class="page">
          <div class="tetx">轻型仓栅式货车</div>
          <div class="pic bord4"></div>
        </div>
         <div class="page">
          <div class="tetx">轻型仓栅式货车</div>
          <div class="pic bord5"></div>
        </div>
    
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Echart from "../common/echart.vue";
export default {
  name: "provinceVolume",
  // components: {
  //   Echart,
  // },
  data() {
    return {};
  }
};
</script>
<style scoped>
.pageBox {
  width: 430px;
  height: 220px;
  background-color: rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  margin: 0 10px 0 0;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
   opacity: 0.9;
  background: url('../assets/7.png');
}
.page {
  width: 55px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.tetx {
  width: 70px;
  color: #c9d9db;
  font-size: 14px;
  text-align: center;
  margin-bottom: 9px;
}
.pic {
  width: 44px;
  
  background: rgba(0, 66, 76, 0.52);
  box-sizing: border-box;
  
}
.bord1 {
  height:220px;
  border-top: 3px solid #0ACCD1
}
.bord2 {
  height:88px;
  border-top: 3px solid #4666FF
}
.bord3 {
  height:66px;
  border-top: 3px solid #E30416
}
.bord4 {
  height:44px;
  border-top: 3px solid #FE8C06
}
.bord5 {
  height:23px;
  border-top: 3px solid #B90745
}
</style>
