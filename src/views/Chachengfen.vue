<template>
  <div>
    <van-search
      v-model="searchKey"
      show-action
      label="UID"
      placeholder="请输入用户UID"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="list">
      <div class="list-item" v-for="item in list" :key="item.mid">
          <div class="top">
              <img class="avatar" :src="item.face" alt=""/>
              <div class="top-right">
                  <div class="uname">{{ item.uname || '--' }}</div>
                  <div class="mtime">{{ item.mtime | formatTime }}</div>
              </div>
          </div>
          <div class="center">
              <div class="sign">{{ item.sign || '--' }}</div>
          </div>
          <div class="bottom"></div>
        <!-- <div>关注时间: {{ item.mtime | formatTime }}</div>
        <div>特别关注: {{ item.special == 0 ? '否' : '是' }}</div>
        <div>用户昵称: {{ item.uname || '--' }}</div>
        <div>用户头像: <img :src="item.face" alt=""/></div> -->
      </div>
    </div>
    <van-pagination
      v-model="curPage"
      model="simple"
      :total-items="total"
      :items-per-page="50"
      @change="changePage"
    ></van-pagination>
  </div>
</template>

<script>
import { api_getSomeRelations } from "../http/apis/chachengfen";
export default {
  data() {
    return {
      searchKey: "",
      list: [
//           {
// "mid": 500615835,
// "attribute": 2,
// "mtime": 1640445694,
// "tag": null,
// "special": 0,
// "contract_info": {
// "is_contractor": false,
// "ts": 0,
// "is_contract": false,
// "user_attr": 0
// },
// "uname": "欧莱雅男士官方",
// "face": "http://i0.hdslb.com/bfs/face/c91e390dbe0ccae74eb64d799e743349739ca5aa.jpg",
// "sign": "欧来欧来，欧气自来！欢迎来到欧气爆棚之地！随时随地@我就有好运气～",
// "official_verify": {
// "type": 1,
// "desc": "欧莱雅（中国）有限公司官方账号"
// },
// "vip": {
// "vipType": 2,
// "vipDueDate": 1654704000000,
// "dueRemark": "",
// "accessStatus": 0,
// "vipStatus": 1,
// "vipStatusWarn": "",
// "themeType": 0,
// "label": {
// "path": "",
// "text": "年度大会员",
// "label_theme": "annual_vip",
// "text_color": "#FFFFFF",
// "bg_style": 1,
// "bg_color": "#FB7299",
// "border_color": ""
// },
// "avatar_subscript": 1,
// "nickname_color": "#FB7299",
// "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
// }
// },
      ],
      curPage: 1,
      total: 0,
    };
  },
  methods: {
    onSearch() {
      if (this.searchKey.trim() == "") {
        this.$toast("请输入用户UID");
      } else {
        this.getSomeRelation(1);
      }
    },
    getSomeRelation(page) {
      api_getSomeRelations({
        pn: page,
        vmid: this.searchKey,
      })
        .then((res) => {
          console.log(res);
          let { data } = res.data;
          if (data) {
            this.total = data.total || 0;
            this.list = data.list || [];
            // if (page == 1) {
            //   this.list = data.list || [];
            // } else {
            //   this.list = this.list.concat(data.list);
            // }
          }
        })
        .catch((err) => {
          throw err;
        });
    },
    changePage() {
        let page = this.curPage;
        this.getSomeRelation(page);
    },
  },
  created() {},
  filters: {
    formatTime(val) {
        // console.dir(val.toString().length)
        if (val.toString().length < 13) {
            val = val * 1000;
        }
      return new Date(val).format("yyyy-MM-dd");
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  .list-item {
      padding: 20px;
      box-shadow: 0px 0px 8px 1px rgba(197, 197, 197, .3);
      border-radius: 8px;
      .top {
          display: flex;
          align-items: center;
          .avatar {
              width: 50px;
              height: 50px;
              display: block;
              border-radius: 50%;
          }
          .top-right {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 50px;
              box-sizing: border-box;
              padding: 5px 0;
              margin-left: 15px;
              .uname {

              }
              .mtime {
                  color: #aaa;
              }
          }
      }
      .center {
          margin-top: 15px;
      }
  }
}
</style>