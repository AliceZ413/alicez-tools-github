<template>
  <div>
      <button @click="handleSpeak('你好呀')">播放</button>
  </div>

</template>

<script>
const synth = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance();
export default {
  data() {
    return {
        synth,
        msg,
    };
  },
  mounted() {
    // this.handleSpeak("你好哇");
  },
  methods: {
    // 语音播报
    handleSpeak(text) {
      console.log(text);
      this.msg.text = text; // 文字内容
      this.msg.lang = "zh-CN"; // 使用的语言:中文
      this.msg.volume = .8; // 声音音量：1
      this.msg.rate = .8; // 语速：1
      this.msg.pitch = 1; // 音高：1
      this.synth.speak(this.msg); // 播放
    },
  },
};
</script>
 
<style lang = "less" scoped>
</style>