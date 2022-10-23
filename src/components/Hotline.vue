<template>
  <div id="normal-box">
    <div class="bg-color-black">
      <div class="title">
        <div>
          <img src="../assets/5.png" class="img-log" /><span class="img-title"
            >热门路线</span
          >
        </div>
        <div>
          <img src="../assets/6.png" alt="" class="img-nav" />
        </div>
      </div>
      <div>
         <div class="pageBox">
        <div class="page">
          <div class="textBox">北京----------------------------------天津</div>
          <div class="imgbox"><img src="../assets/10.png" alt="" srcset=""></div>
        </div>
        <div class="page">
          <div class="textBox">北京----------------------------------济南</div>
          <div class="imgbox"><img src="../assets/10.png" alt="" srcset=""></div>
        </div>
        <div class="page">
          <div class="textBox">北京----------------------------------成都</div>
          <div class="imgbox"><img src="../assets/10.png" alt="" srcset=""></div>
        </div>
        <div class="page">
          <div class="textBox">北京----------------------------------广州</div>
          <div class="imgbox"><img src="../assets/10.png" alt="" srcset=""></div>
        </div>
        <div class="page">
          <div class="textBox">北京----------------------------------拉萨</div>
          <div class="imgbox"><img src="../assets/10.png" alt="" srcset=""></div>
        </div>
    
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "provinceVolume",
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
   opacity: 0.9;
  background: url('../assets/7.png');
}
.page {
  width: 100%;
  height: 30px;
  color: #75FBFE;
  background: url("../assets/8.png");
  background-size: 100%, 100%;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 19px 0 64px;
  box-sizing: border-box;
}
.textBox {
  width: 100%;
  margin-right: 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgbox {
  width: 13px;
  height: 100%;
  display: flex;
  align-items: center
}
</style>
