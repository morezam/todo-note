import React from 'react';
import Nav from '../nav/Nav';
import { HomeWrapper, HomeContent, HomeP, LinkButton } from './HomeStyles';
import { H1 } from '../Typographi';

const Home = () => {
	return (
		<>
			<Nav />
			<HomeWrapper>
				<HomeContent>
					<H1>WELCOME TO NOTY</H1>
					<HomeP>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
						recusandae, debitis dignissimos sapiente voluptate voluptatibus
						consectetur, laudantium reiciendis explicabo porro alias sit
						accusantium, cum omnis incidunt pariatur praesentium eos nostrum!
					</HomeP>
					<LinkButton to="/signup">Sign up</LinkButton>
				</HomeContent>
			</HomeWrapper>
		</>
	);
};

export default Home;
