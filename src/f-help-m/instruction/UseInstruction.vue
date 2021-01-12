<template>
  <div class="instruction-list">
    <div v-for="(item) in info" :key="item.id" class="instruction-list-item">
      <div class="c-info-title">
        <router-link :to="{path: '/detailInfo/' + item.id}">
          {{item.title}}
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import instruction from '../../m-info/instruction-info.js'
  export default {
    name: 'UseInstruction',
    data: function(){
      return {
        info: []
      }
    },
    created(){
      this.info = instruction.getInfo()
    }
  }
</script>

<style scoped lang="scss">
  .instruction-list{
    .c-info-title{
      height: 50px;
      line-height: 50px;
      font-size: 13px;
      font-weight: bold;
      padding: 0 14px 0 14px;
      border-bottom: 1px solid #EBEEF5;
    }
    .instruction-list-item:first-child{
      .c-info-title{
        border-top: 1px solid #EBEEF5;
      }
    }
  }
</style>