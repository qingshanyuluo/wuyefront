<template>
  <el-tabs type="border-card" style="height: inherit">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-user"></i>用户查看</span>
      <ShowUser/>
    </el-tab-pane>
    <el-tab-pane label="消息中心">消息中心</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
import ShowUser from '../components/ShowUser'
export default {
  name: 'Admin',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    show () {
      console.log(this.user.username)
    }
  },
  components: {
    ShowUser
  }
}
</script>

<style scoped>

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 90px;
  }

  .el-aside {
    background-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 100%;
    left: 0;
    top: 120px;
    bottom: 0;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
    bottom: 0;
    height: 100%;
  }

</style>
