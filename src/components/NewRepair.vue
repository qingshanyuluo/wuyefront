<template>
  <div>
    <br>
    <h2>保修</h2>
    <br>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item>
        <el-input
          type="textarea"
          :rows="11"
          placeholder="请输入内容"
          v-model="content">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即保修</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'NewRepair',
  created () {
    console.log(this.$route.query)
    this.id = this.$route.query.id
    console.log(this.id)
  },
  data () {
    return {
      content: '',
      id: ''
    }
  },
  methods: {
    onSubmit () {
      var _this = this
      this.$axios.post('/repair/add', [ this.content, this.id ])
        .then(function (response) {
          console.info(response.data)
          _this.$alert('添加成功', '提示', {})
          // _this.$router.push('/login')
        })
        .catch(function (error) {
          _this.$alert('添加失败', '提示', {})
          console.info('dds' + error)
          return false
        })
    }
  }
}
</script>

<style>

</style>
