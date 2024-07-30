import React from "react";
import logo from "./logo.svg";
import "./Music.css";
import PersistentIcons from "./PersistentIcons";

//"Reflexions",
//submenus: side projects -> youtube, ball together etc; music -> reviews + taste
const categories = ["Home", "About Me", "Side Projects",  "City Reviews", "Music"]

function Music() {
	return (
		<div className="Music">
			<PersistentIcons/>
			<header className="App-header">
					<p>Music</p>
				</header>
		</div>
	);
}

export default Music;