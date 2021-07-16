import axios from 'axios';

axios.defaults.baseURL = 'http://121.196.18.198';
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';

class API {
  get (url, params){
    return axios.get(url, {
      params
    }).then(res=>{
      if(res.status === 200 && res.data.code === 10){
        return res.data
      }else{
        console.error(res)
        return Promise.reject(res)
        // throw new Error(JSON.parse(res), res.data)
      }
    })
  }
  post (url, params){
    return axios.post(url, params).then(res=>{
      if(res.status === 200){
        return res.data
      }else{
        throw new Error()
      }
    })
  }

  login = (name, password)=> this.get('/api/search', { name, password })
  signup = (name, password) => this.post('/api/add', { name, password })
}

let api = new API()
export default api