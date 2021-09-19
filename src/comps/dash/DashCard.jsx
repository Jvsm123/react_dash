import React from 'react';
import Dots from './imgs/three-dots.svg';
import Icon from './imgs/icon-work.svg';

import './dashCard.css';

export default function DashCard( props )
{
	return (
		<div id="card">
			<span>
				<img src={Icon} alt="Icone"/>
			</span>
			<div id="inner-card">
				<div id="inner-card-type">
					<h4>Work</h4>
					<img src={Dots} alt="···"/>
				</div>
				<div id="schedulers">
					<h1>32hrs</h1>
					<h4>Last Week - 36hrs</h4>
				</div>
			</div>
		</div>
	);
};
