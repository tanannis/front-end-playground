# Grid rows and columns

## grid-area
Short hand for combinding all to fill the grid
- `grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end`

### Combine to fill the whole grid
- grid-column: 1 / span 4
- grid-row: 1 / span 4
...


## grid-column
Short hand for `grid-column-start` and `grid-column-end`
- `grid-column: start / end  ->  grid-column: 1 / 3`

### grid-column-start
Represents which vertical line your item should start from left (positive interger from 1 to ...), or from right (negative integer)
- `grid-column-start: 1`

### grid-column-end
Represents which vertical line your item should end from left (positive interger from 1
to ...), or from right (negative integer)
- grid-column-end: 5


## grid-row
Short hand for `grid-row-start` and `grid-row-end`
- grid-row: start / end
- grid-row: start / span 3
...

### grid-row-start
Represents which horizontal line your item should start from top (positive interger from 1 
to ...), or from bottom (negative integer)
- grid-row-start: 1


### grid-row-end
Represents which horizontal line your item should end from top (positive interger from 1 
to ...), or from bottom (negative integer)
- grid-row-end: -1


### span
Indicates how many columns the element should occupy, e.g. starting at line 2, fill 2 columns
- grid-column: 2 / span 2


### order
By default, all grid items have an order of 0, but this can be set to any positive or negative value, similar to z-index. A negative integer indicates an item is BEFORE another that has a positive integer
- order: 2
