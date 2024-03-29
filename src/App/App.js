import Container from './common/styled/Container';
import Section from './common/structure/Section';
import Footer from './common/structure/Footer';
import Header from './common/structure/Header';
import Repositories from './features/repositories/Repositories';
import List from './common/structure/List';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useSelector } from 'react-redux';
import { selectDarkTheme } from './features/themeToggler/themeSlice';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { skillSet, learnNext } from './personalInfo';

const App = () => {
    const isThemeDark = useSelector(selectDarkTheme);

    return (
        <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Normalize />
            <Container>
                <Header />
                <main>
                    <Section
                        title={'My skillset includes 🛠️'}
                        body={<List items={skillSet} />}
                    />
                    <Section
                        title={'What I want to learn next 🚀'}
                        body={<List items={learnNext} />}
                    />
                    <Repositories />
                </main>
                <Footer />
            </Container>
        </ThemeProvider>
    );
};

export default App;
