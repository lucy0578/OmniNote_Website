<script>
  export default {
    name: "NoteEditForm",
    data() {
      return  {
        dialogFormVisible: false,
        formLabelWidth: "120px",
        form: {
        }
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('Keep changes and close?')
          .then(() => {
            this.updateNote()
            done();
          })
          .catch(_=> {});
      },
      updateNote() {
        var _this = this;
        var url = '/update/note/'+this.form.id+'/info'
        // this.axios.post(url, this.form)
        //   .then(function (response) {
        //     if (response.data.status === 200) {
        //       _this.dialogFormVisible = false;
        //       _this.$message('update success!');
        //       _this.$emit('updateInfo');
        //     }
        //     else {
        //       this.$message.error('update failed!');
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })

        // 笔记没有更新，可能需要后端这边修改
        if (!this.form.name.trim() || !this.form.abs.trim()) {
          this.$message.warning("Note name and introduction cannot be empty!");
          return;
        }

        if (!this.isCreate) {
          // 编辑笔记（模拟后端更新）
          console.log("Updating existing note:", this.form);
        }

        this.$message.success("Update success!");
        this.dialogFormVisible = false;
        this.$emit("updateInfo", { ...this.form });
      },
      deleteNote() {
        // this.$confirm("Are you sure you want to delete this note?", "Warning", {
        //   confirmButtonText: "Yes",
        //   cancelButtonText: "No",
        //   type: "warning"
        // }).then(() => {
        //   this.$message.success("Delete success!");
        //   this.dialogFormVisible = false;
        //   this.$emit("deleteInfo", this.form.id);
        // }).catch(() => {
        //   this.$message.info("Delete canceled");
        // });
      },
    }
  }
</script>

<template>
  <el-dialog title="Edit notebook title introduction" :visible.sync="dialogFormVisible" :before-close="handleClose">
    <el-form :model="form">
      <el-form-item label="Note name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Note introduction" :label-width="formLabelWidth">
        <el-input type="textarea" :rows="3" v-model="form.abs" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="deleteNote">Delete</el-button>
      <el-button type="primary" @click="updateNote">Update</el-button>
    </div>
  </el-dialog>
</template>

<style scoped>

</style>
