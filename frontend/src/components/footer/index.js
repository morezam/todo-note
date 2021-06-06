import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
	Footer,
	FooterContent,
	FooterLinks,
	FooterLink,
	FooterSocials,
	FooterCopy,
} from './FooterStyles';

const index = () => {
	return (
		<Footer>
			<FooterContent>
				<FooterLinks>
					<FooterLink to="/">Home</FooterLink>
					<FooterLink to="/signup">Signup</FooterLink>
					<FooterLink to="/login">login</FooterLink>
				</FooterLinks>
				<FooterSocials>
					<FaInstagram />
					<FaYoutube />
					<FaTwitter />
				</FooterSocials>
			</FooterContent>
			<FooterCopy>
				&copy; {new Date().getFullYear()} All Rights Reserved
			</FooterCopy>
		</Footer>
	);
};

export default index;
