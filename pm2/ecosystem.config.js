// https://pm2.keymetrics.io/docs/usage/quick-start/
// https://pm2.io/docs/runtime/guide/installation/

// config.js
module.exports = {
  apps: [
    {
      name: "app",
      script: "./src/app.js",
      env: {
        COUNTER: 0,
        NODE_ENV: "development",
        PORT: 8081
      },
      env_production: {
        COUNTER: 10,
        NODE_ENV: "production",
        PORT: 8082
      }
    },
    {
      name: 'worker',
      script: './src/worker.js'
    }
  ]
}