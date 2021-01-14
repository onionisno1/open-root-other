<template>
  <div style="padding: 0 14px 20px 14px;">
    <div class="c-title">{{title}}</div>
    <div v-for="(item, index1) in content" :key="index1">
      <div class="c-text">{{item.text}}</div>
      <div v-for="(url, index2) in item.imgUrl" :key="index2">
        <img :src="url" alt="" class="c-img">
      </div>
    </div>
  </div>
</template>

<script>
  import instruction from '../../m-info/instruction-info.js'
  export default {
    name: 'DetailInfo',
    data: function(){
      return {
        // info: [],
        // infoId: ''
        content: [],
        title: ''
      }
    },
    created(){
      let id = this.$route.params.id
      let info = instruction.getInfo()
      for(let i = 0; i < info.length; i++){
        if(info[i].id === id){
          this.title = info[i].title
          this.content = info[i].content
          break
        }
      }
    }
  }
</script>

<style scoped>
  .c-title{
    width: 100%;
    margin-top: 10px;
    line-height: 30px; 
    font-size: 20px;
    font-weight: bold;
    word-break: break-all;
  }
  .c-text{
    width: 100%;
    margin-top: 10px;
    line-height: 20px; 
    font-size: 14px;
    word-break: break-all;
  }
  .c-img{
    width: 80%;
    /* height: 50%; */
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
</style>