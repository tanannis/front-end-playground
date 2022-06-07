
class Person {
  private id: number  // same as `protected id: number`
  name: string  // same as `public name: string`

  constructor(id: number, name: string){
    this.id = id
    this.name = name
  }
}

const man = new Person(1, "Kobe")
console.log(man)