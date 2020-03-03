import axios from 'axios';
import { serverUrl } from '../const';

export const getList = async () => {
  const response = await axios.get(`${serverUrl}/got/search`);
  return response.data;
};

export const getWarData = async (location) => {
  const response = await axios.get(`${serverUrl}/got/custom_search?location=${location}`);
  return response.data;
};

export const getCount = async () => {
  const response = await axios.get(`${serverUrl}/got/get_count`);
  return response.data;
};
