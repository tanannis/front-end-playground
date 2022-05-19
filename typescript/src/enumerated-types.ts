/* Enum (Enumerated types) 
  - are data structures of constant length that hold a se
  - the properties in there are protected ready-only, not
  - Enums are useful when setting properties or values th
possible values
*/
enum Direction3 {
  Up,  // by default this is 0, can be set to Up = 1
  Down,
  Left,
  Right
}
console.log(Direction3.Up) // 0

enum Direction4 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}
console.log(Direction4.Up) // "Up"