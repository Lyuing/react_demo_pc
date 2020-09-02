import axios from 'axios';

axios.defaults.baseURL = 'http://www.lyxweb.top';
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';

class API {
  get (url, params){
    return axios.get(url, {
      params
    }).then(res=>{
      if(res.status === 200){
        return res.data
      }else{
        throw new Error()
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