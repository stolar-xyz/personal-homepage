import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
    name: "repositories",
    initialState: {
        repositories: null,
        status: "loading",
    },
    reducers: {
        setRepositories: (state, { payload: repositories }) => {
            state.repositories = repositories;
        },
        setStatus: (state, { payload }) => {
            state.status = payload;
        },
    },
});

export const {
    setRepositories,
    setStatus,
} = repositoriesSlice.actions;

export const selectStatus = state => state.repositories.status;
export const selectRepositories = state => state.repositories.repositories;

export default repositoriesSlice.reducer;