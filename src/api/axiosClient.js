import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] =
  'application/x-www-form-urlencoded';

export default axios;
