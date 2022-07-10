export const getToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken;
};

export const setToken = (token) => {
  localStorage.setItem('accessToken', token);
};
