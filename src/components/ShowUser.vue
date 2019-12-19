<template>
  <div>
    <h2>所有业主</h2>
    <el-table
      :data="users"
      style="width: 100%">

      <el-table-column
        prop="name"
        label="用户姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="did"
        label="楼栋号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="创建时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="family"
        label="家庭人数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="area"
        label="住房面积"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ShowUser',
  data () {
    return {
      users: ''
    }
  },
  created () {
    console.log(this.$route.params)
    this.username = this.$route.params.user.username
    console.log(this.username)
    var _this = this
    this.$axios.get('/info/allOwner')
      .then(function (response) {
        _this.$alert('查询成功', '提示', {})
        console.info(response.data)
        _this.users = response.data
      })
      .catch(function (error) {
        _this.$alert('查询失败', '提示', {})
        console.info('dds' + error)
        this.dialogVisible = true
        return false
      })
  }
}
</script>

<style>

</style>
