<template>
  <div class="home">
      <!-- <button type="button" @click="getJson">从后端取json</button>
      <div class="showJson">{{json}}</div> -->
      <Main msg="" />
  </div>
</template>

<script lang="ts">
import store from '../store';
import { Component, Vue } from 'vue-property-decorator';
import Main from '@/components/Main.vue'; // @ is an alias to /src

@Component({
  components: {
    Main,
  },
})
export default class Home extends Vue {
  get json() {
    return store.state.json;
  }
  public getJson() {
    store.dispatch('getJson');
   }
}
</script>


<style scoped>

</style>