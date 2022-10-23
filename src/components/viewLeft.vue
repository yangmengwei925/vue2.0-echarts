<template>
  <div id="normal-box">
    <div class="bg-color-black">
      <div class="title">
        <div>
          <img src="../assets/5.png" class="img-log" /><span class="img-title"
            >货物类型TOP5</span
          >
        </div>
        <div>
          <img src="../assets/6.png" alt="" class="img-nav" />
        </div>
      </div>
      <div>
        <Echart :options="options" id="chart2" :height="cHeight" :width="cWidth"> </Echart>
      </div>
    </div>
  </div>
</template>
<script>
import Echart from "../common/echart/index.vue";
import chartsMixnis from "../mixins/mixins"
export default {
  name: "viewLeft",
  components: {
    Echart,
  },
  data() {
    return {
      options: {},
    };
  },
   mixins: [chartsMixnis],
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  created() {
    /* eslint-disable */
    const cdata = [
      {
        name: "电器",
        value: 590,
      }, {
        name: "矿石",
        value: 400
      }, {
        name: "煤炭",
        value: 300
      }, {
        name: "粮食",
        value: 900
      },
      {
      name:"南京",
      value:300,
      itemStyle: {
        color: 'red'
    }
    },
    ]
    this.setOptions(cdata)
  },
  methods: {
    setOptions(data = []) {
            let [maxValue, temp] = [0, []]
            data.forEach((item) => {
                temp.push(item.value)
            })
            maxValue = Math.max.apply(null, temp)
            // 气泡颜色数组
            const color = ['#FAC858', '#FACD91', '#516CC0', '#EE6666', '#73C0DE', '#C280FF', '#91CC75', '#ff7123', '#ffc400', '#5e333f']
            // 气泡颜色备份
            let bakeColor = [...color]
            // 气泡数据
            const bubbleData = []
            // 气泡基础大小
            let basicSize =40
            // 节点之间的斥力因子,值越大,气泡间距越大
            let repulsion = 105
            // 根据气泡数量配置基础大小和斥力因子（以实际情况进行适当调整，使气泡合理分布）
            if (data.length >= 5 && data.length < 10) {
                basicSize = 51
                repulsion = 230
            }
        
            // 填充气泡数据数组bubbleData
            for (const item of data) {
                // 确保气泡数据条数少于或等于气泡颜色数组大小时，气泡颜色不重复
                if (!bakeColor.length) bakeColor = [...color]
                const colorSet = new Set(bakeColor)
                const curIndex = Math.round(Math.random() * (colorSet.size - 1))
                const curColor = bakeColor[curIndex]
                colorSet.delete(curColor)
                bakeColor = [...colorSet]
                // 气泡大小设置
                let size = (item.value * basicSize * 2) / maxValue
                if (size < basicSize) size = basicSize
                bubbleData.push({
                    name: item.name,
                    value: item.value,
                    symbolSize: size,
                    draggable: true,
                    itemStyle: {
                        normal: { 
                          color: curColor
                           },
                    },
                })
            }
            const bubbleOptions = {
                // backgroundColor: '#fff',
                animationEasingUpdate: 'bounceIn',
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        force: {
                            repulsion: repulsion,
                            edgeLength: 10,
                        },
                        // 是否开启鼠标缩放和平移漫游
                        roam: false,
                        label: { 
                          normal: { 
                            show: true,
                            fontSize:20,
                            formatter:"{b}\n{c}"
                             } 
                          },
                        data: bubbleData,
                         animation:true,
                         symbol: "path://M512,512m-448,0a448,448,0,1,0,896,0a448,448,0,1,0,-896,0Z"
                    },
                ],
            }
            this.options = bubbleOptions
        }
  }

}
</script>
<style lang="scss">
 #chart2{
           width: 215px;
            height: 220px;
            position: relative;
            background: #000;
            opacity: 0.9;
            margin-left: 10px;
            background: url('../assets/7.png');
 }
</style>