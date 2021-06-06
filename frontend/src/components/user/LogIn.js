import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import {
	InputWrapper,
	UserForm,
	Input,
	FormWrapper,
	Label,
	PError,
	UserP,
	UserLink,
} from './UserStyles';
import { LOG_IN } from '../../query/mutations/user';
import AuthContext from '../../context/auth-context';
import Nav from '../nav/Nav';
import { Btn } from '../Btn';
import { H2 } from '../Typographi';

const LogIn = () => {
	const [val, setVal] = useState('here@gmail.com');
	const [pas, setPas] = useState('1111');
	const authCtx = useContext(AuthContext);
	const [userId, setUserId] = useState(null);
	const [logIn, { error }] = useMutation(LOG_IN);

	const onButtonClick = () => {
		logIn({
			variables: { email: val, password: pas },
		}).then(res => {
			console.log(res);
			authCtx.logIn(res.data.login.token);
			setUserId(res.data.login.userId);
		});
		setVal('');
		setPas('');
	};

	return (
		<>
			<Nav />
			<FormWrapper>
				<UserForm onSubmit={e => e.preventDefault()}>
					<H2 color="var(--white-color)">Log In To Your Account</H2>
					<InputWrapper>
						<Label htmlFor="email">Email</Label>
						<Input
							type="text"
							value={val}
							onChange={e => setVal(e.target.value)}
							id="email"
						/>
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							value={pas}
							onChange={e => setPas(e.target.value)}
							id="password"
						/>
					</InputWrapper>

					<Btn secondary onClick={onButtonClick}>
						Login
					</Btn>
					{error ? <PError>{error.message}</PError> : null}
					<UserP>
						To create <UserLink to="/signup">new Account</UserLink>
					</UserP>
				</UserForm>
			</FormWrapper>
			{userId ? (
				<Redirect
					to={{
						pathname: '/panel',
						state: {
							userId,
						},
					}}
				/>
			) : null}
		</>
	);
};

export default LogIn;
