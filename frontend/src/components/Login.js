import React, { useContext, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { LOG_IN } from '../query/queries/user';
import AuthContext from '../context/auth-context';

const Login = () => {
	const [login] = useMutation(LOG_IN);
	const authCtx = useContext(AuthContext);
	const emailRef = useRef();
	const passRef = useRef();

	const onFormSubmit = e => {
		e.preventDefault();
		login({
			variables: {
				email: emailRef.current.value.toString(),
				password: passRef.current.value.toString(),
			},
		}).then(res => {
			authCtx.logIn(res.data.login.token);
			console.log(res.data.login.token);
		});
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input type="text" ref={emailRef} />
			<input type="text" ref={passRef} />
			<button>click</button>
		</form>
	);
};

export default Login;
