<template>
  <div id="normal-box">
    <div class="bg-color-black">
      <div class="title">
        <div>
          <img src="../assets/5.png" alt="" class="img-log" />
          <span class="img-title">货品名称TOP5</span>
        </div>
        <div>
          <img src="../assets/6.png" alt="" class="img-nav" />
        </div>
      </div>
      <div>
       <dv-capsule-chart :config='config' :style="{'width':dwidth+'px','height':dheight+'px'}"/> 
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "viewProduct",
  components: {
    // Echart,
  },
  data(){
    return {
      options:{},
      config:{
       data: [
          {
            name: "150-200",
            value: 5,
          },
          {
            name: "100-150",
            value: 30,
          },
          {
            name: "50-100",
            value: 20,
          },
          {
            name: "20-50",
            value: 40,
          },
          {
            name: "0-20",
            value: 10,
          },
        ],
          colors: ['#24DCF7', '#24DCF7', '#24DCF7', '#24DCF7', '#24DCF7'],
         unit: "%",
        showValue: true,
      }
    }
  },
};
</script>
<style lang="scss">
    #chart2 {
  width: 430px;
  height: 220px;
  position: relative;
  background: #000;
  opacity: 0.9;
  background: url('../assets/7.png');
 }
</style>
