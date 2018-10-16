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

- [Clone](git@github.com:decarialeonardo/Brastlewark.git) `git clone git@github.com:decarialeonardo/Brastlewark.git` this repository and build on what is included in the root directory.

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


### Tests:
- Run tests (NodeJs and AngularJs)

    `npm test`


## Tools

### Frameworks
- Typescript
- Angular 1.4.8
- Node 10
- [Slate Theme Bootstrap](https://bootswatch.com/slate/)

### Angularjs-slider (http://angular-slider.github.io/angularjs-slider/)
- Slider for range filters

### Jade
- Tempalate Engine

### Sass
- Styling

### Gulp
- Task manager


### Tests
- `Karma with mocha` - Test Runner Front End
- `Jest` - Test Tool Node