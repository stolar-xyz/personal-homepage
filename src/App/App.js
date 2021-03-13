import Article from "./common/Article";
import MainLink from "./common/MainLink";
import Main from "./common/Main";
import LearnList from "./common/LearnList";
import Profile from "./common/Profile";
import Section from "./common/Section";
import SkillList from "./common/SkillList";
import TilesSection from "./common/TilesSection";
import Description from "./common/Description";
import Title from "./common/Title";
import IconLinks from "./common/IconLinks";
import ThemeToggler from "./features/themeToggler/ThemeToggler";
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
      <Main>
        <ThemeToggler />
        <Article
          image={<Profile />}
          extraTitleContent={"This is"}
          title={
            <Title>
              {"Andrzej Stolarek"}
            </Title>
          }
          description={
            <Description>
              {"👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities."}
            </Description>
          }
          extraContent={<MainLink />}
        />
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
        <TilesSection
          title={
            <Title
              subtitle
              as="h2"
            >
              {"Portfolio"}
            </Title>
          }
          extraTitleContent={"My recent projects"}
        />
        <Article
          extraTitleContent={"Let’s talk!"}
          title={
            <Title
              mail
              as="p">
              {"stolar.code@gmail.com"}
            </Title>
          }
          description={
            <Description contact>
              {"I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me ✌"}
            </Description>
          }
          extraContent={<IconLinks />}
        />
      </Main>
    </ThemeProvider>
  );
};

export default App;
