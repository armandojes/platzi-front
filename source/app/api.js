import axios from 'axios';
const base_url = 'https://platzi-blog.000webhostapp.com';

async function connect (config){
  config.url = `${base_url}${config.url}`
  const response = await axios(config);
  return response.data;
}


const api = {
  get_list (page = 1){
    return connect({
      url: `/posts/${page}`,
      method: 'get',
    });
  },
  get_single (url){
    return connect({
      url: `/post/${url}`,
      method: 'get',
    });
  },
  get_primary(){
    return connect({
      url: `/postprimary`,
      method: 'get',
    });
  }
  get_comments(url){
    return connect({
      url: `/comments/${url}`,
      method: 'get',
    });
  }
}

export default api;
