"use strict";
/* Enum (Enumerated types)
  - are data structures of constant length that hold a se
  - the properties in there are protected ready-only, not
  - Enums are useful when setting properties or values th
possible values
*/
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 0] = "Up";
    Direction3[Direction3["Down"] = 1] = "Down";
    Direction3[Direction3["Left"] = 2] = "Left";
    Direction3[Direction3["Right"] = 3] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Up); // 0
var Direction4;
(function (Direction4) {
    Direction4["Up"] = "Up";
    Direction4["Down"] = "Down";
    Direction4["Left"] = "Left";
    Direction4["Right"] = "Right";
})(Direction4 || (Direction4 = {}));
console.log(Direction4.Up); // "Up"
