import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeToggler/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;