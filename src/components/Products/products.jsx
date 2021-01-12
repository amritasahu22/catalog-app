import React, { Component } from "react";
import ListGroup from "../common/ListGroup/listGroup";
import Product from "../Product/product";
import { getProducts } from "../../services/productService";
import { getAllBrands } from "../../services/brandService";

class Products extends Component {
	state = {
		products: [],
		currentPage: 1,
		sortOrder: "popularity",
		brands: [],
		selectedBrand: null,
	};

	async populateBrands() {
		const { data: brandData } = await getAllBrands();
		const allBrands = { id: "", name: "All Brands" };
		const brands = [allBrands, ...brandData._embedded.brand];

		this.setState({ brands: brands, selectedBrand: allBrands });
	}

	async populateProducts(page, sortOrder) {
		//const { currentPage, sortOrder } = this.state;
		const { data: productData } = await getProducts(page, sortOrder);
		console.log("Products service:", productData._embedded.product.length);
		this.setState({
			products: productData._embedded.product,
		});
	}

	async componentDidMount() {
		await this.populateProducts(this.state.currentPage, this.state.sortOrder);
		await this.populateBrands();
	}

	handleBrandSelect = (brand) => {
		this.setState({ selectedBrand: brand, searchQuery: "" });
	};

	render() {
		const { products, brands, selectedBrand } = this.state;

		return (
			<div className="album py-5 bg-light my-4">
				<div className="container">
					<div className="row">
						<div className="col-md-3 mb-3">
							<ListGroup
								items={brands}
								selectedItem={selectedBrand}
								onItemSelect={this.handleBrandSelect}
							/>
						</div>
						<div className="col-md">
							<div className="row">
								<p className=" align-text-left font-weight-normal">
									Showing {products.length} products
								</p>
							</div>
							<div className="row">
								<Product products={products} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Products;
