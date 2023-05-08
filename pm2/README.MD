Start on port 8081
pm2 start


Start on port 8082 in production environment
pm2 start --env production


To stop all the processes:
pm2 stop all

Start cluster mode:
pm2 start multitasking.config.js