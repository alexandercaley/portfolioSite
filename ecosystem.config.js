module.exports = {
  apps: [
    {
      name: "buildServer",
      script: "./buildServer.js",
      watch: true,
      ignore_watch: ["node_modules"],
    },
    {
      name: "contactServer",
      script: "./api/contactServer.js",
      watch: true,
      ignore_watch: ["node_modules"],
    },
  ],
};
