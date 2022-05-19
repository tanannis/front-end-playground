"use strict";
/* A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

*/
const user = {
    name: "Hayes",
    id: 0,
};
// you may have a function that takes an array or a string:
function getLength(user) {
    return user.length;
}
function wrapInArray(user) {
    if (typeof user === "string") {
        return [user];
    }
    return user;
}
console.log(wrapInArray("hello")); // ["hello"]
console.log(wrapInArray(["hello"])); // ["hello"]
