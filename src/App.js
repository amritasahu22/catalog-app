import React from "react";
import NavBar from "./components/common/Navbar/navbar";
import Footer from "./components/common/Footer/footer";
import Products from "./components/Products/products";
import NotFound from "./components/NotFound/notFound";
import Home from "./components/Home/home";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Redirect, Route } from "react-router-dom";

function App() {
	return (
		<>
			<ToastContainer />
			<NavBar />
			<main>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/catalog-app" component={Products} />
					<Route path="/not-found" component={NotFound} />
					<Redirect from="/" exact to="/catalog-app" />
					<Redirect to="/not-found" />
				</Switch>
			</main>
			<Footer />
		</>
	);
}

export default App;
