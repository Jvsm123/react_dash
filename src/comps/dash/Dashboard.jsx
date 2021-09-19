import React from 'react';
import DashCard from './DashCard.jsx';

import './dash.css';

export default function Dashboard()
{
	return (
		<div id="cards">
			<DashCard/>
			<DashCard/>
			<DashCard/>
			<DashCard/>
			<DashCard/>
			<DashCard/>
		</div>
	);
};
