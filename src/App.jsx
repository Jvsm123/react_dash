import React from 'react';
import Dashboard from './comps/dash/Dashboard.jsx';
import Perfil from './comps/perfil/Perfil.jsx';

import './App.css';

export default function App()
{
	return (
		<div id="main">
			<Perfil/>
			<Dashboard/>
		</div>
	);
};
