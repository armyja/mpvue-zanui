<template>
  <div
    class="zan-toast"
    :class="{ 'zan-toast--notitle' : !title }"
    v-if="show"
    @click="clearZanToast"
  >
    <!-- icon 展示 -->
    <div v-if="icon || image">
      <div
        v-if=" image"
        class="zan-toast__icon zan-toast__icon-image"
        :style="'background-image' + mao + 'url(' + image + ');'"
      ></div>
      <div
        v-else-if="icon === 'loading'"
        class="zan-toast__icon zan-toast__icon-loading"
      >
        <div class="zan-loading"></div>
      </div>
      <div
        v-else
        class="zan-toast__icon zan-icon"
        :class="'zan-icon-' + icon"
      ></div>
    </div>

    <!-- 文案展示 -->
    <div v-if=" title">{{ title }}</div>
  </div>
</template>

<script>
  const maohao = ':'
  export default {
    props: ['title', 'icon', 'image', 'show'],
    computed: {
      mao: function () {
        return maohao
      }
    },
    methods: {
      showZanToast (title, timeout) {
        console.log(this)
        const options = formatParameter(title, timeout)

          // 清除上一轮的计时器
        const { timer = 0 } = this.zanToast || {}
        clearTimeout(timer)

          // 弹层设置~
        const z = {
          show: true,
          icon: options.icon,
          image: options.image,
          title: options.title
        }
        this.zanToast = z
          // 传入的显示时长小于0，就认为需要一直显示
        if (timeout < 0) {
          return
        }

            // 下一轮计时器
        const nextTimer = setTimeout(() => {
          this.clearZanToast()
        }, timeout || 3000)

        this.zanToast.timer = nextTimer
      },

          // 清除所有 toast
      clearZanToast () {
        const { timer = 0 } = this.zanToast || {}
        clearTimeout(timer)

        this.zanToast.show = false
      },

          // 快捷方法，显示 loading
      showZanLoading (title) {
        const options = formatParameter(title)

        this.showZanToast({
          ...options,
          icon: 'loading'
        })
      }
    }
  }
  function formatParameter (title, timeout = 0) {
    // 如果传入的 title 是对象，那么认为所有的配置属性都在这个对象中了
    if (typeof title === 'object') {
      return title
    }

    return {
      title,
      timeout
    }
  }
</script>

<style scoped>

</style>
