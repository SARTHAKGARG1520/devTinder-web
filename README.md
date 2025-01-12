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

