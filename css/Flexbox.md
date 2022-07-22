# CSS

## Flex Box

### flex-direction
default is "row"
- row
- row-reverse
- column
- column-reverse

### flex-wrap
Specifies whether flex items are forced on a single line or can be wrapped on multiple lines.
- nonwrap (default, forced on a single line)
- wrap
- wrap-reverse

### justify-content: 
It goes column to column: 
- flex-start -> goes to far left
- flex-end -> goes to far right
- center,
- space-between -> for columns that have even space in between
- space-around -> for columns that have a lot of space around
- space-evenly

### align-items:
It goes row to row:
- flex-start -> goes to far top
- flex-end -> goes to far bottom
- center,
- baseline,
- stretch -> will stretch across the whole row

### align-self:
It goes row to row, same as `align-items`
- but aligning for 1 item only.


### order:
Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the order property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).

  .red {
    order: -2
  }

  .yellow {
     order: 2
  }

- red will be infront of yellow from left to right