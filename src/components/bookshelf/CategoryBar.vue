<script>
  export default {
    name: 'CategoryBar',
    data() {
      return {
        currentCid: "1",
        categories: []
      }
    },
    mounted() {
      var _this = this;

      // 后端创建后
      // this.axios.get('/categories')
      // .then(response => {
      //   if (response.status ===200) {
      //     _this.categories = response.data;
      //   }
      // })

      // 后端创建后可以删掉
      setTimeout(() => {
        _this.categories = [
          { id: "1", name: "前端" },
          { id: "2", name: "后端" }
        ];
      }, 500);
      //

    },
    methods: {
      handleClick() {
        this.$emit('categorySelect')
      }
    }
  }
</script>

<template>
  <div>
    <el-tabs v-model="currentCid" @tab-click="handleClick">
      <el-tab-pane v-for="(item,i) in categories" :label="item.name" :key="i" :name="item.id.toString()"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>

</style>
