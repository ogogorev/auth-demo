import { h } from 'preact';
import { useState } from 'preact/hooks';

import Login from './login/login';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div id="app">
			{!isLoggedIn && (<Login onLogin={() => setIsLoggedIn(true)} />)}

			{isLoggedIn && (
				<div>
					<p>You have successfully logged in :)</p>
					<button onClick={() => setIsLoggedIn(false)}>Try again</button>
				</div>
			)}
		</div>
	)
};

export default App;
