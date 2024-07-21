import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./App.css";


//"Reflexions",
//submenus: side projects -> youtube, ball together etc; music -> reviews + taste
const basePath = "/my-page"
const categories = [
	{
		name: "Home",
		link: basePath
	},
	{
		name: "About Me",
		link: basePath + "/bio"
	},
	{
		name: "Side Projects",
		link: basePath + "/projects"
	},
	{
		name: "City Reviews",
		link: basePath + "/cities"
	},
	{
		name: "Music",
		link: basePath + "/music"
	},
]
function App() {
	
	return (
		<div className="App">
			<header className="App-header">
				{categories.map((item: {name: string, link: string}) => (
					<div className="Category">
						<Link className="Link" to={item.link} >{item.name}</Link>
					</div>
				))}
			</header>
		</div>
	);
}

export default App;
