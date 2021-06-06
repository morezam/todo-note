import React from 'react';
import Nav from '../nav/Nav';
import { HomeWrapper, HomeContent, HomeP } from './HomeStyles';
import { H1 } from '../Typographi';
import { Btn } from '../Btn';

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
					<Btn as="a" href="/signup" primary>
						Signup
					</Btn>
				</HomeContent>
			</HomeWrapper>
		</>
	);
};

export default Home;
