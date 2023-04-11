// https://pm2.keymetrics.io/docs/usage/quick-start/
// https://pm2.io/docs/runtime/guide/installation/

// config.js
module.exports = {
  apps: [
    {
      name: "app",
      script: "app.js",
      env: {
        NODE_ENV: "development",
        PORT: 8081
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 8082
      }
    },
    {
      name: 'worker',
      script: 'worker.js'
    }
  ]
} 