# Box Sizing Property

- Defines how the height and width of a box are calculated

## Content Box

- The default width and height apply only to the element's content, excluding Padding and Border because the will be added outside of the content box.

## Padding Box

- You add the dimensions to both element's content and padding, excluding Border because it will be added outside of the content and padding boxes.

## Border Box

- The box-sizing property allows us to include the padding and border in an element's total width and height.
- In other words, padding and border are adding to the inside of the total width,
  `Total = content + padding + border`
  instead of
  `Total = content -> Total += padding + border`
- For example, if you set box-sizing: border-box; on an element, padding and border are included in the width and height: Both divs are the same size now!
