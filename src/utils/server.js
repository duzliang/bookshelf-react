import axios from 'axios';
import { message } from 'antd';

const server = axios.create({
  baseURL: 'http://localhost:7001',
  timeout: 1000,
  withCredentials: true,
  headers: {
    Authorization: localStorage.getItem('token'),
    'Content-Type': 'application/json;charset=utf-8',
  },
});

server.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      message.error(`请求失败：[${response.status}] ${response.statusText}`);
    }
    return response;
  }, (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401: {
          message.warning('登录已过期, 请重新登录');
          break;
        }
        case 404: {
          message.error('接口未找到');
          break;
        }
        case 500: {
          message.error('系统错误');
          break;
        }
      }
    }
    Promise.reject(error);
  },
);

export default server;
