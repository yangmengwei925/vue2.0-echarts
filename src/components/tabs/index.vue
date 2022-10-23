<template>
  <div class="tabs_box">
    <div 
    :class="[currentIndex==index?'active_style':'tab_style']" 
    v-for="(item, index) in tabs" 
    :key="index"
    @click="tabClick(item)">
    {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
    props:{
        tabs:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
  data() {
    return {
      currentIndex:0,
    };
  },
  methods:{
    tabClick(item){
        this.currentIndex = item.index
        this.$emit('change',item)
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs_box{
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    z-index: 1;
    .tab_style,
    .active_style{
        cursor: pointer;
        margin-left: 4px;
        padding: 4px;
        background-color: rgb(41, 69, 95);
        border-radius: 4px;
    }
    .active_style{
        background-color: rgb(40, 111, 179);
        cursor: pointer;
    }
}
</style>
