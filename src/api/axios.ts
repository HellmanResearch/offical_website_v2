import { notification } from 'antd';
import axios, { AxiosRequestConfig, Method } from 'axios';
interface PendingType {
  url: string | undefined;
  method: Method | undefined;
  params: object;
  data: object;
  cancel: Function;
}
const pending: Array<PendingType> = [];
const CancelToken = axios.CancelToken;

const removePending = (config: AxiosRequestConfig) => {
  for (const key in pending) {
    const item: number = +key;
    const list: PendingType = pending[key];
    if (
      list.url === config.url &&
      list.method === config.method &&
      JSON.stringify(list.params) === JSON.stringify(config.params) &&
      JSON.stringify(list.data) === JSON.stringify(config.data)
    ) {
      pending.splice(item, 1);
    }
  }
};

const service = axios.create({
  withCredentials: false,
  timeout: 60000,
});

service.interceptors.request.use(
  (request) => {
    removePending(request);
    request.cancelToken = new CancelToken((c) => {
      pending.push({
        url: request.url,
        method: request.method,
        params: request.params,
        data: request.data,
        cancel: c,
      });
    });

    // const token = Cookies.getKey(SESSION_TOKEN);
    // if (token) {
    //   const headers = request.headers;
    //   if (headers) {
    //     headers['token'] = token;
    //   }
    // }

    request.baseURL = process.env['REACT_APP_BASE_URL'];
    return request;
  },
  (error) => {},
);

service.interceptors.response.use(
  (response) => {
    removePending(response.config);
    return new Promise((resolve, reject) => {
      if (response.status === 200) {
        const res = response.data;
        if (res.code === 200) {
          resolve(res.data);
        } else if (res.code === 403) {
          window.location.href = './login';
        } else if (res.code === 402) {
          // window.location.href = './no-access';
          notification.error({
            message: '请求报错',
            description: '用户无权限',
          });
        } else {
          const message = res.message;
          notification.error({
            message: '请求报错',
            description: message ?? '接口异常',
          });

          reject(res);
        }
      } else {
        reject('error');
      }
    });
  },
  (error) => {
    return error;
  },
);

export default service;
