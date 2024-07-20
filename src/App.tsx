import React from "react";
import logo from "./logo.svg";
import "./App.css";


const categories = ["Home", "About Me", "Side Projects", "Reflexions"]

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{categories.map((name: string) => (
					<div className="Category">{name}</div>
				))}
			</header>
		</div>
	);
}

export default App;
