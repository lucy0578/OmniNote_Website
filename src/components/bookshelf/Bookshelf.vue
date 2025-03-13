<script>
  import Notes from "./Notes";
  import CategoryBar from "./CategoryBar";
    export default {
      name: 'Bookshelf',
      components: {Notes, CategoryBar},
      data() {
        return {

        }
      },
      methods: {
        getNotes() {
          var _this = this;
          var currentCid = this.$refs.categoryBar.currentCid
          //后端创建后
          // this.axios.get("categories/"+currentCid+"/notes")
          //     .then(function (response) {
          //       if (response.status === 200) {
          //         _this.$refs.notes.notes = response.data
          //       }
          //     })

          // 后端创建后可以删掉
          setTimeout(() => {
            const mockNotes = {
              "1": [
                { name: "Vue.js 入门", abs: "Vue.js 是一个渐进式 JavaScript 框架。" },
                { name: "Vue 组件", abs: "组件是 Vue 的核心概念之一。" }
              ],
              "2": [
                { name: "JavaScript 进阶", abs: "了解 JavaScript 闭包、原型链等概念。" }
              ]
            };

            _this.$refs.notes.notes = mockNotes[currentCid] || []; // 如果分类 ID 不在 mock 数据中，返回空数组
          }, 500); // 模拟网络延迟 500ms
        }
      }
    }
</script>

<template>
  <div style="margin-left: 10px">
    <category-bar @categorySelect="getNotes" ref="categoryBar"></category-bar>
    <notes ref="notes"></notes>
  </div>
</template>

<style scoped>

</style>
