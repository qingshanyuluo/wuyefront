<template>
  <div>
    <h1>已缴费</h1>
  </div>
</template>

<script>
export default {
  name: 'Paid',
  created () {
    console.log(this.$route.query)
    this.form.uname = this.$route.query
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
