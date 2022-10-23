<template>
  <div id="normal_box">
    <div class="map">
      <div class="title">
        全国分布图
      </div>
      <div style='position:absolute;top:230px;left:30%'>
        <Echart
          :options="options"
          id="centerId"
          height="720px"
          width="630px" position:

        ></Echart>
      </div>
      <div class="tabs_box">
          <tabs class="tab_style" :tabs="tabs" @change="tabChange" />
      </div>
      
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import Echart from "@/common/echart";
import mapDate from "../centerMap/date.js";
import chinaDate from "../centerMap/china.js";
import tabs from "../../tabs";
export default {
  data() {
    return {
      series: [],
      tooltip: {},
      tabs: [
        { name: "全国车辆分布图", index: 0 },
        { name: "全国货主分布图", index: 1 },
      ],
      options: {},
      list: ["北京市", "新疆"],
      valueList: [10, 20],
    };
  },
  components: {
    Echart,
    tabs,
  },
  props: {},
  mounted() {
    chinaDate();
    mapDate.chinaDatas[0][0].value = 10;
    mapDate.chinaDatas[12][0].value = 10;
    this.init();
  },
  methods: {
    init() {
      this.getSeries(this.list);
      this.getOptions();
    },
    getOptions() {
      var options = {
        // tooltip: {
        //   trigger: "item",
        //   backgroundColor: "rgba(166, 200, 76, 0.82)",
        //   borderColor: "#FFFFCC",
        //   showDelay: 0,
        //   hideDelay: 0,
        //   enterable: true,
        //   transitionDuration: 0,
        //   extraCssText: "z-index:100",
        //   formatter: function (params) {
        //     //根据业务自己拓展要显示的内容
        //     var res = "";
        //     var name = params.name;
        //     var value = params.value[params.seriesIndex + 1];
        //     res =
        //       "<span style='color:#fff;'>" +
        //       name +
        //       "</span><br/>数据：" +
        //       value;
        //     return res;
        //   },
        // },
        visualMap: {
          //图例值控制
          show: false,
        },
        geo: {
          map: "china",
          zoom: 1.2,
          label: {
            emphasis: {
              show: false,
            },
          },
          roam: true, //是否允许缩放
          itemStyle: {
            normal: {
              areaColor: "#1A5CD7",
              borderColor: "#516a89", //省市边界线00fcff 516a89
              borderWidth: 1,
            },
          },
        },
        series: this.series,
      };
      this.options = options;
    },
    getSeries(list) {
      const _this = this;
      //   let echarts = this.$echarts;
      var series = [];
      [[list, mapDate.chinaDatas]].forEach(function (item) {
        series.push(
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: "stroke", //波纹绘制方式 stroke, fill
              scale: 4, //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                position: "right", //显示位置
                offset: [5, 0], //偏移设置
                formatter: function (params) {
                  //圆环显示文字
                  return params.data.name;
                },
                fontSize: 13,
              },
              emphasis: {
                show: true,
              },
            },
            symbol: "circle",
            symbolSize: function (val) {
              return 5 + val[2] * 5; //圆环大小
            },
            // itemStyle: {
            //   normal: {
            //     show: false,
            //     color: "#f00",
            //   },
            // },
            data: item[1].map(function (dataItem) {
              return {
                //在这里定义你所要展示的数据
                name: dataItem[0].name,
                value: mapDate.geoCoordMap[dataItem[0].name].concat([
                  dataItem[0].value,
                ]),
              };
            }),
          },
          //中心点
          {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: "stroke",
              scale: 4,
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                //offset:[5, 0],
                // color: "#0f0",
                formatter: "{@value}",
                fontSize: 30,
                // textStyle: {
                //   color: "#0f0",
                // },
              },
              emphasis: {
                show: true,
                color: "#f60",
              },
            },
            // symbol: "circle",
            // symbol: "pin",
            // symbolSize: 50,
            // data: [
            //   {
            //     name: item[0][0],
            //     value: mapDate.geoCoordMap[item[0][0]].concat([10]),
            //   },
            //   {
            //     name: item[0][1],
            //     value: mapDate.geoCoordMap[item[0][1]].concat([20]),
            //   },
            //   {
            //     name: item[0][2],
            //     value: mapDate.geoCoordMap[item[0][2]].concat([80]),
            //   },
            // ],
            data: _this.getData(item[0], _this.valueList),
          }
        );
      });
      _this.series = series;
    },
    getData(nameList, valueList) {
      const arr = [];
      nameList.forEach((item, index) => {
        arr.push({
          name: item,
          value: mapDate.geoCoordMap[item].concat([valueList[index]]),
        });
      });
      return arr;
    },
    tabChange(item) {
      if (item.index == 0) {
        this.list = ["北京市", "新疆",];
        mapDate.chinaDatas.forEach((item) => {
          if ([...this.list].includes(item[0].name)) {
            item[0].value = 10;
          } else {
            item[0].value = 0;
          }
        });
        this.valueList = [10, 20];
        this.init();
      } else {
        this.list = ["新疆", "西藏",];
        mapDate.chinaDatas.forEach((item) => {
          if ([...this.list].includes(item[0].name)) {
            item[0].value = 10;
          } else {
            item[0].value = 0;
          }
        });
        this.valueList = [30, 40];
        this.init();
      }
    },
  },
};
</script>
<style lang="scss">
// @import "../style/chartBoxStyle.scss";
.title{
  color:#fff
}
.tabs_box{
  width: 400px;
  display: flex;
   margin:0 auto;
  justify-content: space-around;
  margin-top:260px;
  text-align: center;
 cursor: pointer;
}

</style>