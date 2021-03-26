import axios from "axios";
import { repositoriesUrl } from "../../personalInfo";

export const getRepositories = async () => {
    const response = await axios.get(repositoriesUrl);

    return response.data;
};