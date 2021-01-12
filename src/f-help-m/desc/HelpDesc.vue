<template>
  <div class="help-desc">
    <img :src="'/preset/other/help/img/top-sea.png'" alt="" />
    <div class="desc-ctx">
      <div class="desc-logo">
        <img :src="'/preset/other/logo-t.png'" alt="" />
      </div>
      <div class="desc-title">点度智联云</div>
      <div class="desc-desc">随时随地掌控设备，提升生产力</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelpDesc'
}
</script>

<style scoped lang="scss">
  .help-desc {
    position: relative;
    height: 130px;
    background: linear-gradient(to bottom, #4641af, #7d25a0);
    box-shadow: 0 0 8px 0 #4641af;
    overflow: hidden;
  }
  .help-desc img {
    width: auto;
    height: 200px;
  }
  .desc-ctx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    padding: 10px 0 28px;
    text-align: center;
  }
  .desc-logo {
    width: 56px;
    margin: 0 auto;
  }
  .desc-logo img {
    width: 100%;
    height: auto;
  }
  .desc-title {
    font-size: 16px;
    padding-bottom: 2px;
  }
  .desc-desc {
    font-size: 12px;
  }
</style>
