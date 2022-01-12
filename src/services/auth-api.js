import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
};

export const logIn = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
};

export const logOut = async () => {
  await axios.post('/users/logout');
  token.unset();
};

export const currentUser = async currentToken => {
  token.set(currentToken);
  const { data } = await axios.get('/users/current');
  return data;
};
