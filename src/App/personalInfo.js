import Icon from "./common/styled/Icon";
import { ReactComponent as GithubExtraIcon } from "./images/svgs/githubExtra.svg";
import { ReactComponent as FacebookIcon } from "./images/svgs/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./images/svgs/linkedIn.svg";
import { ReactComponent as InstagramIcon } from "./images/svgs/instagram.svg";

const nickname = "stolar-code"

export const repositoriesUrl = `https://api.github.com/users/${nickname}/repos`;
export const email = "stolar.xyz@gmail.com";

export const socials = [
    {
        Icon: Icon(GithubExtraIcon),
        title: "Github",
        link: "https://github.com/stolar-code/",
    },
    {
        Icon: Icon(FacebookIcon),
        title: "Facebook",
        link: "https://www.facebook.com/ctucb/",
    },
    {
        Icon: Icon(LinkedInIcon),
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/stolar-code/",
    },
    {
        Icon: Icon(InstagramIcon),
        title: "Instagram",
        link: "https://www.instagram.com/stolar.xyz/",
    },
];

export const skillset = [
    "Semantic & accessible HTML",
    "Responsive Web Design",
    "CSS BEM methodology",
    "CSS Flex",
    "CSS Grid",
    "JavaScript ES6+ features",
    "Immutbility",
    "LocalStorage",
    "Working with API (fetch,axios)",
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