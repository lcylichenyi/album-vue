<template>
  <div>
    <table cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td v-for="(i,index) in fakeImg" :key="index" :style="{backgroundImage:'url('+ i + ')'}" @click="clickImg($event)"></td>
        </tr>
      </tbody>
    </table>
    <button class="btn" @click="shit()">aaaaaaa</button>
    <el-button type="primary" disabled>主要按钮</el-button>
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
  private fakeImg = [this.url, this.url, this.url, this.url, this.url]
  private index = 1

  @Prop() private msg!: string

  private mounted() {
    console.log(this.$message)
  }
  private clickImg(e: any) {
    copy(e.srcElement.style.backgroundImage.split('\"')[1])
  }
  private shit() {
    this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
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
table {
  border-collapse: collapse;
  margin: 0 auto;
  tbody {
    tr {
      td {
        border: 1px solid black;
        width: 200px;
        height: 200px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
