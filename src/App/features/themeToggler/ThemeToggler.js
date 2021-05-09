import ExtraTextContent from '../../common/styled/ExtraTextContent';
import { useDispatch, useSelector } from 'react-redux';
import { Toggler, Ball, TogglerField } from './styled';
import { selectDarkTheme, toggleDarkTheme } from './themeSlice';
import { ReactComponent as SunIcon } from '../../assets/svgs/sun.svg';

const ThemeToggler = () => {
    const isThemeDark = useSelector(selectDarkTheme);
    const dispatch = useDispatch();

    return (
        <Toggler
            onClick={() => dispatch(toggleDarkTheme())}
            clicked={isThemeDark}
            title={'Toggle theme'}>
            <ExtraTextContent toggler>
                Dark mode {isThemeDark ? 'On' : 'Off'}
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
