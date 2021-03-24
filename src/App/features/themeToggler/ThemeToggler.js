import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toggler, Ball, TogglerField } from "./styled";
import { selectDarkTheme, toggleDarkTheme } from "./themeSlice";
import { ReactComponent as SunIcon } from "../../images/svgs/sun.svg";
import ExtraTextContent from "../../common/ExtraTextContent";

const ThemeToggler = () => {
    const isThemeDark = useSelector(selectDarkTheme);
    const dispatch = useDispatch();

    return (
        <Toggler
            onClick={() => dispatch(toggleDarkTheme())}
            clicked={isThemeDark}
            title={"Toggle theme"}>
            <ExtraTextContent toggler>
                Dark mode {isThemeDark ? "On" : "Off"}
            </ExtraTextContent>
            <TogglerField>
                <Ball>
                    <SunIcon />
                </Ball>
            </TogglerField>
        </Toggler>
    );
};

export default ThemeToggler;