import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckBox, Label, LabelText, Toggler, Ball } from "./styled";
import { selectDarkTheme, toggleDarkTheme } from "./themeSlice";
import { ReactComponent as SunIcon } from "../../images/svgs/sun.svg";

const ThemeToggler = () => {
    const isThemeDark = useSelector(selectDarkTheme);
    const dispatch = useDispatch();

    return (
        <Label>
            <LabelText>
                Dark mode {isThemeDark ? "On" : "Off"}
            </LabelText>
            <Toggler>
                <CheckBox
                    type="checkbox"
                    checked={isThemeDark}
                    onChange={() => dispatch(toggleDarkTheme())}
                />
                <Ball>
                    <SunIcon />
                </Ball>
            </Toggler>
        </Label>
    );
};

export default ThemeToggler;