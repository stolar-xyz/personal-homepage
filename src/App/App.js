import Article from "./common/Article";
import Button from "./common/Button";
import Main from "./common/Main";
import IconButtons from "./common/IconButtons";
import LearnList from "./common/LearnList";
import Profile from "./common/Profile";
import Section from "./common/Section";
import SkillList from "./common/SkillList";
import TilesSection from "./common/TilesSection";
import Description from "./common/Description";
import Title from "./common/Title";

function App() {
  return (
    <Main>
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
        extraContent={<Button />}
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
        extraContent={"Github Icon"}
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
        extraContent={<IconButtons />}
      />
    </Main>
  );
}

export default App;
