import { useState } from "react";

const DisableButton = () => {
	const [value, setValue] = useState("");

	const enterText = (e) => {
		return setValue(e.target.value);
	};

	return (
		<>
			<h3>Disable Button</h3>
			<input type="text" onChange={enterText} value={value} />
			<button disabled={!value}>Submit</button>
		</>
	);
};

export default DisableButton;