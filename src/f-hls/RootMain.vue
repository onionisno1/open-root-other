<template>
  <div class="root pin-wrap">
    <div class="full-c">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RootMain',
  created() {
    this.clearInitMask()
  },
  methods: {
    clearInitMask() {
      window.EMIT_INIT_OK()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
