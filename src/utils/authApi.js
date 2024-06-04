import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const newUserApi = async newUserData => {
  const { data } = await axios.post('/users/signup', newUserData);
  token.set(data.token);
  return {
    ...data.user,
    token: data.token,
  };
};

export const loginUserApi = async userData => {
  const { data } = await axios.post('/users/login', userData);
  token.set(data.token);
  return {
    ...data.user,
    token: data.token,
  };
};

export const logOutUserApi = async tokenUser => {
  token.set(tokenUser);
  const data = await axios.post('/users/logout');
  token.unSet();
  return data;
};

export const currentUserApi = async tokenUser => {
  token.set(tokenUser);
  const { data } = await axios.get('/users/current');
  return data;
};