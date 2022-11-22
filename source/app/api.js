import axios from 'axios';

//API CONST INJECTED FROM WEBPACK
const base_url = API;

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
  get_list_voteds (page = 1){
    return connect({
      url: `/posts/popular/${page}`,
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
  },
  get_comments(url){
    return connect({
      url: `/comments/${url}`,
      method: 'get',
    });
  },
  get_posts_user(username, page){
    return connect({
      url: `/user/posts/${username}/${page}`,
      method: 'get',
    });
  }

}

export default api;
