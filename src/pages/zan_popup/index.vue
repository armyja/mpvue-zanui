<template>
  <div class="container">

    <div class="doc-title zan-hairline--bottom">POPUP</div>

    <div class="zan-btns" style="margin-top: 30vh;">
      <button class="zan-btn" @click="togglePopup">
        弹出popup
      </button>
      <button class="zan-btn" @click="toggleTopPopup">
        从顶部弹出popup
      </button>
      <button class="zan-btn" @click="toggleBottomPopup">
        从底部弹出popup
      </button>
      <button class="zan-btn" @click="toggleLeftPopup">
        从左边弹出popup
      </button>
      <button class="zan-btn" @click="toggleRightPopup">
        从右边弹出popup
      </button>
    </div>

    <div class="zan-popup" :class="{ 'zan-popup--show': showPopup }">
      <div class="zan-popup__mask" @click="togglePopup"></div>
      <div class="zan-popup__container popup-example--center">
        <div class="zan-btns">
          <button class="zan-btn" @click="togglePopup">
            关闭 popup
          </button>
        </div>
      </div>
    </div>

    <div class="popup-example--left zan-popup zan-popup--left" :class="{ 'zan-popup--show': showLeftPopup }">
      <div class="zan-popup__mask" @click="toggleLeftPopup"></div>
      <div class="zan-popup__container">
        <div class="zan-btns">
          <button class="zan-btn" @click="toggleLeftPopup">
            关闭 popup
          </button>
        </div>
      </div>
    </div>

    <div class="popup-example--right zan-popup zan-popup--right" :class="{ 'zan-popup--show' : showRightPopup }">
      <div class="zan-popup__mask" @click="toggleRightPopup"></div>
      <div class="zan-popup__container">
        <div class="zan-btns">
          <button class="zan-btn" @click="toggleRightPopup">
            关闭 popup
          </button>
        </div>
      </div>
    </div>

    <div class="popup-example--top zan-popup zan-popup--top" :class="{ 'zan-popup--show' : showTopPopup }">
      <div class="zan-popup__mask" @click="toggleTopPopup"></div>
      <div class="zan-popup__container">
        内容
      </div>
    </div>

    <div class="popup-example--bottom zan-popup zan-popup--bottom" :class="{ 'zan-popup--show' : showBottomPopup }">
      <div class="zan-popup__mask" @click="toggleBottomPopup"></div>
      <div class="zan-popup__container">
        <div class="zan-btns">
          <button class="zan-btn" @click="toggleBottomPopup">
            关闭 popup
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        showPopup: false,
        showLeftPopup: false,
        showRightPopup: false,
        showTopPopup: false,
        showBottomPopup: false
      }
    },
    methods: {
      togglePopup () {
        this.showPopup = !this.showPopup
      },

      toggleLeftPopup () {
        this.showLeftPopup = !this.showLeftPopup
      },

      toggleRightPopup () {
        this.showRightPopup = !this.showRightPopup
      },

      toggleBottomPopup () {
        this.showBottomPopup = !this.showBottomPopup
      },

      toggleTopPopup () {
        this.showTopPopup = !this.showTopPopup
      }
    }
  }
</script>
<style  scoped>
  .popup-example--center {
    border-radius: 4px;
  }

  .popup-example--right .zan-popup__container {
    top: 0;
    bottom: 0;
  }

  .popup-example--left .zan-popup__container {
    top: 0;
    bottom: 0;
  }

  .popup-example--top .zan-popup__container {
    left: 0;
    right: 0;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 16px;
  }
  .popup-example--top .zan-popup__mask {
    opacity: 0;
  }

  .popup-example--bottom .zan-popup__container {
    left: 0;
    right: 0;
  }
</style>
