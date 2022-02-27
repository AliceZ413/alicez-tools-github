import http from '@/http/axios';
import config from '@/http/config';

export const api_Chachengfen = function (data) {
    return http.get(`http://api.bilibili.com/x/relation/followings`, data);
}
export const api_getSomeRelations = function (data) {
    console.log(config);
    return http.get(`${config.server}/blogin`, data);
};
