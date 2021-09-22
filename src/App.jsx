import React, {useState} from 'react';
import Dashboard from './comps/dash/Dashboard.jsx';
import Perfil from './comps/perfil/Perfil.jsx';

import './App.css';

export default function App()
{
	const [ op, setOp ] = useState(1);
	return (
		<div id="main">
			<Perfil setOp={setOp}/>
			<Dashboard op={op}/>
		</div>
	);
};
