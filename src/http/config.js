// const ENV = "development"; //体验版
const ENV = "production"; //正式版

//正式环境
const PROD_DOMAIN = "https://netease-cloud-music-api-jade-phi.vercel.app";
//惠州测试
const DEV_DOMAIN = "https://netease-cloud-music-api-jade-phi.vercel.app";

const context = {
  prod_config: {
    ENV,
    domain: PROD_DOMAIN,
    ascnki: 'https://asoulcnki.asia',
    server: 'http://175.178.53.96:8001',
  },
  dev_config: {
    ENV,
    domain: DEV_DOMAIN,
    ascnki: 'https://asoulcnki.asia',
    server: 'http://localhost:8001',
  },
};

let using_context;

switch (ENV.toString()) {
  case "production":
    using_context = context.prod_config;
    break;
  case "development":
    using_context = context.dev_config;
    break;
  default:
    break;
}

module.exports = using_context;