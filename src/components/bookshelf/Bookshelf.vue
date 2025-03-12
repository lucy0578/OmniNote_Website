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
          //         _this.$refs.notes.notes = reponse.data
          //       }
          //     })

          // 后端创建后可以删掉
          let mockResponse = {
            status: 200,
            data: [
              { id: 1, name: "test 1" },
              { id: 2, name: "test2" }
            ]
          };

          if (mockResponse.status === 200) {
            _this.$refs.notes.notes = mockResponse.data;
            console.log(mockResponse.data);
          }
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
