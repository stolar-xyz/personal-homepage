import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
    name: "repositories",
    initialState: {
        content: [],
        status: "loading",
    },
    reducers: {
        setContent: (state, { payload: repositories }) => {
            state.content = repositories;
        },
        setStatus: (state, { payload }) => {
            state.status = payload;
        },
    },
});

export const {
    setContent,
    setStatus,
} = repositoriesSlice.actions;

export const selectStatus = state => state.repositories.status;
export const selectContent = state => state.repositories.content;

export default repositoriesSlice.reducer;