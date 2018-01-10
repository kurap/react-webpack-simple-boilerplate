# react-webpack-simple-boilerplate

React, ReactRouter, Webpack Simple structure

## Development React web app kickstart

* bundle uses webpack v3
* transpile es6 uses babel
* linter uses eslint
* use HMR for development (js, css)

React v16, ReactRouter v4, Webpack v3, Babel, Eslint

see the package.json for details of install module

```
  # download
  git clone https://github.com/kurap/react-webpack-simple-boilerplate.git

  # module
  npm install
  or
  yarn install

  # start webpack-dev-server with js, css Hot Module Replacement
  npm start

  # bundle app for development
  npm run build

  # bundle app for production
  npm run build:production
```

# File structure

```
.
|-- /config
  |-- webpack.base.js
  |-- webpack.development.js
  |-- webpack.production.js
|-- /public
  |-- /dist
|-- /src
  |-- /components // Components
    |-- /about    // Sample
      |-- index.js
      |-- style.scss
    |-- /top      // Sample
      |-- index.js
      |-- style.scss
  |-- /styles     // global style include bootstrap
  |-- index.html  // template
  |-- index.js    // entry point
|-- .babelrc
|-- .editorconfig
|-- .eslintrc
|-- .package.json
|-- webpack.confi.js
```
