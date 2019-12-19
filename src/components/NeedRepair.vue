<template>
  <div>
    正在保修
    <el-table
      :data="result"
      style="width: 100%">
      <el-table-column
        prop="content"
        label="内容">
      </el-table-column>
      <el-table-column
        prop="created_time"
        label="报修时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="resolved_time"
        label="解决时间"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'NeedRepair',
  created () {
    this.id = this.$route.query.id
    console.log(this.id)
    var _this = this
    this.$axios.get('/repair/getAll/' + this.id)
      .then(function (response) {
        console.info(response.data)
        _this.result = response.data
        _this.result.forEach((item, index) => {
          item.resolved_time = item.resolved_time === null ? '未解决' : item.resolved_time
        })
      })
      .catch(function (error) {
        _this.$alert('查询失败', '提示', {})
        console.info('dds' + error)
        return false
      })
  },
  data () {
    return {
      id: '',
      result: ''
    }
  },
  methods: {
    onSubmit () {
    }
  }
}
</script>

<style>

</style>
