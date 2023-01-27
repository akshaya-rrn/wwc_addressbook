import axios, {AxiosResponse} from 'axios';
import { GET_USERS_ENDPOINT } from './Constants';
import {UserData} from "../Components/AddressBook";

interface IRandomUserResponse  {
    results: UserData[];
    info: any;
}

export const GetUsers = async () => {
    return axios
    .get(GET_USERS_ENDPOINT)
    .then((response: AxiosResponse<IRandomUserResponse>) => response.data.results)
    .catch((error) => {
      throw error;
    });
};
