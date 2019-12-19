<template>
  <div>
    <h1>个人财产</h1>
  </div>
</template>

<script>
export default {
  name: 'ShowProperty',
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
