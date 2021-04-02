import axios from 'axios';
import { repositoriesApi } from '../../personalInfo';

export const getRepositories = async () => {
    const response = await axios.get(repositoriesApi);

    return response.data;
};
