import Section from "./common/Section";
import SkillList from "./common/SkillList";
import Tiles from "./features/repositories/Tiles";
import Footer from "./common/Footer";
import Container from "./common/Container";
import Header from "./common/Header";
import LearnList from "./common/LearnList";
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
