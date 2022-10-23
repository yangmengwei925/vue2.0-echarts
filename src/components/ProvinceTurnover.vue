<template>
  <div id="normal-box">
    <div class="bg-color-black">
      <div class="title">
        <div>
          <img src="../assets/5.png" alt="" class="img-log" /><span
            class="img-title"
            >省交易量TOP5</span
          >
        </div>
        <div>
          <img src="../assets/6.png" alt="" class="img-nav" />
        </div>
      </div>
      <div>
        <Echart
          :options="options"
          id="chart2"
          :height="cHeight"
          :width="cWidth"
        ></Echart>
      </div>
    </div>
  </div>
</template>
<script>
import Echart from "../common/echart/index.vue";
import chartsMixnis from "../mixins/mixins"
export default {
  name: "ProvinceTurnover",
  components: {
    Echart,
  },
  data(){
    return {
      options:{}
    }
  },
  mixins:[chartsMixnis]
};
</script>
<style scoped>
 #chart2{
   width: 215px;
  height: 220px;
  position: relative;
  background: #000;
  opacity: 0.9;
  background: url('../assets/7.png');
 }
</style>
