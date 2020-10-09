module.exports = {
  apps: [
    {
      name: "reactServer",
      script: "./reactServer.js",
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
