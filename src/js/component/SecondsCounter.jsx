import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div className="d-flex justify-content-center align-items-center text-white">
			<div className="row">
				<div className="col my-3 mx-2 py-2 text-center bg-info align-self-center">
					<i className="far fa-clock fa-3x display-4" />
				</div>
				<div className={divStyles}>{props.secondSix % 10}</div>
				<div className={divStyles}>{props.secondFive % 10}</div>
				<div className={divStyles}>{props.secondFour % 10}</div>
				<div className={divStyles}>{props.secondThree % 10}</div>
				<div className={divStyles}>{props.secondTwo % 10}</div>
				<div className={divStyles}>{props.secondOne % 10}</div>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	secondOne: PropTypes.number,
	secondTwo: PropTypes.number,
	secondThree: PropTypes.number,
	secondFour: PropTypes.number,
	secondFive: PropTypes.number,
	secondSix: PropTypes.number,
};

let divStyles = "col my-3 mx-2 py-2 px-4 display-4 text-center bg-info";

export default SecondsCounter;
