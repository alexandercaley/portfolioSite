module.exports = {
  apps: [
    {
      name: "contactServer",
      script: "./api/contactServer.js",
      watch: true,
      ignore_watch: ["node_modules"],
    },
  ],
};
