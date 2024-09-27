# Day 9 - Express Application

This is the express base application we created this week

- We added a `.gitignore` file to ignore the `node_modules folder` reference the following image for the reason 

![Node Modules](https://fettblog.eu/wp-content/uploads/2020/node-modules-meme.png)

- We started with initating a node project using `npm init`
- After that we installed our main dependecy `express` using `npm install express` and a dev dependecy `nodemon` using `npm install -D nodemon`. p.s. read about nodemon https://nodemon.io/
- After that we added our two scripts in `package.json` file in the "scripts" key, one for "dev" as `"dev": "nodemon index.js"` and "start" as `"start": "node index.js"`
- We create the index.js file to create a express server with these three lines
```js
const express = require("express");
const app = express();
app.listen(PORT, () => {
    console.log(`The server is listening to port ${PORT}`)
})
```
- We can add all the possible requests using the app object. See all the request types in `../README.md`
- The callback function has the request and response object which we interact with to get request body and send responses back.
- For you to test this application you need to run `npm install` followed by `npm run dev`


## Important links

Express JS Documentations - https://expressjs.com/en/api.html