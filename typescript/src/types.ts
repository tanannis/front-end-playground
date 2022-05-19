/* TYPES 
  - are mostly for functional programming 
  - not extendable
  - can form unions

*/

// different types can be group into one like this
type SearchBoxProps2 = {
  className: string;
  placeholder?: string;
	onSearchChange: (a: string) => void
}


// can create an union below
type CanadianAddress = {
  street: string;
  province: string;
}

type USAddress = {
  stree: string;
  state: string;
}

type ItalianAddress = {
  street: string;
  region: string;
}

// the union:
type NorthAmericanAddress = CanadianAddress | USAddress ;

// this will underline error because the NorthAmericanAddress union doesn't have a region which is from ItalianAddress
// const Address: NorthAmericanAddress = {
  // street: "main st",
  // region: "North"
// }

type WesternAddress = CanadianAddress | USAddress | ItalianAddress;

const Address2: WesternAddress = {
  street: "main st",
  region: "North"  // no error
}