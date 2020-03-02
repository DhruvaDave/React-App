import axios from 'axios';
import { serverUrl } from '../const';

export const getList = async () => {
  const response = await axios.get(`${serverUrl}/disconnect_app`);
  return response.data;
};

export const getCount = async () => {
  const response = await axios.get(`${serverUrl}/got/get_count`);
  return response.data;
};

export const getSearchResult = () => {};
