import { useState } from "react";

const InputData = () => {
	const [value, setValue] = useState("");

	const enterText = (e) => {
		return setValue(e.target.value);
	};

	return (
		<>
			<input
				type="text"
				placeholder="Enter Text"
				onChange={enterText}
				value={value}
			/>
			<p>{value}</p>
		</>
	);
};

export default InputData;
