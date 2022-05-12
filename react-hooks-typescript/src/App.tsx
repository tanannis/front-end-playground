import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "../utils/data.utils";
/*
	
 */



const App = () => {
	// [value, setValue]
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilterMonsters] = useState(monsters);
	console.log("RENDER")
	
	useEffect(() => {
		// fetch("https://jsonplaceholder.typicode.com/users")
			// .then((response) => response.json())
			// .then((users) => setMonsters(users))
			// .catch((error) => console.log("error", error))

			const fetchUsers = async () => {
				
			}
	}, []);

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
