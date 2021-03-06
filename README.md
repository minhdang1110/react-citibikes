## Problem and Solution
1. Problem: 
* The need for biking to slowly enjoy the cities are increasing 
* Bikes station are scattered everywhere, and tourists need to know the closest one to be there as soon as possible
2. Solution:
* Show the nearest city bike station when the user inputs the address/zip code/ coordinates and also return the station information
3. Target end user:
* Tourists and residents of the cities who are fond of biking

## API
* https://github.com/eskerda/pybikes
* http://api.citybik.es/v2/?fbclid=IwAR2TpUUAClRbMLAOWrN-AZFrA6fruZ7onCNNOOZdvBMFhK4APzWmvc2X18Y
* http://api.citybik.es/v2/networks

## Tentative Technology:
Calculate distance based on the coordinates
Return the closest available bikes and docks
Having multiple filters (name, system, company, etc.)

## Wireframe
![Wireframe](wireframe.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Minimum Project Requirements
* `DONE` Project must be approved by Instructor approval at the start of project week
* `DONE` Project code is pushed to a public Git repository
* `DONE` The code should be written in ES6 as much as possible
* `DONE` Use the create-react-app generator to start your project.
* There should be 2 container components (stateful)
* There should be 5 presentational components (stateless)
* There should be 3 or more routes
* The application must make use of react-router
* Make use of async actions to send data to and receive data from a server
* Your client-side application should handle the display of data with minimal data manipulation
* Uses CSS or styled components to style application
* Frontend uses Axios requests 
* App renders in browser
* On project submission console.log() statements must be commented 
* Be written with kebab-case CSS class names (e.g. this-is-the-class-name)
* Be written with semantic, camelCase JavaScript variable names
* Pseudocode/comments that describe functionality should be throughout each component 
* `DONE` Has readme.md file at the root of repository
* `DONE` readme file clearly documents the purpose of the project as a problem statement
* `DONE` readme file clearly documents the target end user for this program.
* `DONE` Using a 3rd party api
* A minimum of 90 GitHub commits 

# Exceeding Project Requirements
* Incorporating a new technology not taught in the program
* Your app should have one HTML page to render your react-redux application
* Use Redux middleware to respond to and modify state change
* Project is deployed using using firebase
* Uses React, AND Redux
* readme file has embedded link (not url) to publicly deployed app