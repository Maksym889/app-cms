import React from "react";
import { Link } from "react-router-dom";

const Tab = ({ id, title, activeTab }) => {
	return (
		<div className={`nav__item ${activeTab === id && "active"}`}>
			<Link to={id}>{title}</Link>
		</div>
	);
};

export default Tab;
