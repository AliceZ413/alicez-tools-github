<template>
  <div>
    <van-search
      v-model="vmid"
      show-action
      label="UID"
      placeholder="请输入UID"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
import { api_Chachengfen } from "@/http/apis/chachengfen.js";
export default {
  data() {
    return {
        vmid: '',
    };
  },
  created() {},
  methods: {
    onSearch() {
        this.chaChengfen(1);
    },
    chaChengfen(page) {
      api_Chachengfen({
        vmid: this.vmid,
        pn: page,
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
 
<style lang="less" scoped>
</style>