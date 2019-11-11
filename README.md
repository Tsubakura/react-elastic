This project is made purely to test the interactions between a React website and an ElasticSearch database. Keep in mind that this documentation assumes you're running either Linux Ubuntu or Debian. If you're using something else, tough luck.

## React

### Requirement
* NodeJS

### Instructions
Navigate to the main folder of this project and enter the following commands:
```
sudo npm install
npm start
```

## ElasticSearch & Kibana

### Requirement
* docker-compose

### Instructions
Navigate to the docker folder and run the following command:
```
sudo docker-compose up -d
```
**WARNING**: Make sure that the elasticsearch.yml and docker-compose.yml files are both in the same folder when executing the above command!

## FAQ
### ERROR: Version in "./docker-compose.yml" is unsupported.
Remove the current docker-compose and install the latest version using the following commands:
```
sudo apt remove docker-compose -y
sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
