<script>
  export default {
    name: 'Bookshelf',
    data() {
      return {
        currentCid: 0,
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
      let mockResponse = {
        status: 200,
        data: [
          { id: 1, name: "test 1" },
          { id: 2, name: "test2" }
        ]
      };

      if (mockResponse.status === 200) {
        _this.categories = mockResponse.data;
      }
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
