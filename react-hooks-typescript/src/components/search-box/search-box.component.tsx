import { ChangeEventHandler, ChangeEvent } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
	onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
	/* same as:
		onSearchChange: ChangeEventHandler<HTMLInputElement>;
	*/
}


const SearchBox = ({ className, placeholder, onSearchChange }: SearchBoxProps) => {
	return (
			<input
				className={`search-box ${className}`}
				type="search"
				placeholder={placeholder}
				onChange={onSearchChange}
				// onChange={(e) => onSearchChange} // <---- don't need this anymore
			/>
	);
}

export default SearchBox;
