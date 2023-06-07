import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { login } from '../../services/AuthService';


const Login = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const history = useHistory();

	const onChangeUsername = (e) => {
		setUsername(e.target.value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(username, password);
			history.push('/admin');
		} catch (error) {
			console.error('error', error);
		}
	};

	return (
		<>
				<form onSubmit={onSubmit}>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						value={username}
						onChange={onChangeUsername}
					/>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChangePassword}
					/>
					<button type='submit'>Login</button>
				</form>
		</>
	);
};

export default Login;