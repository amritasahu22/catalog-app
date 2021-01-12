import React from "react";
import NavBar from "./components/common/Navbar/navbar";
import Footer from "./components/common/Footer/footer";
import Products from "./components/Products/products";
import "./App.css";

function App() {
	return (
		<>
			<NavBar />
			<main>
				<Products />
			</main>
			<Footer />
		</>
	);
}

export default App;
