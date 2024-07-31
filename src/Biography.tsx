import React from "react";
import "./Biography.css";
import PersistentIcons from "./PersistentIcons";

//"Reflexions",
//submenus: side projects -> youtube, ball together etc; music -> reviews + taste
const categories = ["Home", "About Me", "Side Projects",  "City Reviews", "Music"]

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function Biography() {
	return (
		<div className="Biography">
			<PersistentIcons/>
				<header className="App-header">
					<p>{lorem}</p>
				</header>
		</div>
	);
}

export default Biography;
