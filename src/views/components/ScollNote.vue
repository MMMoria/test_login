<template>
    <div ref="scollwrap" class="scollwrap">
      <div ref="content1" class="content1" :style="'margin-left:'+marLeft+'px'">
        <i class="el-icon-alarm-clock"></i>
        <span>通知通知123111</span>
      </div>
    </div>
</template>

<script type="text/javascript">
export default{
  components: {

  },
  data () {
    return {
      // cwidth: null,
      cleft: null,
      marLeft: 0,
      timer: null

    }
  },
  mounted() {
    this.startRoll()
  },
  methods: {
    startRoll() {
      let that = this
      let pwidth = document.getElementsByClassName('scollwrap')[0].offsetWidth
      let cwidth = document.getElementsByClassName('content1')[0].offsetWidth
      console.log('pwidth',pwidth)
      console.log('marginleft11',that.marLeft)
      console.log(cwidth + that.marLeft)
      if (pwidth > cwidth + that.marLeft) {
        that.timer = setInterval(function() {
          if (cwidth + that.marLeft < pwidth) {
            that.marLeft += 10
          }else {
            that.marLeft = 0
          }
          console.log('++',cwidth + that.marLeft)
          console.log('marginleft',that.marLeft)
        },200)
      }else {
        that.marLeft = 0
        that.timer = null
      }
    }
  }
}
</script>

<style scoped lang="scss">
.scollwrap {
  width: 1000px;
  height: 50px;
  border: 1px solid black;
  .content1 {
    display: inline;
    line-height: 50px;
    border: 1px solid red;
    i {
      font-size: 20px;
    }
  }
}
</style>
