import React, { useState } from "react";

const Shine = () => {
	const [color, setColor] = useState("");

	return (
		<div>
			<div
				id="red"
				className={color == "red" ? "red glow" : "red"}
				onClick={() => {
					setColor("red");
				}}></div>

			<div
				id="yellow"
				className={color == "yellow" ? "yellow glow" : "yellow"}
				onClick={() => {
					setColor("yellow");
				}}></div>

			<div
				id="green"
				className={color == "green" ? "green glow" : "green"}
				onClick={() => {
					setColor("green");
				}}></div>
		</div>
	);
};
export default Shine;
