# Day 5 - Todo list applications

Today we compiled our HTML, CSS and JS knowledge to make a todo list application.
In this application we can add todos, mark them as done and remove them.

- We learnt about the attribute based CSS selectors - `tag[attribute_name=attribute_value]{}`
- We learnt about parallel selector aka same level selection using `+` e.g. `tag1 + tag2` (applys style to tag2 in presence of a parallel tag1)
- We can access special condition/states of HTML using `:hover`, `:checked` etc.
- We can apply transitions to transition from main state to those special states all we have to do is mention the property to transition, transition time and transition curve `transition: background-color 0.3s ease-in-out`
- We revisited the concept of higher order function like
    - `array.map((element) => return <new calculated element>)` map can be used to generate a new array from the old array
    - `array.reduce((accumulator, current_element) => return <new calculated accumulator>, initial_valur_for_accumulator)`- accumulates and gives a single value from the given list
    - `array.forEach()` This does not explicitly produce a new output but it lets us to loop through each element of an array
- By definition higer order functions are functions which take another function as input and calls back that function passed as a parameter. 
- Challenge for you will be to implement `localstorage` on this project to store the todo data.
