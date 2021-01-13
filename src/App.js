import React from "react";
import NavBar from "./components/common/Navbar/navbar";
import Footer from "./components/common/Footer/footer";
import Products from "./components/Products/products";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<ToastContainer />
			<NavBar />
			<main>
				<Products />
			</main>
			<Footer />
		</>
	);
}

export default App;
