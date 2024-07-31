import React from "react";
import "./Projects.css";
import PersistentIcons from "./PersistentIcons";

//"Reflexions",
//submenus: side projects -> youtube, ball together etc; music -> reviews + taste
const categories = ["Home", "About Me", "Side Projects",  "City Reviews", "Music"]

function Projects() {
	return (
		<div className="Projects">
			<PersistentIcons/>
			<header className="App-header">
					<p>Projects</p>
				</header>
		</div>
	);
}


export default Projects;
