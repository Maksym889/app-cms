import React, { useState, useEffect } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tab from "./components/Tab";
import TabContent from "./components/TabContent";

import tabsData from "./tabs.json";

function App() {
	const [activeTab, setActiveTab] = useState(null);

	return (
		<Router>
			<div className="uiContainer">
				<nav className="nav">
					{tabsData.map(tab => (
						<Tab key={tab.id} id={`/${tab.id}`} activeTab={activeTab} title={tab.title} />
					))}
				</nav>
				<Routes>
					{tabsData.map(tab => (
						<Route
							path={`/${tab.id}`}
							element={<TabContent setActiveTab={setActiveTab} />}
							key={tab.id}
						/>
					))}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
