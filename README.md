# node-geocode

Forward geocode of a address using mapbox API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
nodejs
API Key of Mapbox
```

### Installing

A step by step series of examples that tell you how to get a development env running


Clone the repository to ```node-geocode``` directory
```
cd node-geocode
npm install
```

### Post Installation

Create .env file at the root of folder.
Add below lines.
```
#.env
NODE_ENV=development
PORT=3000 ...or any other port
MAPBOX_KEY=<API_KEY>
```
```npm run dev``` to run developlement

## Deployment
Deployment steps to deploy on heroku.

* Create [Heroku account](https://id.heroku.com/login)
* Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

To Verify
```
heroku --version
```

Add ssh key
```
ssh-keygen -t rsa -b 4096 -C "<your email id>"
ssh-add ~/.ssh/id_rsa
```

Create heroku application
```
heruko create <app-name>
heruko config:set MAPBOX_KEY=<Mapbox api key>
```

Add files to git

Add files to heroku
```
git push heroku master
```

## Author
* **Samarth Sangam**

## Acknowlegdement

* Andrew Mead
