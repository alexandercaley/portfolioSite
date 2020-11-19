import tankImage from "../assets/projectImages/tankImage.png";
import redditImage from "../assets/projectImages/redditImage.png";
import shellImage from "../assets/projectImages/shellImage.png";
import clippersImage from "../assets/projectImages/clippersImage.png";
import greenworldImage from "../assets/projectImages/greenworldImage.png";
import surgedateImage from "../assets/projectImages/surgedateImage.png";
import websiteImage from "../assets/logo/logo_black.png";

let projectData = new Map();
projectData.set("website", {
  name: "Portfolio Website",
  category: "Web Application",
  year: "2020",
  description:
    "•This Portfolio website, alexandercaley.com\n•Built with React.js\n•Node server for contact with express\n•Used Bootstrap with React for styling\n•Deployed using a Linode server",
  image: websiteImage,
  source: "https://github.com/alexandercaley/portfolioSite",
});
projectData.set("surgeDate", {
  name: "SurgeDate Server",
  category: "Backend Server",
  year: "2020 (in progress)",
  description:
    "•Dating application that matches users based on their shared information\n•Node Servers for all backend tasks and microservices\n•Typescript\n•Redis\n•JWT token\n•MongoDB\n•API Validation\n•Mocha testing\n•Test driven development",
  image: surgedateImage,
});
projectData.set("redditLite", {
  name: "Reddit Lite",
  year: "2019",
  category: "Full Stack Web App",
  description:
    "•Lite version of Reddit for desktop and mobile devices\n•Node Backend\n•MongoDB for tables\n•React Frontend\n•Lite version of reddit\n•Implemented all features with micro services\n•Websocket Server\n•Used Redis for caching\n•Used Kafka for conveyer\n•Hosted from docker container\n•5 Person Project",
  image: redditImage,
  source: "https://github.com/sfsu-csc667-fall19/final-project-redditlite",
});
projectData.set("greenWorld", {
  name: "GreenWorld",
  year: "2019",
  category: "Full Stack Web App",
  description:
    "•Environmental social media site to create posts and attach them to a location\n•Involved with a team of 7 people\n•Lead the backend team\n•MySQL Database\n•Created API’s for frontend to access data from AWS server\n•Node Backend\n•React Frontend",
  image: greenworldImage,
  source: "https://github.com/alexandercaley/greenworld",
});
projectData.set("clippersApp", {
  name: "Clippers",
  year: "2019",
  category: "iOS Swift App",
  description:
    "•Swift application for finding local barbers\n•Client side frontend app\n•Firebase for backend and tables",
  image: clippersImage,
  source: "https://github.com/alexandercaley/clippers_for_ios",
});
projectData.set("linuxShell", {
  name: "Linux Shell",
  year: "2019",
  category: "C Program",
  description:
    "•Linux shell written in C\n•Capable of running all built in programs\n•Understands arguments\n•Full shell",
  image: shellImage,
  source: "https://github.com/alexandercaley/linuxshell",
});
projectData.set("tankGame", {
  name: "Tank Game",
  year: "2018",
  category: "Java Application",
  description: "•Split screen 2 player game\n•Written in Java",
  image: tankImage,
  source: "https://github.com/alexandercaley/tankgame",
  download:
    "https://drive.google.com/file/d/1q45EkVuP6U6B3gBEb5oF5EOn01K99Rvs/view?usp=sharing",
});

export default projectData;
