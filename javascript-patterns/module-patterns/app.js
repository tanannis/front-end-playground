/* Basic structure: IFII, blue print of the module pattern

(function() {
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
})();
*/

/* 
STANDARD MODULE PATTERN
*/
const UICtrl = (function () {
	let text = "Hello World";

	const changeText = function () {
		const element = document.querySelector("h1");
		element.textContent = text;
	};
	return {
		// callChangeText function will be public, but changeText inside it will be private
		callChangeText: function () {
			changeText();
			// console.log(text);
		},
	};
})();

UICtrl.callChangeText();
// UICtrl.changeText(); // -> will get error because changeText is private
console.log(UICtrl.text);

/* 
REVEALING MODULE PATTERN
*/
const ItemCtrl = (function () {
	let data = [];

	function add(item) {
		data.push(item);
		console.log("Item Added....");
	}

	function get(id) {
		return data.find((item) => {
			return item.id === id;
		});
	}

	// revealing functions that you wanted them to be public
	return {
		add: add,
		// get: get
	};
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Mark" });
console.log(ItemCtrl.get(2));
