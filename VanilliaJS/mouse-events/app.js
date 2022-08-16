const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
// clearBtn.addEventListener("click", runEvent);

// Doubleclick
// clearBtn.addEventListener("dblclick", runEvent);

// Mousedown (click and hold)
// clearBtn.addEventListener("mousedown", runEvent);

// Mouseup (click and let go)
// clearBtn.addEventListener("mouseup", runEvent);

// Mouseenter (when mouse pointer is enters the selected initial parent element)
// card.addEventListener("mouseenter", runEvent);

// Mouseleave (when mouse pointer moves away from the selected initial parent element)
// card.addEventListener("mouseleave", runEvent);

// Mouseover (when mouse pointer moves over to the selected element that's inside the parent element
// card.addEventListener("mouseover", runEvent);

// Mouseout (when mouse pointer moves away from the selected element that's inside the parent
// card.addEventListener("mouseout", runEvent);

// Mousemove (moves mouse pointer anywhere inside the element)
// good for making a game
card.addEventListener("mousemove", runEvent);

// Event Handler
function runEvent(e) {
	console.log(`EVENT TYPE: ${e.type}`);

	heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
