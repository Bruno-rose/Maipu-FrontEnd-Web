import React, { useState, useEffect, createContext } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../service/api_calls'; // lo tengo

import LogIn from '../../scenes/login'; // tambien lo tengo

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(undefined);

	useEffect(() => {
		const checkLoggedIn = async () => {
			let cuser = isAuthenticated();
			if (cuser === null) {
				localStorage.setItem('user', '');
				cuser = '';
			}

			setCurrentUser(cuser);
		};

		checkLoggedIn();
	}, []);

	console.log('usercontext', currentUser);

	return (
		<UserContext.Provider value={[currentUser, setCurrentUser]}>
			{ currentUser?.hash ? children : <LogIn />}
		</UserContext.Provider>
	);
};


export default UserContext;
