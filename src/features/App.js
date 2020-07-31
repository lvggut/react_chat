import React from 'react';
import { Button, MainHeader } from './scss/components';

import './scss/app.scss';

const App = () => {
	return (
		<div>
			<div className="wrapper">
				<header className="header">
					<MainHeader></MainHeader>
				</header>
				<div className="container">
					<header className="marketing-hero home-large-hero">
						<div className="row homepage">
							<h1 className="hero-main-header">React Chat</h1>
							<h2 className="hero-subheader">For more information visit website</h2>
							<br></br>
							<Button></Button>
						</div>
					</header>
				</div>
			</div>
		</div>
	);
};

export default App;
