// primitive values
let id: number = 5;
let firstName: string = "Kobe";
let isGoodboy: boolean = true;

// array
let ids: number[] = [1,2,3,4,5] // an array of only numbers
let names: string[] = ["name", "date", "time"] // an array of only strings
let arr: any[] = [1, true, "hello"];

// any
let x: any = "";  // x can be reassigned to any type

// Union
let pid: string | number  // pid can be a string OR number
pid = "22"
pid = 22

/* Functions */
// returns a boolean
const isFunc: (a: string, b: number, c: boolean) => boolean = (a,b,c) => {return true};

// void means not returning anything or undefined or no specific type
const func: (a: string, b: number, c: boolean) => void = (a,b,c) => {};
