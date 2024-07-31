import React from "react";
import { Link } from "react-router-dom";
import "./PersistentIcons.css";
import HomeIcon from '@mui/icons-material/Home';
import { basePath } from "./App";



function PersistentIcons() {
	
	return (
		<div className="Persistent">
			<Link className="Link" to={basePath} >
				<HomeIcon sx={{
					color:"#a8a6a6;",
					transition: 'transform .1s ease-in-out',
					fontSize: '6vh',
					'&:hover': {
						cursor: 'pointer',
						transform: 'scale(1.2)'
					},}}/>
			</Link>
		</div>
	);
}

export default PersistentIcons;
