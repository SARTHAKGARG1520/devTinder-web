# Deployment
- Signup on AWS.
- Create ec2 instance.
- Setup key pair
- Launch Instance
- Open git bash, locate to the folder where secret.pem is present and run the commands - 
    - chmod 400 "devTinder-secret.pem"
    - ssh -i "devTinder-secret.pem" ubuntu@ec2-16-171-241-34.eu-north-1.compute.amazonaws.com
- Install node version same as the local version using the curl commands
- Clone the projects using-
    - git clone https://github.com/SARTHAKGARG1520/devTinder-web.git

- Frontend 
    - npm install
    - npm run build
    - sudo apt update
    - sudo apt install nginc
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist folder to - /var/www/html/
        - sudo scp -r dist/* /var/www/html/
    - Enable port 80 on your instance
        - Instance => Security => Security Group => Edit inbound rules => add port 80 and save

- Backend
    - npm install
    - npm install pm2 -g
    - pm2 start npm --name "devTinder-backend" -- start
    - pm2 logs
    - pm2 list, pm2 flush <name> , pm2 stop <name>, pm2 delete <name>
    - config nginx - /etc/nginx/sites-available/default
    - restart nginx - sudo systemctl restart nginx
    - Modify the BASEURL in frontend project to "/api" 

# Ngxinx config: 
   Frontend = http://16.171.241.34/
   Backend = http://16.171.241.34:3000/

    Domain name = devtinder.com => 16.171.241.34

    Frontend = devtinder.com
    Backend = devtinder.com:3000 => devtinder.com/api

    nginx config : 

    server_name 16.171.241.34;

    location /api/ {
        proxy_pass http://localhost:3000/;  # Pass the request to the Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

