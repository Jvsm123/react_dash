import React from 'react';
import Jeremy from './imgs/image-jeremy.png';
import './perfil.css';

export default function Perfil( props )
{
	return (
		<div id="perfil">
			<div id="report">
				<img src={Jeremy} alt="Image Jeremy"/>
				<h3>Report for</h3>
				<h1>Jeremy <br/> Robson</h1>
			</div>

			<div id="days">
				<h4 onClick={() => props.setOp(1)}>Daily</h4>
				<h4 onClick={() => props.setOp(2)}>Weekly</h4>
				<h4 onClick={() => props.setOp(3)}>Monthly</h4>
			</div>
		</div>
	);
};
