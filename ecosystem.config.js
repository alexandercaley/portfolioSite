module.exports = {
  apps: [
    {
      name: "react-app",
      script: "npx",
      args: "serve -p 80 build",
      watch: true,

      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "contactServer",
      script: "./api/contactServer.js",
      watch: true,
      ignore_watch: ["node_modules"],
    },
  ],

  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
