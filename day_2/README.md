# Day 2 - Full stack development training

- we implemented a design from frontendmentro.io https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS
- We learnt about the everything selector in CSS - `*`
- I explained my default css settings -
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- We learnt about different measurements in CSS -
    - `px` Stands for PiXels
    - `vh` and `vw` - Viewport Height and Width
    - `dvh` and `dvw` - Dynamic viewport height and width
    - `rem` - relative to the root font size 
    - `em` - relative to parent font size
    - `%` - relative to parent size

- Every element in HTML has a width and a height, border-box just accounts for the padding, border and margin in that width and height

- `.class_name` is used to target a class in CSS.
- `background` is used to provide background image or color to any element

- Different ways of declaring margin and padding
    - `padding: 10px` padding in all directions
    - `padding: 5px 10px` padding in y axis x axis
    - `padding: 2px 4px 8px 3px` padding top, padding right, padding bottom, padding left
This notation is applicable for margins as wekk

- `box-shadow: shadow_color right_shift bottom_shift bloom_radius` is used for applying shadows to an element

> Did you know? you can use `inset` as a property of box shadow to give inner shadow to a box. This is used for [glassmorphic design](https://superdevresources.com/glassmorphism-ui-inspiration/)

- We can add transitions to elements using 
`transition: property duration time_function`. Time functions can be defined using bezie curve or use the built-in ease, ease-in-out, ease-in or ease-out

- We learnt about different display properties like - 
    - `display: block` This is the default display property of most of the elemnts
    - `display: inline-block` This is the default display property of most of the form elements.
    - `display: flex`
    - `display: grid`
    - `display: none`

- There are a few ways of adjusting flexbox -
    - `flex-direction` changes the flex direction to `row`, `row-reverse`, `column` and `column-reverse`
    - `flex-wrap` can be used to set up the wrapping of the flex to be `wrap` or `no-wrap`
    - `justify-content` can be used to justify the content to start, end, space-between, center, space-evenly
    - `align-items` will align each item in the flex according to the primary axis
    - `gap` creates a gap between elements of flexbox.

## Resources

https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing