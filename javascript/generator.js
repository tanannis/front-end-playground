// Name Creator
function* sayNames() {
	yield "Jack";
	yield "Jill";
	yield "John";
}
const firstName = sayNames();
console.log(firstName.next().value);

// ID Creator
function* createIDs() {
	let index = 0;

	while (true) {
		yield index++;
	}
}
const gen = createIDs();
console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value); //3
console.log(gen.next().value); //4
console.log(gen.next().value); //5
