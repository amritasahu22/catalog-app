import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			<a className="navbar-brand">THE ICONIC</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarsExampleDefault"
				aria-controls="navbarsExampleDefault"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarsExampleDefault">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link">Women</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
