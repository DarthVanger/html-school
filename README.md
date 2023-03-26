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

## Frontend
Fronted is divided into components, like React.

Each component is a function, which returns HTML element.

Each component has its own file, also usually a folder.

* `/src/app.css` - contains `@import` for css files of all pages/components.
* `/index.js` - appends `App()` component into `document.body`.
* `/src/App.js` - the root `App()` component. It is responsible for showing pages, based on `/#/page` URLs.
* `/src/Router.js` - contains mapping from URLs to components: URL <-> component.
* `/src/HomePage/` - home page component folder.
* `/src/HomePage/HomePage.js` - home page component js code.
* `/src/HomePage/HomePage.css` - home page component css.
* `/src/Navbar/` - Navigation bar (menu) component: links to all pages at the top of website.
* `/src/Vangers/` - Vangers component folder. Contains multiple components for the Vangers game.
