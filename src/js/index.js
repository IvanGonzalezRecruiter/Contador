import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

import SecondsCounter from "./component/SecondsCounter.jsx";

let counter = 0;

setInterval(
	function () {
		const secondSix = Math.floor(counter / 100000);
		const secondFive = Math.floor(counter / 10000);
		const secondFour = Math.floor(counter / 1000);
		const secondThree = Math.floor(counter / 100);
		const secondTwo = Math.floor(counter / 10);
		const secondOne = counter;
		counter++;

		ReactDOM.render(
			<SecondsCounter
				secondOne={secondOne}
				secondTwo={secondTwo}
				secondThree={secondThree}
				secondFour={secondFour}
				secondFive={secondFive}
				secondSix={secondSix}
			/>,

			document.querySelector("#app")
		);
	},

	1000
);
