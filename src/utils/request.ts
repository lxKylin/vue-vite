import axios from 'axios';

const request = axios.create();

// request interceptor
request.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// response interceptor
request.interceptors.response.use(
  (response) => {
    if (response.status !== 200 && response.status !== 201) {
      return Promise.reject(response);
    } else {
      const data: any = response.data;
      if (data.success) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  },
  async (error) => Promise.reject(error)
);

export default request;
