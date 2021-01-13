import React, { Component } from "react";
import Product from "../Product/product";
import { getProducts } from "../../services/productService";
import { getAllBrands } from "../../services/brandService";
import ListGroup from "../common/ListGroup/listGroup";
import Pagination from "../common/Pagination/pagination";
import SearchBox from "../common/SearchBox/searchBox";
import SelectMenu from "../common/SelectMenu/selectMenu";

class Products extends Component {
	state = {
		products: [],
		selectedProduct: null,
		currentPage: 1,
		pageSize: 24,
		pageCount: null,
		totalItems: null,
		brands: [],
		selectedBrand: null,
		searchQuery: "",
		sortBy: [
			{ id: 1, name: "Popularity", value: "popularity" },
			{ id: 2, name: "New Arrivals", value: "new" },
			{ id: 3, name: "Price High To Low", value: "price_high" },
			{ id: 4, name: "Price Low To High", value: "price_low" },
			{ id: 5, name: "Brand A To Z", value: "brand_asc" },
			{ id: 6, name: "Brand Z To A", value: "brand_desc" },
		],
		selectedSortOrder: "popularity",
	};

	async populateBrands() {
		const { data: brandData } = await getAllBrands();
		const allBrands = { id: "", name: "All Brands" };
		const brands = [allBrands, ...brandData._embedded.brand];

		this.setState({ brands: brands, selectedBrand: allBrands });
	}

	async populateProducts(page, sortOrder, brand) {
		const { data: productData } = await getProducts(page, sortOrder, brand);

		this.setState({
			products: productData._embedded.product,
			totalItems: productData._embedded.product.length,
			pageSize: productData.page_size,
			currentPage: page,
			pageCount: productData.page_count,
			selectedBrand: brand,
			searchQuery: "",
			selectedSortOrder: sortOrder,
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
		this.populateProducts(1, this.state.selectedSortOrder, brand);
	};

	handleProductSelect = (product) => {
		this.setState({ selectedProduct: product });
	};

	handlePageChange = (page) => {
		this.populateProducts(
			page,
			this.state.selectedSortOrder,
			this.state.selectedBrand
		);
	};

	handleSearch = (query) => {
		this.setState({ searchQuery: query });
	};

	handleSortSelect = (value) => {
		this.populateProducts(1, value, this.state.selectedBrand);
	};

	getSearchData = () => {
		const { products: allProducts, searchQuery } = this.state;

		//Search
		const filteredProducts = searchQuery
			? allProducts.filter(
					(product) =>
						product._embedded.brand.name
							.toLowerCase()
							.includes(searchQuery.toLowerCase()) ||
						product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
						product.price.toString().includes(searchQuery)
			  )
			: allProducts;

		return { totalCount: filteredProducts.length, data: filteredProducts };
	};

	render() {
		const {
			brands,
			selectedBrand,
			selectedProduct,
			pageSize,
			currentPage,
			pageCount,
			searchQuery,
			sortBy,
			selectedSortOrder,
		} = this.state;
		const { length: count } = this.state.products;

		if (count === 0)
			return (
				<p className="text-center font-weight-normal">
					There are no products to display
				</p>
			);

		const { totalCount, data: products } = this.getSearchData();

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
								<SearchBox value={searchQuery} onChange={this.handleSearch} />

								<div className="col-md-4 pt-3">
									<SelectMenu
										options={sortBy}
										selectedOption={selectedSortOrder}
										onOptionSelect={this.handleSortSelect}
									/>
								</div>
								<div className="col-md ">
									<p className="font-weight-normal text-center pt-3">
										Showing {totalCount} products
									</p>
								</div>
								<div className="col-md pt-3">
									<Pagination
										totalItems={totalCount}
										pageSize={pageSize}
										currentPage={currentPage}
										totalPageCount={pageCount}
										onPageChange={this.handlePageChange}
									/>
								</div>
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
