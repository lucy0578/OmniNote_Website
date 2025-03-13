<script>
export default {
  name: "Notes",
  data() {
    return {
      // 测试数据，后端接好后删掉
      notes: [
        { name: "Note 1", abs: "This is a very long note content that should be truncated when displayed inside the card." },
        { name: "Note 2", abs: "Short note content." },
        { name: "Note 3", abs: null }, // 可能为空的情况
        { name: "Note 4" } // 直接没有 `abs`
      ]
    };
  },
  methods: {
    restrict(abs){
      if(abs === "" || abs == null){
        return ""
      }

      if(abs.length<48){
        return abs
      }
      else {
        return abs.substring(0,48) + '...'
      }
    },
  }
};
</script>

<template>
  <div class="notes-container">
    <el-card v-for="(item, i) in notes" :key="i" class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>{{ item.name }}</span>
        <el-tooltip transition="0s" class="item" effect="dark" content="Edit notes" placement="top-start">
          <el-button style="float: right; padding: 5px 0" type="text"><i class="el-icon-edit"></i></el-button>
        </el-tooltip>
        <el-tooltip transition="0s" class="item" effect="dark" content="View notes" placement="top-start">
          <el-button style="float: right; padding: 5px 0; margin-right: 5px" type="text"><i class="el-icon-more"></i></el-button>
        </el-tooltip>
        <el-tooltip transition="0s" class="item" effect="dark" content="Edit note title and introduction" placement="top-start">
          <el-button style="float: right; padding: 5px 0" type="text"><i class="el-icon-edit-outline"></i></el-button>
        </el-tooltip>
      </div>
      <div class="text item">
        {{ restrict(item.abs, 50) }}
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.notes-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 自动适应列数 */
  gap: 20px;
}

.box-card {
  width: 100%;
}
</style>
