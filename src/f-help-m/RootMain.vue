<template>
  <div class="root pin-wrap home-top">
    <div>
      <div class="about-header pin-top">
        <div class="g-popup-btns g-popup-btns-l">
          <span class="g-popup-btn g-tip-btn" @click="closeMe">
            <i class="el-icon-back"></i>
          </span>
        </div>
      </div>
      <help-desc></help-desc>
      <div class="g-tabs home-tabs" v-if="isShowTab">
        <router-link to="/fqa">
          <span class="g-tab" :class="routeName === ('fqa' || 'def') ? 'g-tab-active' : ''">
            <span class="g-tab-t">
              常用问题
            </span>
          </span>
        </router-link>
        <router-link to="/instruction">
          <span class="g-tab" :class="routeName === 'instruction' ? 'g-tab-active' : ''">
            <span class="g-tab-t">
              使用说明
            </span>
          </span>
        </router-link>
      </div>
    </div>
    <div class="full-c home-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelpDesc from './desc/HelpDesc.vue'

export default {
  name: 'RootMain',
  components: {
    HelpDesc
  },
  created() {
    this.routeName = this.$route.name
    if(this.routeName === 'detailInfo'){
      this.isShowTab = false
    }else{
      this.isShowTab = true
    }
    this.clearInitMask()
  },
  data() {
    return {
      isShowTab: true,
      routeName: ''
    }
  },
  watch: {
    $route(to, from){
      console.log('this is to: ' + to)
      console.log('this is from: ' + from)
      this.routeName = to.name
      if(to.name === 'detailInfo'){
        this.isShowTab = false
      }else{
        this.isShowTab = true
      }
    }
  },
  methods: {
    clearInitMask() {
      window.EMIT_INIT_OK()
    },
    closeMe() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
  .home-tabs {
    padding: 8px 15px 10px;
    box-sizing: border-box;
  }
  .home-top {
    // padding-top: 184px;
    display: flex;
    flex-direction: column;
  }
  .home-body {
    overflow: auto;
  }
  .about-header {
    z-index: 100;
    line-height: 54px;
    color: #fff;
  }
</style>
