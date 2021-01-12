<template>
  <div class="hls-live pin-wrap">
    <video v-if="playing" ref="live" autoplay :src="playUrl" controls playsinline></video>
    <div v-else class="play-mask" @click="doPlay">
      <div class="play-tip">
        <div class="play-icon"><v-icon name="play" /></div>
        <div class="play-text">点击播放</div>
      </div>
    </div>
  </div>
</template>

<script>
import Hls from 'hls.js'

export default {
  name: 'Live',
  data() {
    return {
      playing: false,
      playUrl: '',
      hls: null
    }
  },
  created() {
    // Get hls live url from router query.
    let encodedHlsUrl = this.$router.currentRoute.query.url
    if (typeof encodedHlsUrl === 'string' && encodedHlsUrl !== '') {
      this.playUrl = decodeURIComponent(encodedHlsUrl)
    }
  },
  beforeDestroy () {
    if (this.playing) {
      this.$refs.live.pause()
      this.hls.destroy()
    }
  },
  methods: {
    doPlay () {
      if (this.playUrl === '') {
        return
      }
      if (!this.playing) {
        this.playing = true
        this.$nextTick(() => {
          if (Hls.isSupported()) {
            let hls = new Hls();
            hls.loadSource(this.playUrl)
            hls.attachMedia(this.$refs.live)
            this.hls = hls
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
              // Load success.
              this.$refs.live.play()
            })
            hls.on(Hls.Events.ERROR, () => {
              // Error.
            })
          } else if (this.$refs.live.canPlayType('application/vnd.apple.mpegurl')) {
            this.$refs.live.addEventListener('loadedmetadata', () => {
              // Load success.
              this.$refs.live.play()
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .hls-live {
    background: #333;
  }
  .hls-live video {
    display: block;
    width: 100%;
    height: 100%;
  }
  .play-mask {
    position: relative;
    cursor: pointer;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 100%;
  }
  .play-tip {
    position: absolute;
    font-size: 18px;
    top: 50%;
    left: 50%;
    margin: -38px -36px;
  }
  .play-icon {
    padding-bottom: 5px;
    font-size: 2em;
    overflow: hidden;
    border-radius: 100%;
  }
</style>
