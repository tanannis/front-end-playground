/*
  Does JavaScript has Class? Yes and No.
    Yes - It's a syntactic sugar, it makes it look like Class but not real Class
    No - Under the hood it's still prototype and inheritance

    When you extend class A to create class B, class B becomes an instance of class A and inherited all of class A's properties(variables, methods), plus can add new methods of its own.
*/

class Pokemon {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack () {
    return this.name + " attacks with " + this.weapon;
  }
}
const Kobe = new Pokemon("Kobe", "kisses");
console.log(Kobe.attack()) // Kobe attacks with kisses


// Make a clone of Kobe
// const Hunter = {...Kobe};
// console.log("Hunter", Hunter);


// Sub-Class example 1, inheritated all properties of Pokemon
class Elf extends Pokemon {

}
const Cali = new Elf("Cali", "ruff ruff!");
console.log(Cali.attack()) // Cali attacks with ruff ruff



// Sub-Class example 2: Add new variable and method
// must call the super-class of Elf, which is Pokemon if wants to use "this" keyword
class Puppy extends Pokemon {
  constructor(name, weapon, breed) {
    super(name, weapon);
    this.breed = breed
  }
  dance() {
    return `${this.name} the ${this.breed} dances with ${this.weapon}`
  }
}
const Mochi = new Puppy("Mochi", "puppy eyes", "corgi");
console.log(Mochi.attack()) // Mochi attacks with puppy eyes
console.log(Mochi.dance()) // Mochi the corgi dances with puppy eyes