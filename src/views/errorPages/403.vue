<template>
  <div>
    403
    <el-button @click="backtoHome">返回首页</el-button>
  </div>
</template>

<script type="text/javascript">
export default{
  name: 'page403',
  data () {
    return {

    }
  },
  methods: {
    backtoHome() {
      this.$router.push('/')
    }
  },
  components: {

  }
}
</script>

<style scoped>
</style>
