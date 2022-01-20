import http from '@/http/axios';
import config from '@/http/config';

export const api_getZuowen = function (data) {
    return http.get(`${config.ascnki}/v1/api/ranking/`, data);
};

