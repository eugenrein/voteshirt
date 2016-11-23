# Voteshirt

Voteshirt is an expample app that receives designs from Spread Shirts API so you can like and dislike those.
It is based on [React Slingshot](https://github.com/coryhouse/react-slingshot) starter kit with some minor changes in directory structure.
Find a working demo on [Heroku](http://voteshirt.herokuapp.com).

## Get Started
1. **Initial Machine Setup**. First time running? Then complete the [Initial Machine Setup](https://github.com/coryhouse/react-slingshot#initial-machine-setup).
2. **Clone the project**. `git clone https://github.com/eugenrein/voteshirt.git`.
3. **Run the app in dev mode**. `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. 
Note: The optional -s flag enables silent mode which suppresses unnecessary messages during the build.
5. **Run tests**. `npm run test` Runs tests using Mocha and outputs results to the command line
5. **Build the app**. `npm run build` Bundles all JavaScript using webpack and writes it to /dist
4. **Having issues?** See [Having Issues?](https://github.com/eugenrein/voteshirt#having-issues-try-these-things-first).

## Directory Structure
```
.
├── .babelrc                  # Configures Babel
├── .editorconfig             # Configures editor rules
├── .eslintrc                 # Configures ESLint
├── .gitignore                # Tells git which files to ignore
├── .istanbul.yml             # Configure istanbul code coverage
├── .npmrc                    # Configures npm to save exact by default
├── README.md                 # This file.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── actions               # Flux/Redux actions. List of distinct actions that can occur in the app.
|   |── assets                # Images and stylesheets
|   |   |── images            # Images used in app
|   |   └── stylesheets       # Stylesheets (.scss files)
│   ├── components            # React components
│   ├── constants             # Application constants including constants for Redux
│   ├── containers            # Top-level React components that interact with Redux
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.ejs             # Template for homepage
│   ├── index.js              # Entry point for your app
│   ├── reducers              # Redux reducers. Your state is altered here based on actions
│   ├── store                 # Redux store configuration
│   ├── styles                # CSS Styles, typically written in Sass
│   └── utils                 # Plain old JS objects (POJOs). Pure logic. No framework specific code here.
├── tests                     # Test code
│   ├── actions               # Tests of Flux/Redux actions
│   ├── components            # Test of React components
│   ├── constants             # Test constants including constants for Redux
│   ├── containers            # Tests of Top-level React components that interact with Redux
│   ├── reducers              # Tests of Redux reducers
│   ├── store                 # Test of the Redux store configuration
│   └── utils                 # Helpers used in tests
├── tools                     # Node scripts that run build related tools
│   ├── setup                 # Scripts for setting up a new project using React Slingshot
│   │   ├── setup.js          # Configure project set up
│   │   ├── setupMessage.js   # Display message when beginning set up
│   │   └── setupPrompts.js   # Configure prompts for set up
│   ├── build.js              # Runs the production build
│   ├── chalkConfig.js        # Centralized configuration for chalk (adds color to console statements)
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── nodeVersionCheck.js   # Confirm supported Node version is installed
│   ├── removeDemo.js         # Remove demo app
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
│   ├── startMessage.js       # Display message when development build starts
│   ├── testSetup.js          # Configures mocha
│   └── analyzeBundle.js      # Analyzes the webpack bundle
├── webpack.config.dev.js     # Configures webpack for development builds
└── webpack.config.prod.js    # Configures webpack for production builds
```

## Questions?
Check out the [FAQ](/docs/FAQ.md)
