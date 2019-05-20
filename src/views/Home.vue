<template>
  <div class="container">
    <div class="imgContainer">
      <!-- <div v-for="(i,index) in fakeImg" :key="index" :style="{backgroundImage:'url('+ i + ')'}" @click="clickImg($event)"></div> -->
      <div v-for="(i,index) in fakeImg" :key="index">
        <img :src="i" @click="clickImg($event)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import copy from 'copy-string'
import { Message } from 'element-ui';
Vue.prototype.$message = Message

@Component
export default class Main extends Vue {
  // private url = 'http://localhost:3000/public/image/bg_image_upload.png'
  private url = 'https://i0.hdslb.com/bfs/article/ae1e87fe7080bcb975c57a5073fca83148fee9d1.jpg@1320w_590h.webp'
  private fakeImg = [this.url, this.url, this.url, this.url, this.url, this.url, this.url, this.url ]

  @Prop() private msg!: string

  private mounted() {
    console.log(this.$message)
  }
  private clickImg(e: any) {
    copy(e.srcElement.src, this.successMsg, this.errorMsg)
  }
  private errorMsg() {
    this.$message.error('复制失败')
  }

  private successMsg() {
    this.$message({
          showClose: true,
          message: '复制成功',
          type: 'success',
    })
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.container {
  .imgContainer {
    margin: 0 auto;
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    div {
      box-sizing: border-box;
      border: 1px solid black;
      width: 200px;
      height: 200px;
      overflow: hidden;
      img {
        &:hover {
          cursor: pointer;
        }
        height: 150px;
      }
    }
  }
}
</style>
