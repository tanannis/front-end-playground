/* INTERFACE 
  - mostly for object oriented programming
  - extendable just like JS Class
  - add "I" as 1st letter
  */

// below 2 interfaces will be combined into one
interface ISearchBoxProps {
  className: string;
  placeholder?: string | null; // can expect a string, but not always
}

interface ISearchBoxProps {
  onSearchChange: (a: string) => void
}



// ISearchChangeProps will have all the properties of ISearchBoxProps in addition to OnSearchChange
interface ISearchChangeProps extends ISearchBoxProps {
  onSearchChange: (a: string) => void
}
