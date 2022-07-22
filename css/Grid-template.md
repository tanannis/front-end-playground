# Grid Templates
Specifies the size of grid cells based on the rules we define


### grid-template
This was done with the rules `grid-template-columns: 20% 20% 20% 20% 20%;` and 
`grid-template-rows: 20% 20% 20% 20% 20%;` Each rule has five values which create five columns, each set to 20% of the overall width of the garden.
- Short hand that combines `grid-template-rows` and `grid-template-columns`
- For example, `grid-template: 50% 50% / 200px;` will create a grid with two rows that are 50% each, and one column that is 200 pixels wide.


### grid-template-columns
- Short hand `grid-template-columns: repeat(5, 20%);`
- Combine with different units: `grid-template-columns: 100px 3em 40%`


### Fraction unit: 
Let same the first item fills 1/6 of the 6 columns, the rest fills up 5/6 of the 6 columns
- `grid-template-columns: 1fr repeat(1, 5fr);`


