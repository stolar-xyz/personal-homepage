import Section from "./common/Section";
import SkillList from "./common/SkillList";
import Tiles from "./common/Tiles";
import Title from "./common/Title";
import Footer from "./common/Footer";
import Container from "./common/Container";
import Header from "./common/Header";
import LearnList from "./common/LearnList";
import Main from "./common/Main";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./theme";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./features/themeToggler/themeSlice";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from './GlobalStyle';
import Error from "./common/Error";
import Loading from "./common/Loading";

const App = () => {
  const isThemeDark = useSelector(selectDarkTheme)

  return (
    <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Normalize />
      <Container>
        <Header />
        <Main>
          <Section
            title={
              <Title
                subtitle
                as="h2"
              >
                {"My skillset includes 🛠️"}
              </Title>
            }
            body={<SkillList />}
          />
          <Section
            title={
              <Title
                subtitle
                as="h2"
              >
                {"What I want to learn next 🚀"}
              </Title>
            }
            body={<LearnList />}
          />
          <Tiles />
          <Error />
          <Loading />
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
