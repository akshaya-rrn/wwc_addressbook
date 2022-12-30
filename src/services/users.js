import axios from 'axios';
import { GET_USERS_ENDPOINT } from './Constants';

export const GetUsers = async () => {
  return axios
    .get(GET_USERS_ENDPOINT)
    .then((response) => response.data.results)
    .catch((error) => {
      throw error;
    });
};
