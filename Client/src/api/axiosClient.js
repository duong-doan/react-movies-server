import axios from 'axios';
import { getToken } from 'utils/hooks/useToken';

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.common.Accept = 'application/json';
// axios.defaults.headers.common = { Authorization: `Bearer ${getToken()}` };
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios;
