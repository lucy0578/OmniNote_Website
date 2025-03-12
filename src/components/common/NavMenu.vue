<script>
  export default {
    name: "NavMenu",
    data() {
      return {
        navList: [
          {name: 'Home Page', url: '/home'},
          {name: 'Bookshelf', url: '/bookshelf'},
        ],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<template>
  <div>
    <el-menu
      :default-active="'/home'"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"32
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item v-for="(item,i) in navList" :index="item.url" :key="i">
      {{ item.name }}
      </el-menu-item>

    </el-menu>
  </div>
</template>

<style>
  .nav-bar {
    width: 100%;
    left: 0px;
    top: 0px;
  }
  .el-menu-item {
    font-width: bolder;
  }

</style>
