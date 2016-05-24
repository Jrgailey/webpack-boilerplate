# webpack-boilerplate
This is a boilerplate for a webpack-enabled application. The intention behind this is to setup a working webpack environment for development allowing for the use of **ES6** via Babel and styling with **LESS**. It is _not_ meant to be used as a template of scaffolding as all of the files (besides the img dir) are in the root folder.

### Getting Started
Starting the app will launch a [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) instance, which has been setup with **hot loading** to automatically refresh your browser / process code (less/js) anytime a file is changed.

1. Install dependencies ``` npm install```

2. Start the application ``` npm start ```

    > this has been configured in  **package.json**

        scripts : {
            "start": "webpack-dev-server"
        }

3. Navigate to ```localhost:8080```
    > this option can be changed in **webpack.config.js**

         devServer: {
            port: 8008
        }

### Distributing your application
Webpack takes care of minification/uglify.
To get your code ready for production, simply run this command: ``` webpack -p ```

### Webpack Loaders
This project contains the following webpack loaders:
##### development loaders
* [jshint-loader](https://github.com/webpack/jshint-loader)
* [babel-loader](https://github.com/babel/babel-loader)

##### styling loaders
* [style-loader](https://github.com/webpack/style-loader)
* [css-loader](https://github.com/webpack/css-loader)
* [less-loader](https://github.com/webpack/less-loader)

##### image loaders
* [file-loader](https://github.com/webpack/file-loader)
* [image-loader](https://github.com/tcoopman/image-webpack-loader)
