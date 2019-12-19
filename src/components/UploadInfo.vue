<template>
  <div>
    <h1>上传信息</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="form.sex" label="M">男</el-radio>
        <el-radio v-model="form.sex" label="F">女</el-radio>
      </el-form-item>
      <el-form-item label="家庭人数">
        <el-select v-model="form.family" placeholder="请选择家庭人数">
          <el-option label="1人" value="1"></el-option>
          <el-option label="2人" value="2"></el-option>
          <el-option label="3人" value="3"></el-option>
          <el-option label="4人" value="4"></el-option>
          <el-option label="5人" value="5"></el-option>
          <el-option label="6人" value="6"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入住时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="住房面积">
        <el-input v-model="form.area"></el-input>
      </el-form-item>
      <el-form-item label="大楼编号">
        <el-input v-model="form.did"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UploadInfo',
  created () {
    console.log(this.$route.query)
    this.form.uname = this.$route.query
    console.log(this.form)
  },
  data () {
    return {
      form: {
        name: '',
        sex: '',
        family: '',
        time: '',
        date2: '',
        area: '',
        did: '',
        uname: ''
      }
    }
  },
  methods: {
    onSubmit () {
      var _this = this
      this.$axios.post('/info/register', this.form)
        .then(function (response) {
          console.info(response.data)
          _this.$alert('添加成功', '提示', {})
          // _this.$router.push('/login')
        })
        .catch(function (error) {
          _this.$alert('添加失败', '提示', {})
          console.info('dds' + error)
          this.dialogVisible = true
          return false
        })
    }
  }
}
</script>

<style>

</style>
