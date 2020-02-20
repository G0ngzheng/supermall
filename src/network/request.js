import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/hy',
    timeout: 600000
  })
  instance.interceptors.request.use(config => {
    // console.log('请求成功拦截：', config);
    return config
  },error => {
    // console.log('请求失败拦截：', error);
  })

  instance.interceptors.response.use(res => {
    // console.log('resopnse success:', res);
    return res.data
  },error => {
    // console.log('response fail:', error);
  })
  return instance(config)
}

