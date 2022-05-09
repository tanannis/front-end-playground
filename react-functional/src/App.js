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
	
	return (
		<div className="App">
			<h1 className="app-title">Monsters Robohash</h1>

			{/* <SearchBox onSearchChange={this.onSearchChange} className="monster-search-box" placeholder="search monsters"/> */}
			{/* <CardList monsters={filteredMonsters}/> */}
			
		</div>
	);
}

/*
class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	// rewrite using async / await
	async componentDidMount() {
		try {
			const data = await fetch("https://jsonplaceholder.typicode.com/users");
			const users = await data.json();
			this.setState({
				monsters: users,
			});
			console.log(this.state.monsters);
		} catch (error) {
			console.log("error", error);
		}
	}

	onSearchChange = (event) => {
		// console.log("EVENT", event);
		const searchField = event.target.value.toLowerCase();
		this.setState(() => {
			return { searchField };
		});
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<h1 className="app-title">Monsters Robohash</h1>

				<SearchBox onSearchChange={this.onSearchChange} className="monster-search-box" placeholder="search monsters"/>
				<CardList monsters={filteredMonsters}/>

			</div>
		);
	}
}
*/

export default App;
