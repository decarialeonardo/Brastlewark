# Brastlewark - Front Web App

## Overview

Node.js Packages app using [Express 4](http://expressjs.com/) to server the [JSON](https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json) like an API. The client consume this API and show the population of Brastlewark Town with AngularJs[1.4.8](https://angularjs.org/).

## Quickstart

### Requirements 
Make sure you have 
- [Git](https://git-scm.com/)
- [Node.js](http://nodejs.org/) >= 10.x.x
- [Typings](https://www.npmjs.com/package/typings)
     - `npm install --global typings`

- [Clone](git@github.com:decarialeonardo/Brastlewark.git)`git clonegit@github.com:decarialeonardo/Brastlewark.git` this repository and build on what is included in the root directory.

### The basic starting point:

- Open a console and cd into your project folder and type:

	- `npm install`
	- `typings install`

- and then you can run the project by typing:

    `npm run dev`

- this will automatically reload the server on changes!

Your app should now be running on [localhost:5000](http://localhost.com:5000/brastlewark/results).


### Api:
- Return a JSON list of gnomes.  (http://localhost.com:5000/brastlewark/api).


### Api:
- Run tests (NodeJs and AngularJs)
    - `npm test`


## TypeScript Code

The TypeScript code is located in the `client` folder and is automatically transpiler to ES5 into `public` folder.

## Frameworks & Libraries

### Frameworks
- Angular 1.4.8
- Bootstrap - Theme Superhero

### angular-ui-router
- It is used to manage routes

### watch-http-server
- It is used to server up

### bower
- It is used to UI components installer

### typings
- It is used to TS code transpiler to ES5
