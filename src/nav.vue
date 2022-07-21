<template>
  <div id="app" class="bu">
    <el-button type="primary" round @click="toBaidu">Baidu</el-button>
    <el-button type="primary" round @click="toZhihu">知乎</el-button>
    <el-button type="primary" round @click="toBing">Bing</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    toBaidu() {
      window.location.href = "https://www.baidu.com";
    },
    toZhihu() {
      window.location.href = "https://www.zhihu.com/";
    },
    toBing() {
      window.location.href = "https://cn.bing.com/";
    }
  }
};
</script>

<style>
.bu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
