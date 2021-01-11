import React, { Component } from "react";
import Product from "./Product";
import { getProducts } from "../services/productService";

class Products extends Component {
	state = {
		products: [],
		currentPage: 1,
		sortOrder: "popularity",
	};

	async componentDidMount() {
		const { currentPage, sortOrder } = this.state;
		const { data: productData } = await getProducts(currentPage, sortOrder);
		console.log("Products service:", productData._embedded.product.length);
		this.setState({
			products: productData._embedded.product,
		});
	}

	render() {
		const { products } = this.state;

		return (
			<div>
				<p>Showing {products.length} products</p>
				<Product products={products} />
			</div>
		);
	}
}

export default Products;
