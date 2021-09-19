import React from 'react';
import Jeremy from './imgs/image-jeremy.png';
import './perfil.css';

export default function Perfil()
{
	return (
		<div id="perfil">
			<div id="report">
				<img src={Jeremy} alt="Image Jeremy"/>
				<h3>Report for</h3>
				<h1>Jeremy <br/> Robson</h1>
			</div>

			<div id="days">
				<h4>Daily</h4>
				<h4>Weekly</h4>
				<h4>Monthly</h4>
			</div>
		</div>
	);
};
