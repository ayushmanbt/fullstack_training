# All about Javascript - Day 4

In today's lesson we learnt about some useful javascript functions and utilities. 

- We learnt two ways to link JS to HTML
    - one using `<script>` tag and writing the screipt inside
    - other usinig `<script src="">` to source the JS from a different file
    - an HTML can have linked to many JS files. 
- We learnt about `console.log()` to log messages into console. We learnt a few varients of it like `console.debug()`, `console.info()`, `console.warn()` and `console.error()`
- We use `let` to declare variable and `const` to declare constants
    - We do not use `var` because of the complications it brings
    - The data types in JS are number, string, function, object, undefined
    - undefined and null are different
    - you can use `typeof` to check the type of a variable
- We learnt about the document object model (DOM)
    - We learnt about `getElementById()` 
    - We learnt about `getElementsByClassName()`
- We learnt two methods to handle button clicks in JS 
    - adding `onclick` attribute to the element
    - getting the element in JS (using `getElement..`) and add a `addEventListener()` with the event (i.e. `click`) and the function
- There are two ways to declare a function in JS -
    - normal way  `function a(){}`
    - arrow function `() => {}` these are also known as anonymous functions
- There are 3 different ways to do a for loop in JS
    - `array.forEach(e => {})` this goes through each element in the array and applies the function defined/passed inside
    - `for(let element of list)` this is an upgraded version of the classic for loop assigning each element of a list before proceeding in the loop
    - `for(i = 0; i< n ; i++)` the classic for loop
- We can use the `fetch().then().then()` to access API data
- We can define asynchronous functions using `async` to asyncronosly execute each step and `await` for the steps which take time
- We can declare JS object without a class by just using `{}`
    - We can destructure properties from JS objects if the variable name to store the property in and the property name are the same
    `let a = {p1: v1, p2: v2}; let {p1,p2} = a`
- We saw some weird facts about JS
    - typeof NaN (not a number) is number
    - 0.1 + 0.2 is 0.3000000000000004
    - 2 + "1" is 21 but 2 - "1" is 1
