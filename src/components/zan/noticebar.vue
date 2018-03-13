<template>
  <div class="zan-noticebar">
    <div
      :id="componentId + '__content-wrap'"
      style="height: 18px; overflow: hidden; position: relative;"
    >
      <div
        :animation="animationData"
        :id="componentId + '__content'"
        style="position: absolute; white-space: nowrap;"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>


<script>
    export default {
      mounted () {
        this.$emit('ref', { [this.componentId]: this })
      },
      props: ['componentId', 'animationData', 'text'],
      watch: {
        animationData: function () {
          console.log('asd', this.animationData)
        }
      },
      methods: {
        initZanNoticeBarScroll (that, componentId) {
          console.log('initZanNoticeBarScroll', that)
          that.zanNoticeBarNode = that.zanNoticeBarNode || {}
          that.zanNoticeBarNode[`${componentId}`] = {
            width: undefined,
            wrapWidth: undefined,
            animation: null,
            resetAnimation: null
          }

          // console.log(`#${componentId}__content`)
          let query = wx.createSelectorQuery().select(`#${componentId}__content`).boundingClientRect()
          query.exec(function (res) {
            // console.log(res)
            // var backImageRect = res[0]
            // var screenWidth = backImageRect.width
            // console.log(screenWidth + '  ' + JSON.stringify(res) + '\n \n \n \n ' + JSON.stringify(this))
          })

          const currentComponent = that.zanNoticeBarNode[`${componentId}`]
          wx.createSelectorQuery().select(`#${componentId}__content`).boundingClientRect().exec((rect) => {
            if (!rect[0] || !rect[0].width) {
              console.warn('页面缺少 noticebar 元素')
              return
            }
            currentComponent.width = rect[0].width
            wx.createSelectorQuery().select(`#${componentId}__content-wrap`).boundingClientRect().exec((rect) => {
              if (!rect[0] || !rect[0].width) {
                return
              }
              currentComponent.wrapWidth = rect[0].width
              if (currentComponent.wrapWidth < currentComponent.width) {
                var mstime = currentComponent.width / 40 * 1000
                currentComponent.animation = wx.createAnimation({
                  duration: mstime,
                  timingFunction: 'linear'
                })
                currentComponent.resetAnimation = wx.createAnimation({
                  duration: 0,
                  timingFunction: 'linear'
                })
                that.scrollZanNoticeBar(that, componentId, mstime)
              }
            })
          })
        },

        scrollZanNoticeBar (that, componentId, mstime) {
          const currentComponent = that.zanNoticeBarNode[`${componentId}`]
          const resetAnimationData = currentComponent.resetAnimation.translateX(currentComponent.wrapWidth).step()
          that[componentId].animationData = resetAnimationData.export()
          const aninationData = currentComponent.animation.translateX(-mstime * 40 / 1000).step()
          setTimeout(() => {
            that[componentId].animationData = aninationData.export()
          }, 100)

          setTimeout(() => {
            that.scrollZanNoticeBar(that, componentId, mstime)
          }, mstime)
        }
      }
    }
</script>

<style scoped>

</style>
