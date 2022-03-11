import React, { useState } from "react";
import Shine from "./luz.jsx";
import "../../styles/index.css";

//create your first component
const Home = () => {
	return (
		<div>
			<div id="palo" className="text-center "></div>
			<div id="semaforo" className="text-center bg-dark">
				<div>
					<Shine />
				</div>
			</div>
		</div>
	);
};

export default Home;
