<template>
  <div>
    <h3>个人信息</h3>
    <br>
    <h2>姓名：{{owner.name}}</h2>
    <h2>性别：{{owner.sex}}</h2>
    <h2>楼栋号：{{owner.did}}</h2>
    <h2>家庭人数：{{owner.family}}</h2>
    <h2>居住面积：{{owner.area}}</h2>
    <h2>入住时间：{{owner.time}}</h2>
    <br>
  </div>
</template>

<script>
export default {
  name: 'ShowInfo',
  created () {
    console.log(this.$route.query)
    this.owner = this.$route.query
    console.log(this.owner)
    this.owner.time = this.owner.time.substring(0, 10)
  },
  data () {
    return {
      owner: ''
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
