<template>
  <div>
    <h1>待缴费</h1>
  </div>
</template>

<script>
export default {
  name: 'NeedPay',
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
