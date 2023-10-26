import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TabContent = ({ setActiveTab }) => {
	const location = useLocation();
	let LazyComponent = lazy(() => import(`../tabs${location.pathname}`));

	useEffect(() => {
		setActiveTab(location.pathname);
	}, [location]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LazyComponent />
		</Suspense>
	);
};

export default TabContent;
