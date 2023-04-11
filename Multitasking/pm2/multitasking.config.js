// https://pm2.keymetrics.io/docs/usage/quick-start/
// https://pm2.io/docs/runtime/guide/installation/

// config.js
module.exports = {
  apps: [
    {
      name: "app",
      script: "app.js",
      instances: 'max',
      exec_mode: "cluster",
      increment_var: 'COUNTER',
      // increment_var: 'PORT',
      env: {
        NODE_ENV: "development",
        PORT: 8080,
        COUNTER: 0
      }
    }
  ]
}
