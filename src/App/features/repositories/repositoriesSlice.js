import { createSlice } from '@reduxjs/toolkit';

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState: {
        repositories: null,
        status: 'initial',
    },
    reducers: {
        fetchRepositories: state => {
            state.status = 'loading';
        },
        fetchRepositoriesSuccess: (state, { payload: repositories }) => {
            state.repositories = repositories;
            state.status = 'success';
        },
        fetchRepositoriesError: state => {
            state.status = 'error';
        },
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = repositoriesSlice.actions;

export const selectStatus = state => state.repositories.status;
export const selectRepositories = state => state.repositories.repositories;

export default repositoriesSlice.reducer;
