import React, { useState, useEffect } from 'react';
import DashCard from './DashCard.jsx';
import axios from 'axios';

import './dash.css';

export default function Dashboard( props )
{
	const [ dados, setDados ] = useState([]);

	useEffect( () =>
	{
		axios.get('http://localhost:5000/dados')
			.then( res => setDados(res.data) )
	}, []);

	return (
		<div id="cards">
			{dados.map( i => <DashCard dados={i} op={props.op}/>)}
		</div>
	);
};
