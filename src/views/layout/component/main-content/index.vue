<template>
  <div class="main-container">
    <TopAside/>
    <Content/>
  </div>
</template>

<script type="text/javascript">
import TopAside from './top-aside'
import Content from './content'
export default{
  data () {
    return {

    }
  },
  components: {
    TopAside,
    Content
  }
}
</script>

<style scoped>
</style>
