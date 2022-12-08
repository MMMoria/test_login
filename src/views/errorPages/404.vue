<template>
    <div>
      404
      <el-button @click="backtoHome">返回首页</el-button>
    </div>
</template>

<script type="text/javascript">
export default{
  name: 'page404',
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
