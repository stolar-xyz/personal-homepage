import Container from "./common/styled/Container";
import Section from "./common/structure/Section";
import SkillList from "./common/structure/SkillList";
import Footer from "./common/structure/Footer";
import Header from "./common/structure/Header";
import LearnList from "./common/structure/LearnList";
import Tiles from "./features/repositories/Tiles";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./theme";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./features/themeToggler/themeSlice";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  const isThemeDark = useSelector(selectDarkTheme)

  return (
    <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Normalize />
      <Container>
        <Header />
        <main>
          <Section
            title={"My skillset includes 🛠️"}
            body={<SkillList />}
          />
          <Section
            title={"What I want to learn next 🚀"}
            body={<LearnList />}
          />
          <Tiles />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
