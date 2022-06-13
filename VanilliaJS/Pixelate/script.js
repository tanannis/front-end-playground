/* Create table cells dynamically */
const [table] = document.getElementsByTagName("table");

const makeRow = () => {
  const tr = document.createElement('tr');
  for (let i = 0; i < 20; i++) {
    const td = document.createElement('td');
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

/* Make rows dynamically when user clicks `Add Row` button */
const addRowBtn = document.getElementById('add-row');
addRowBtn.addEventListener('click', makeRow);


let color = "red";

/* Change cell color based on selection*/
const selectColor = (event) => {
  const chosenColor = event.target.value;
  color = chosenColor;
}
const [selector] = document.getElementsByTagName('select');
selector.addEventListener('change', selectColor);


/* Color cells whenever a <td> cell is clicked */
const colorize = (event) => {
  const cell = event.target;
  const {tagName} = event.target;
  // only color if tag name is <td>
  if (tagName === 'TD' && !cell.className) {
    cell.className = color;
  } else {
    cell.className = '';
  }
}
/* Color cell dynamically when user clicks any cell */
table.addEventListener('mouseover', colorize);




