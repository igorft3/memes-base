Create project

запуск nginx и бэкенда
```
sudo systemctl start nginx

pm2 start server.js --name "backend-api"
pm2 save
```

остановка nginx и бэкенда
```
sudo systemctl stop nginx

pm2 stop all
```
