import Subheader from '../../common/styled/Subheader';
import Content from './Content';
import { Wrapper, ExtraSubheaderContent, Icon } from './styled';

const Repositories = () => (
    <section>
        <Wrapper>
            <Icon />
            <Subheader>
                Portfolio
            </Subheader>
            <ExtraSubheaderContent>
                My recent projects
            </ExtraSubheaderContent>
        </Wrapper>
        <Content />
    </section>
);

export default Repositories;
