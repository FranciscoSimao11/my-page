import React from "react";
import "./Cities.css";
import PersistentIcons from "./PersistentIcons";

//"Reflexions",
//submenus: side projects -> youtube, ball together etc; music -> reviews + taste
const categories = ["Home", "About Me", "Side Projects",  "City Reviews", "Music"]

// const track : any = document.getElementById("image-track");

// window.onmousedown = e => {
// 	track.dataset.mouseDownAt = e.clientX;
// }

// window.onmouseup = e => {
// 	track.dataset.mouseDownAt = "0";
// 	track.dataset.prevPercentage = track.dataset.percentage;
// }

// window.onmousemove = e => {
// 	if(track.dataset.mouseDownAt === "0") return;
	
// 	const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
// 		maxDelta = window.innerWidth / 2;

// 	const percentage = (mouseDelta / maxDelta) * -100,
// 		nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

// 	track.dataset.percentage = nextPercentage;
// 	track.style.transform = `translate(${percentage}%, -50%)`;
// }

const track : any = document.getElementById("image-track");

const handleOnDown = (e : any) => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = (e : any) => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp();

window.ontouchend = e => handleOnUp();

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);


function Cities() {
	return (
		<div className="Cities">
			<PersistentIcons/>
			<div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
				<img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1200px-KeizersgrachtReguliersgrachtAmsterdam.jpg" draggable="false"/>
				<img className="image" src="https://www.outlooktravelmag.com/media/Prague-Main-jpg.webp" draggable="false"/>
				<img className="image" src="https://lp-cms-production.imgix.net/image_browser/warsaw%20scenery.jpg" draggable="false"/>
				<img className="image" src="https://assets-campuses.euruni.edu/Htdocs/Images/IF_Standard/puid_156a0bf3-452b-4978-aa53-75d1d24d6266_14244.png" draggable="false"/>
				<img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1200px-KeizersgrachtReguliersgrachtAmsterdam.jpg" draggable="false"/>
				<img className="image" src="https://www.outlooktravelmag.com/media/Prague-Main-jpg.webp" draggable="false"/>
				<img className="image" src="https://lp-cms-production.imgix.net/image_browser/warsaw%20scenery.jpg" draggable="false"/>
				<img className="image" src="https://assets-campuses.euruni.edu/Htdocs/Images/IF_Standard/puid_156a0bf3-452b-4978-aa53-75d1d24d6266_14244.png" draggable="false"/>
			</div>
		</div>
	);
}

export default Cities;
