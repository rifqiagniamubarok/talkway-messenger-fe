import { getCookie } from 'cookies-next';

const socketInstance = (data) => {
  const token = getCookie('token');
  return { data, token };
};

export default socketInstance;
