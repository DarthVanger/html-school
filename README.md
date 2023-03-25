# Napaleon HTML Shool

## Run Locally
You should have NodeJS installed in your OS.

In Terminal run 
```
npm install
```

It installs dependencies for server.

Configure environment variables to tell server to use `http`
```
export http=true
```

Start the server
```
npm start
```

Open [http://localhost:8080/](http://localhost:8080/) - you should see the school website

## Directory Structure
* `/assets/` - folder for fonts
* `/img/` - folder for all images
* `/lib/` - libraries, for now only Prism for code highlighting
* `/manifest.webmanifest` - config for app icon when installed on Android or any other OS
* `nodemon.json` - config for running nodejs server, refreshing it automatically when files change
* `deploy/` - bash scripts for deploying a new version of the website
* `service-worker.js` - Service Worker for when app is installed on Android or any other OS
* `src/` - Frontend Source Code: js and css files
* `server/` - Server Source Code (NodeJS)
