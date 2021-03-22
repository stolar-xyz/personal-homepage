import axios from "axios";

const repositoriesUrl = "https://api.github.com/users/stolar-code/repos";

export const getRepositories = async () => {
    const response = await axios.get(repositoriesUrl);

    return response.data;
};