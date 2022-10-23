<template>
  <div id="normal-box">
    <div class="bg-color-black">
      <div class="title">
        <div>
          <img src="../assets/5.png" class="img-log" /><span class="img-title"
            >网络货运企业</span
          >
        </div>
        <div>
          <img src="../assets/6.png" alt="" class="img-nav" />
        </div>
      </div>
      <div>
        <div class="pageBox">
        <div class="page">万联易达</div>
        <div class="page">霍林郭勒万联易达</div>
        <div class="page">太原万联易达</div>
        <div class="page">丰镇万联易达</div>
        <div class="page">舞阳万联易达</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "provinceVolume",
  // components: {
  //   Echart,
  // },
  data() {
    return {};
  },
};
</script>
<style scoped>
.pageBox {
  width: 430px;
  height: 220px;
  background-color: rgba(0,0,0,0.9);
  box-sizing: border-box;
  margin: 0 10px 0 0;
  padding: 20px 0;
   opacity: 0.9;
  background: url('../assets/7.png');
 
}
.page{
width: 100%;
height: 30px;
text-align: center;
line-height: 30px;
color: #75FBFE;
background: url('../assets/9.png');
background-size: 100%, 100%;
margin-bottom: 8px;
}
</style>
