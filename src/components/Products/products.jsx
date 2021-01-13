import React, { Component } from "react";
import Product from "../Product/product";
import { getProducts } from "../../services/productService";
import { getAllBrands } from "../../services/brandService";
import ListGroup from "../common/ListGroup/listGroup";
import Pagination from "../common/Paginate/paginate";

class Products extends Component {
	state = {
		products: [],
		selectedProduct: null,
		currentPage: 1,
		pageSize: 24,
		pageCount: null,
		totalItems: null,
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

	async populateProducts(page, sortOrder, brand) {
		//const { currentPage, sortOrder } = this.state;
		const { data: productData } = await getProducts(page, sortOrder, brand);
		console.log("Products service:", productData._embedded.product.length);
		this.setState({
			products: productData._embedded.product,
			totalItems: productData._embedded.product.length,
			pageSize: productData.page_size,
			currentPage: page,
			pageCount: productData.page_count,
			selectedBrand: brand,
		});
	}

	async componentDidMount() {
		await this.populateProducts(
			this.state.currentPage,
			this.state.sortOrder,
			this.state.selectedBrand
		);
		await this.populateBrands();
	}

	handleBrandSelect = (brand) => {
		console.log("Brand selected", brand.name, brand.url_key);
		this.populateProducts(1, this.state.sortOrder, brand);
		//this.setState({ selectedBrand: brand, searchQuery: "" });
	};

	handleProductSelect = (product) => {
		//console.log("Product selected", product);
		this.setState({ selectedProduct: product });
	};

	handlePageChange = (page) => {
		console.log("Page changed", page);
		this.populateProducts(page, this.state.sortOrder, this.state.selectedBrand);
		//this.setState({ currentPage: page });
	};

	getPagedData = () => {
		const {
			pageSize,
			currentPage,
			products: allProducts,
			selectedBrand,
			searchQuery,
		} = this.state;

		//Filter
		let filteredProducts = allProducts;
		console.log("All Products inital", filteredProducts.length);

		//Search
		// if (searchQuery)
		// 	filteredProducts = allProducts.filter(
		// 		(product) =>
		// 			product._embedded.brand.name
		// 				.toLowerCase()
		// 				.includes(searchQuery.toLowerCase()) ||
		// 			product.name.toLowerCase().includes(searchQuery.toLowerCase())
		// 	);
		// else
		// if (selectedBrand && selectedBrand.id)
		// 	filteredProducts = allProducts.filter(
		// 		(product) => product._embedded.brand.id === selectedBrand.id
		// 	);

		return { totalCount: filteredProducts.length, data: filteredProducts };
	};

	render() {
		const {
			//	products,
			brands,
			selectedBrand,
			selectedProduct,
			pageSize,
			currentPage,
			pageCount,
			totalItems,
		} = this.state;
		const { length: count } = this.state.products;

		if (count === 0)
			return (
				<p className="text-center font-weight-normal">
					There are no products to display
				</p>
			);

		const { totalCount, data: products } = this.getPagedData();

		return (
			<div className="album py-5 bg-light my-4">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<ListGroup
								items={brands}
								selectedItem={selectedBrand}
								onItemSelect={this.handleBrandSelect}
							/>
						</div>
						<div className="col-md-9">
							<div className="row">
								<Pagination
									totalItems={totalCount}
									pageSize={pageSize}
									currentPage={currentPage}
									totalPageCount={pageCount}
									onPageChange={this.handlePageChange}
								/>
							</div>
							<div className="row">
								<p className=" align-text-left font-weight-normal">
									Showing {totalCount} products
								</p>
							</div>
							<div className="row">
								<Product
									products={products}
									selectedProduct={selectedProduct}
									onProductSelect={this.handleProductSelect}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Products;
