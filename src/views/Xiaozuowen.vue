<template>
  <div class="" style="height: 100%">
    <!-- <div class="title"></div> -->
    <!-- <div class="list">
      <div class="list-item" v-for="item in replies" :key="item.oid">
        <div class="" v-html="item.content"></div>
      </div>
    </div> -->
    <van-list
      class="list"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="list-item" v-for="item in replies" :key="item.oid">
        <div class="" v-html="item.content"></div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { api_getZuowen } from "@/http/apis/xiaozuowen.js";
export default {
  name: "xiaozuowen",
  data() {
    return {
      replies: [],
      all_count: 0,
      end_time: 0,
      start_time: 0,
      loading: false,
      finished: false,
      page: 1,
    };
  },
  created() {
    // api_getZuowen({
    //   sortMode: 0,
    //   timeRangeMode: 0,
    //   pageSize: 10,
    //   pageNum: 1,
    // }).then((res) => {
    //   let { code, data } = res.data;
    //   console.log(data);
    //   if (code == 0) {
    //     data.replies.forEach((item) => {
    //       item.content = item.content.replace(/\n/g, "<br>");
    //     });
    //     this.replies = data.replies;
    //     this.all_count = data.all_count;
    //     this.end_time = data.end_time;
    //     this.start_time = data.start_time;
    //   }
    // });
  },
  methods: {
    handleLoad() {
      this.onLoad(this.page);
    },
    onLoad(page) {
      console.log("load");
      api_getZuowen({
        sortMode: 0,
        timeRangeMode: 0,
        pageSize: 10,
        pageNum: page,
      }).then((res) => {
        let { code, data } = res.data;
        console.log(data);
        if (code == 0) {
          if (data.replies.length == 0) {
            this.loading = false;
            this.finished = true;
            return;
          }
          data.replies.forEach((item) => {
            item.content = item.content.replace(/\n/g, "<br>");
          });
          this.replies = data.replies;
          this.all_count = data.all_count;
          this.end_time = data.end_time;
          this.start_time = data.start_time;
        }
        this.loading = false;
        this.page += 1;
      });
    },
  },
};
</script>
 
<style lang = "less" scoped>
.title {
  height: calc(40px);
}
.list {
  /* height: calc(100vh - 40px);
  overflow-y: auto; */
  height: calc(100vh - 46px - 20px);
  overflow-y: auto;
}
</style>