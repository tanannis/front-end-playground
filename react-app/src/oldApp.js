import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// This App component represents the entire application
class App extends Component {
	constructor() {
		super();
		this.state = {
			name: "John Doe",
      monsters: [
        { name: "Kobe", id: 1 },
        { name: "John", id: 2 },
        { name: "Annis", id: 3 }
      ]
		};
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hi {this.state.name}</p>
					<button
						onClick={() => {
							this.setState(
								() => {
									return {
										name: "Jay Smith",
									};
								},
                // pass a call back funciton for console log the updated state, only console log only the state is updated.
								() => {
									console.log(this.state);
								}
							);
						}}
					>
						Change Name
					</button>
				</header>
        
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}> <h1>{monster.name}</h1> </div>;
        })}
			</div>
		);
	}
}

/* Functional component version:

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
// 
// export default App;
