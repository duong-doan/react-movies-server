export const getToken = () => {
  return JSON.parse(localStorage.getItem('accessToken'));
};

export const setToken = (token) => {
  localStorage.setItem('accessToken', token);
};
