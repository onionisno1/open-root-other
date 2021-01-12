<template>
  <div class="root pin-wrap">
    <router-view></router-view>
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
  .root {
    padding-top: 1px;
  }
</style>
