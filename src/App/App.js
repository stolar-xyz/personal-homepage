import { Container } from "./common/Container/styled";
import LearnList from "./common/LearnList";
import Section from "./common/Section";
import SkillList from "./common/SkillList";

function App() {
  return (
    <Container>
      <Section
        title={"My skillset includes 🛠️"}
        body={<SkillList />}
      />
      <Section
        title={"What I want to learn next 🚀"}
        body={<LearnList />}
      />
    </Container>
  );
}

export default App;
