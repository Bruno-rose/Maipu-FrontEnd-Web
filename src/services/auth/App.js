import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './services/UserContext';

import Routes from './Routes'

function App() {
  return (
		<BrowserRouter>
			<UserProvider>
				<Routes />
			</UserProvider>
		</BrowserRouter>
  );
}

export default App;
