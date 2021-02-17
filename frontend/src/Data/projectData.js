import tankImage from "../assets/projectImages/tankImage.png";
import redditImage from "../assets/projectImages/redditImage.png";
import shellImage from "../assets/projectImages/shellImage.png";
import clippersImage from "../assets/projectImages/clippersImage.png";
import greenworldImage from "../assets/projectImages/greenworldImage.png";
import surgedateImage from "../assets/projectImages/surgedateImage.png";
import websiteImage from "../assets/logo/logo_black.png";

import tankThumbnail from "../assets/projectThumbnails/tankThumbnail.png";
import redditThumbnail from "../assets/projectThumbnails/redditThumbnail.png";
import shellThumbnail from "../assets/projectThumbnails/shellThumbnail.png";
import clippersThumbnail from "../assets/projectThumbnails/clippersThumbnail.png";
import greenworldThumbnail from "../assets/projectThumbnails/greenworldThumbnail.png";
import surgedateThumbnail from "../assets/projectThumbnails/surgedateThumbnail.png";
import websiteThumbnail from "../assets/projectThumbnails/logo_blackThumbnail.png";

let projectData = new Map();
projectData.set("website", {
  name: "Portfolio Website",
  category: "Web Application",
  year: "2020",
  description: [
    "This Portfolio website, alexandercaley.com",
    "Built with React.js",
    "Node server for contact with express",
    "Uses Twillio sendgrid api",
    "Used Bootstrap with React for styling",
    "Running in Docker Containers",
    "Deployed on a Ubuntu Server",
    "Uses Google analytics",
  ],
  image: websiteImage,
  thumbnail: websiteThumbnail,
  source: "https://github.com/alexandercaley/portfolioSite",
});
projectData.set("surgeDate", {
  name: "SurgeDate Server",
  category: "Backend Server",
  year: "2020 (in progress)",
  description: [
    "Dating application that matches users based on their shared information",
    "Node Servers for all backend tasks and microservices",
    "Uses Twillio api",
    "Typescript",
    "Redis",
    "JWT token",
    "MongoDB",
    "API Validation",
    "Mocha testing",
    "Test driven development",
  ],
  image: surgedateImage,
  thumbnail: surgedateThumbnail,
});
projectData.set("redditLite", {
  name: "Reddit Lite",
  year: "2019",
  category: "Full Stack Web App",
  description: [
    "Lite version of Reddit for desktop and mobile devices",
    "Node Backend",
    "MongoDB for tables",
    "React Frontend",
    "Lite version of reddit",
    "Implemented all features with micro services",
    "Websocket Server",
    "Used Redis for caching",
    "Used Kafka for conveyer",
    "Hosted from docker container",
    "5 Person Project",
  ],
  image: redditImage,
  thumbnail: redditThumbnail,
  source: "https://github.com/sfsu-csc667-fall19/final-project-redditlite",
});
projectData.set("greenWorld", {
  name: "GreenWorld",
  year: "2019",
  category: "Full Stack Web App",
  description: [
    "Environmental social media site to create posts and attach them to a location",
    "Involved with a team of 7 people",
    "Lead the backend team",
    "MySQL Database",
    "Uses Google maps api",
    "Created API’s for frontend to access data from AWS server",
    "Node Backend",
    "React Frontend",
  ],
  image: greenworldImage,
  thumbnail: greenworldThumbnail,
  source: "https://github.com/alexandercaley/greenworld",
});
projectData.set("clippersApp", {
  name: "Clippers",
  year: "2019",
  category: "iOS Swift App",
  description: [
    "Swift application for finding local barbers",
    "Client side frontend app",
    "Firebase for backend and tables",
  ],
  image: clippersImage,
  thumbnail: clippersThumbnail,
  source: "https://github.com/alexandercaley/clippers_for_ios",
});
projectData.set("linuxShell", {
  name: "Linux Shell",
  year: "2019",
  category: "C Program",
  description: [
    "Linux shell written in C",
    "Capable of running all built in programs",
    "Understands arguments",
    "Full shell",
  ],
  image: shellImage,
  thumbnail: shellThumbnail,
  source: "https://github.com/alexandercaley/linuxshell",
});
projectData.set("tankGame", {
  name: "Tank Game",
  year: "2018",
  category: "Java Application",
  description: [
    "Split screen 2 player game",
    "Implemented collision",
    "Implemented Map Parser",
    "Power ups for higher power output",
    "Player to get 0 lives first loses",
    "Written in Java",
  ],
  image: tankImage,
  thumbnail: tankThumbnail,
  source: "https://github.com/alexandercaley/tankgame",
  download:
    "https://drive.google.com/file/d/1q45EkVuP6U6B3gBEb5oF5EOn01K99Rvs/view?usp=sharing",
});

export default projectData;
