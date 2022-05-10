import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

/*
	The order React runs
	1. Constructor - initial state
	2. Render - initial rendering, determines what to show in UI
	3. ComponentDidMount - fetch all data from API, only happen once
	4. Render - If the state in constructor changed, re-render and show in UI
 */

// This App component represents the entire application
const App = () => {
	// [value, setValue]
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilterMonsters] = useState(monsters);

	// Everytime if React see the values inside [] changes, the App function will re-run and re-render. This fetch call will cause side effect.
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users))
			.catch((error) => console.log("error", error))
	}, []);

	// useEffect(async() => {
		// try {
			// const data = await fetch("https://jsonplaceholder.typicode.com/users");
			// const users = await data.json();
			// setMonsters(users)
		// } catch (error) {
			// console.log("error", error);
		// }
	// }, [])

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});
		setFilterMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monsters Robohash</h1>
			<SearchBox
				onSearchChange={onSearchChange}
				className="monster-search-box"
				placeholder="search monsters"
			/>
			<CardList monsters={filteredMonsters}/>
		</div>
	);
};

export default App;
