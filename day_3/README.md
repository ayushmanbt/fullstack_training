# Day 3 full stack development training 

- We learnt about CSS Media Queries and why we use them
- We use CSS media queries using `media (max-width: 100px)` This can be used to declare size specific styles
using min-width, max-width, width, height, orientation, prefers-color-scheme (for light and dark mode)
- We learnt about a few basic properties for the elements like -
    - We can use the background property to add background to an elemnt. These backgrounds can be added using 
        - pre defined colors like 'red', 'blue', 'green', 'aliceblue', 'orange', 'beige' etc.
        - using hex_code which uses a 6 digit hexadecimal code with 1st 2 digits denoting red, next 2 denoting green and the last two denoting blue. #000000 is black and #ffffff is white.
        - using color defining functions like rgb(), rgba(), hsl() and other colors
        - using linear gradiant by using `linear-gradient: (start_color, end_color)` or `linear-gradient: (direction, start_color, end_color)` or `linear-gradient: (start_color %cover, end_color %cover)`
        - radial gradiant can also be used (read more on your own)
        - p.s. be careful while using grids
    - We can manipulate a few things about any text using -
        - `color` can be used to change the color of a text
        - `font-size` can be used to change font size
        - `font-weight` change the font weight of the text
        - `text-align` align text to `start`, `end`, `center` and `justified`
        - `vertical-align` vertically aligns the text
        - `text-decoration` can be used to change the decoration of the text
- We learnt about CSS grids like -
    - use `display: grid` in the parent element to declare a grid based structure
    - use `grid-template-rows:` and `grid-template-columns` to declare the row and column based layout using `fr` (fraction) units
    - use `gap` or `grid-gap` to create gap between grid elements
    - use `grid-column-start` and `grid-column-end` to define the starting and ending column line for a grid or declare them together using `grid-column` and declare the `column_start/column_end` together. We can use this same notation for rows as well
- We built a basic grid layout with HTML and CSS (code in this folder)

## Challenge

Try to implement this layout with HTML and CSS https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV

## Note at end

We are going to learn about javascript and interactivity next week.