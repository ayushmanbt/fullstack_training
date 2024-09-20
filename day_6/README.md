# Day 6 - Introduction to React

On day 6 we started learning the basics of react.js

- You need to install node.js - https://nodejs.org/en
- You can use this tool called vite to start a react project - `npm create vite@lates`. Read more about vite - https://vitejs.dev/
- The entry point to react is the `index.html` file on the root of the project in this arrangement
- The `<div id="root"></div>` is where all the react code is inserted.
- These modern framworks like react.js, vue.js etc. use the concept of virtual DOM to update the pages
- The extension we use for React files is `.jsx`
- Each file/component export a function returning HTML written in JS (jsx)
- Linking CSS files is as easy as importing the CSS file like `import "style.css"`
- We can use the `useState` react hook to create a component (file level) state.
- `useState` gives us a getter (a read access to the state managed variable) and a setter (which we pass a callback function to save the new value according to the new value)
- We can pass variables and functions as props to the child components.