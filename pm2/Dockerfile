FROM node:16.19.0-alpine

RUN mkdir /app
WORKDIR ./app

COPY * ./

RUN npm install -g pm2 

RUN npm install


# 0.1. Run your app as usual
CMD ["node", "src/app.js"]

# 0.2. When you start with following command, it works, but pm2 is finished as the process 
# and the container is shut down # https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/
# CMD ["pm2", "start", "src/app.js"]

# 1. Just start the app directly
# CMD ["pm2-runtime", "src/app.js"]

# 2. Run your app using ecosystem.config.js. Notice, that port number is 8081
# and worker is infinitely restarted, because pm2 tries to keep it running
# CMD ["pm2-runtime", "ecosystem.config.js"]

# 3. Run your app with production environment. Notice, that port number is 8082.
# pm2 gets env_production object
# CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]

# 4. Run your app in cluster mode. There will be multiple instances of the app
# CMD ["pm2-runtime", "multitasking.config.js"]

# docker build -t app .
# docker run -p 8080:8080 -d app
# docker exec -it *docker-container* sh
