import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleDarkTheme } from "./themeSlice";

const ThemeToggler = () => {
    const isThemeDark = useSelector(selectDarkTheme)
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(toggleDarkTheme())}
        >
            {isThemeDark ?
                "light"
                :
                "dark"
            }
        </button>
    );
};

export default ThemeToggler;