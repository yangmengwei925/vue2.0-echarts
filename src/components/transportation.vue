<template>
  <div id="normal-box">
    <div class="bg-color-black">
      <div class="title">
        <div>
          <img src="../assets/5.png" alt="" class="img-log" /><span
            class="img-title"
            >运输类型占比TOP5</span
          >
        </div>
        <div>
          <img src="../assets/6.png" alt="" class="img-nav" />
        </div>
      </div>
      <div>
  
         <div class="pageBox">
           <div id="main" style="width:100%; height:100%"></div>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Echart from "../common/echart.vue";
import * as echarts from "echarts"; //echarts 官网引入方法
export default {
  name: "ProvinceTurnover",
  // components: {
  //   Echart,
  // },
  data() {
    return {};
  },
  mounted() {
    this.drawCharts();
  },
  methods: {
    drawCharts() {
      var data = [
        {
          name: "陆运",
          value: 1111
        },
        {
          name: "铁运",
          value: 1212
        },
        {
          name: "水运",
          value: 2133
        },
        {
          name: "多运联动",
          value: 700
        },
        {
          name: "短倒",
          value: 900
        }
      ];
      var arrName = getArrayValue(data, "name");
      var arrValue = getArrayValue(data, "value");
      var sumValue = eval(arrValue.join("+"));
      var objData = array2obj(data, "name");
      var optionData = getData(data);

      function getArrayValue(array, key) {
        var key = key || "value";
        var res = [];
        if (array) {
          array.forEach(function(t) {
            res.push(t[key]);
          });
        }
        return res;
      }

      function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
          resObj[array[i][key]] = array[i];
        }
        return resObj;
      }

      function getData(data) {
        var res = {
          series: [],
          yAxis: []
        };
        for (let i = 0; i < data.length; i++) {
          res.series.push({
            name: "运输类型",
            type: "pie",
            clockWise: false, //1.饼图的扇区是否是顺时针排布
            hoverAnimation: false, //2.是否开启 hover 在扇区上的放大动画效果
            radius: [65 - i * 15 + "%", 57 - i * 15 + "%"], //3.设置饼图的半径
            center: ["30%", "55%"],
            label: {
              show: false
            },
            itemStyle: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              borderWidth: 5
            },
            data: [
              {
                value: data[i].value,
                name: data[i].name
              },
              {
                value: sumValue - data[i].value,
                name: "",
                itemStyle: {
                  color: "rgba(0,0,0,0)",
                  borderWidth: 0
                },
                tooltip: {
                  show: false
                },
                hoverAnimation: false
              }
            ]
          });
          res.series.push({
            name: "",
            type: "pie",
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [65 - i * 15 + "%", 57 - i * 15 + "%"],
            center: ["30%", "55%"],
            label: {
              show: false
            },
            itemStyle: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              borderWidth: 5
            },
            data: [
              {
                //灰色饼图默认值
                value: 7.5,
                itemStyle: {
                  color: "#209AD5",
                  borderWidth: 0
                },
                tooltip: {
                  show: false
                },
                hoverAnimation: false
              },
              {
                //灰色饼图显示4/3，使其剩余部分隐藏
                value: 2.5,
                name: "",
                itemStyle: {
                  color: "rgba(0,0,0,0)", //饼图颜色透明，隐藏4/1部分
                  borderWidth: 0
                },
                tooltip: {
                  show: false
                },
                hoverAnimation: false
              }
            ]
          });
          res.yAxis.push((data[i].value / sumValue * 100).toFixed(2) + "%");
        }
        return res;
      }

      var option = {
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "horizontal",
          right: "right",
          padding: [5, 70, 5, 20],

          itemGap: 5,

          icon: "circle",
          textStyle: {
            fontSize: 16, //字体大小
            color: "#ffffff" //字体颜色
          }
        },
        color: [
          new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              //右，下，左，上
              {
                offset: 0,
                color: "#51BCB0"
              },
              {
                offset: 1,
                color: "#209AD5"
              }
            ],
            false
          ),
          new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              //右，下，左，上
              {
                offset: 0,
                color: "#089FFF"
              },
              {
                offset: 1,
                color: "#8A3DFE"
              }
            ],
            false
          ),
          new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              //右，下，左，上
              {
                offset: 0,
                color: "#CC3104"
              },
              {
                offset: 1,
                color: "#F39A17"
              }
            ],
            false
          ),
          new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              //右，下，左，上
              {
                offset: 0,
                color: "#674397"
              },
              {
                offset: 1,
                color: "#C33A1E"
              }
            ],
            false
          ),
          new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              //右，下，左，上
              {
                offset: 0,
                color: "#AC1E2B"
              },
              {
                offset: 1,
                color: "#B61874"
              }
            ],
            false
          )
        ],
        grid: {
          top: "10%",
          bottom: "10%",
          left: "10%",
          containLabel: false
        },
        // yAxis: [
        //   {
        //     type: "category",
        //     axisLine: {
        //       show: false
        //     },
        //     axisTick: {
        //       show: false
        //     },
        //   }
        // ],
        xAxis: [
          {
            show: false
          }
        ],
        series: optionData.series
      };
      let myChart = echarts.init(document.getElementById("main"));
      window.addEventListener("resize", function() {
        myChart.resize();
      });

      myChart.setOption(option);
    }
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
   opacity: 0.9;
  background: url('../assets/7.png');
}
</style>
