<template>
  <div>
    <h1>上传财产</h1>
  </div>
</template>

<script>
export default {
  name: 'UploadProperty',
  created () {
    console.log(this.$route.params)
    this.form.uname = this.$route.params.user.username
  },
  data () {
    return {
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
