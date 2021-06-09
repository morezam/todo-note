import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Menu = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div
				className={`parentEl ${open ? 'openParent' : ''}`}
				onClick={() => setOpen(!open)}></div>
			<div className={`base ${open ? 'close' : ''}`}>
				<div className="menu" onClick={() => setOpen(!open)}>
					<div className="icon">
						<div className="bar"></div>
					</div>
				</div>
				<div className="icons">
					{/* <i className="fa fa-user" aria-hidden="true"></i> */}
					{/* <FaHome classNameName="fa-calendar-o" /> */}
					<p className="fa-calendar-o">Home</p>
					<p className="fa-user">Signup</p>
					<p className="fa-tachometer">Login</p>
					{/* <i className="fa fa-user" aria-hidden="true"></i> */}
					{/* <i className="fa fa-tachometer" aria-hidden="true"></i> */}
				</div>
				<div className="section">
					<div className="cover1">
						<div className="cover2">
							<Link to="/" className="content"></Link>
						</div>
					</div>
				</div>
				<Link className="section-static top" to="/signup"></Link>
				<Link className="section-static bottom" to="/login"></Link>
			</div>
		</>
	);
};

export default Menu;
