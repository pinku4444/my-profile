import React,{Fragment} from 'react';
import Header from './components/header'
import Info from './components/info';
import Technical from './components/technical';
import Achievements from './components/achievements';

function App() {
	return (
		<Fragment>
			<Header />
			<Info />
			<Technical />
			<Achievements />

		</Fragment>
		
	);
}

export default App;
