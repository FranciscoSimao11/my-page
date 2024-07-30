import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./App.css";
import PersistentIcons from "./PersistentIcons";


//"Reflexions",
//submenus: side projects -> youtube, ball together etc; music -> reviews + taste
export const basePath = "/my-page"
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
		name: "Projects",
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
			<PersistentIcons/>
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
