import React from 'react';
import Dots from './imgs/three-dots.svg';

import './dashCard.css';

export default function DashCard( props )
{
	return (
		<div id="card" style={{backgroundColor: `var(${props.dados.cor})`}}>
			<span>
				<img src={`./assets/${props.dados.i}.svg`} alt="Icone"/>
			</span>
			<div id="inner-card">
				<div id="inner-card-type">
					<h4>{props.dados.title}</h4>
					<img src={Dots} alt="···"/>
				</div>
				<div id="schedulers">
					<h1>
						{
							props.op === 1 && `${props.dados.timeframes.daily.current}`
							|| props.op === 2 && `${props.dados.timeframes.weekly.current}`
							|| props.op === 3 && `${props.dados.timeframes.monthly.current}`
						}hrs
					</h1>
					<h4>Last Week - {
							props.op === 1 && `${props.dados.timeframes.daily.previous}`
							|| props.op === 2 && `${props.dados.timeframes.weekly.previous}`
							|| props.op === 3 && `${props.dados.timeframes.monthly.previous}`
						} hrs
					</h4>
				</div>
			</div>
		</div>
	);
};
