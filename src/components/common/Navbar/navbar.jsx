import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			<Link className="navbar-brand" to="/">
				THE ICONIC
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbars"
				aria-controls="navbars"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbars">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink className="nav-link" to="/home">
							Home <span className="sr-only">(current)</span>
						</NavLink>
					</li>
					<li className="nav-item active">
						<NavLink className="nav-link" to="/catalog-app">
							Women
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
