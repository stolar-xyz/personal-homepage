import Icon from "./common/styled/Icon";
import { ReactComponent as GithubExtraIcon } from "./images/svgs/githubExtra.svg";
import { ReactComponent as FacebookIcon } from "./images/svgs/facebook.svg";
import { ReactComponent as LinkedinIcon } from "./images/svgs/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./images/svgs/instagram.svg";

const primaryNickname = "stolar.xyz";
const secondaryNickname = "stolar-code";

export const repositoriesUrl = `https://github.com/${secondaryNickname}?tab=repositories`;
export const repositoriesApi = `https://api.github.com/users/${secondaryNickname}/repos`;
export const email = `stolar.code@gmail.com`;

export const socials = [
    {
        Icon: Icon(GithubExtraIcon),
        title: "GitHub",
        link: `https://github.com/${secondaryNickname}/`,
    },
    {
        Icon: Icon(FacebookIcon),
        title: "Facebook",
        link: `https://www.facebook.com/${primaryNickname}/`,
    },
    {
        Icon: Icon(LinkedinIcon),
        title: "LinkedIn",
        link: `https://www.linkedin.com/in/${secondaryNickname}/`,
    },
    {
        Icon: Icon(InstagramIcon),
        title: "Instagram",
        link: `https://www.instagram.com/${primaryNickname}/`,
    },
];

export const skillSet = [
    "Semantic & accessible HTML",
    "Responsive Web Design",
    "CSS BEM methodology",
    "CSS Flex",
    "CSS Grid",
    "JavaScript ES6+ features",
    "Immutability",
    "LocalStorage",
    "Working with API (fetch, axios)",
    "Error handling",
    "Promises, Async/Await",
    "React",
    "React Hooks",
    "React Router",
    "React Redux",
    "Redux Saga",
    "Styled components",
    "Markdown",
    "Git",
    "Slack",
    "Trello",
    "Figma",
    "Scrum",
    "NPM",
];

export const learnNext = [
    "Typescript",
    "Gatsby.js",
    "Node.js",
    "React Context",
    "React Native",
    "Cypress",
    "Unit testing",
];