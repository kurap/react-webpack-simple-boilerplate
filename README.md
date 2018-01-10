# react-webpack-simple-boilerplate

React, ReactRouter, Webpack Simple structure

## Start development React web app quickly

* bundle uses webpack
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

  # start webpack-dev-server HMR
  npm start

  # bundle development app
  npm run build

  # bundle production app
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
  |-- /components // Presentation Components
    |-- /about    // Sample
      |-- index.js
      |-- style.scss
    |-- /top      // Sample
      |-- index.js
      |-- style.scss
  |-- /containers // Container Components
  |-- /styles     // global style include bootstrap
  |-- index.html  // template
  |-- index.js    // entry point
|-- .babelrc
|-- .editorconfig
|-- .eslintrc
|-- .package.json
|-- webpack.confi.js
```
