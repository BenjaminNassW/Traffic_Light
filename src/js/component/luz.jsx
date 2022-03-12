import React, { useState } from "react";

const Shine = () => {
	const [color, setColor] = useState("");
	const [visible, setVisible] = useState("none");
	return (
		<div>
			<div id="negro">
				<div
					id="red"
					className={color == "red" ? "glow" : ""}
					onClick={() => {
						setColor("red");
					}}></div>

				<div
					id="yellow"
					className={color == "yellow" ? "glow" : ""}
					onClick={() => {
						setColor("yellow");
					}}></div>

				<div
					id="green"
					className={color == "green" ? "glow" : ""}
					onClick={() => {
						setColor("green");
					}}></div>
				<div
					id="purple"
					className={color == "purple" ? "glow" : ""}
					style={{ display: visible }}
					onClick={() => {
						setColor("purple");
					}}></div>
			</div>
			<button
				onClick={() => {
					if (color == "") setColor("red");
					else if (color == "red") setColor("yellow");
					else if (color == "yellow") setColor("green");
					else if (color == "green") setColor("purple");
					else if (color == "purple") setColor("red");
				}}>
				Change Color
			</button>
			<button
				onClick={() => {
					visible == "none"
						? setVisible("block")
						: setVisible("none");
				}}>
				Add Purple
			</button>
		</div>
	);
};
export default Shine;
