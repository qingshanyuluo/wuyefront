<template>
  <div>
    <h1>我的快递</h1>
  </div>
</template>

<script>
export default {
  name: 'Express',
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
