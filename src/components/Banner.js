import React from "react"
import TextLoop from "react-text-loop"
import 'tippy.js/dist/tippy.css';

const Banner = ()=>{

		return (
<>
	<div className="TextLoop">
		<h2 className="loopTitle">
			<p>How to save the world in 2020</p>
			Keep calm and{" "}
			<TextLoop>
				<span> #StayAtHome</span>
				<p>Wash your hands</p>
				<p>Avoid crowded areas</p>
			</TextLoop>{" "}
		</h2>
	</div>
	<div className="empty"></div>
</>
);
};

export default Banner
