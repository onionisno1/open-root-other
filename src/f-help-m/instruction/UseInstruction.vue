<template>
  <div class="instruction-list">
    <el-collapse v-model="act" accordion>
      <el-collapse-item v-for="item in info" :key="item.id" :title="item.title" :name="item.title">
        <div v-for="childInfo in item.children" :key="childInfo.id" class="c-info-title">
          <router-link :to="{path: '/detailInfo/' + item.id + '/' + childInfo.id}">
            {{childInfo.title}}
          </router-link>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- <div v-for="(item) in info" :key="item.id" class="instruction-list-item">
      <div class="c-info-title">
        <div v-if="item.children && item.children.length > 0">
          <el-collapse v-model="item.id" accordion>
            <el-collapse-item :title="item.title" :name="item.id">
              <div v-for="childInfo in item.children" :key="childInfo.id">
                {{childInfo.title}}
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div v-else>
          <router-link :to="{path: '/detailInfo/' + item.id + '/null'}">
            {{item.title}}
          </router-link>
        </div>
      </div> -->
    <!-- </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import instruction from '../../m-info/instruction-info.js'
  export default {
    name: 'UseInstruction',
    data: function(){
      return {
        info: instruction.getInfo(),
        act: ''
      }
    },
    created(){
      // this.info = instruction.getInfo()
    },
    methods: {
      nodeClick(a, b, c){
        console.log(a, b, c)
      }
    }
  }
</script>

<style scoped lang="scss">
  .instruction-list{
    .c-info-title{
      // height: 50px;
      line-height: 50px;
      font-size: 13px;
      // font-weight: bold;
      // padding: 0 14px 0 14px;
      border-bottom: 1px dashed #a9477d;
    }
    .c-info-title:last-child{
      border-bottom: none;
    }
  }
</style>