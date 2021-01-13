import React from "react";
import PropTypes from "prop-types";

const Product = (props) => {
	const { products, selectedProduct, onProductSelect } = props;

	const styles = {
		fontSize: "12px",
	};

	return (
		<>
			{products.map((product) => (
				<div key={product.sku} className="col-md-3">
					<div
						className={
							product === selectedProduct
								? "card mb-4 clickable border-secondary"
								: "card mb-4 clickable"
						}
						onClick={() => onProductSelect(product)}
					>
						<img
							src={product._embedded.images[0].url}
							alt={product._embedded.brand.name}
							className="card-img-top rounded"
						/>
						<div className="card-body">
							<h6 className="card-title">{product._embedded.brand.name}</h6>
							<p
								className="card-text font-weight-light text-truncate m-1"
								style={styles}
							>
								{product.name}
							</p>
							<p className="card-text font-weight-light m-1" style={styles}>
								${product.price}
							</p>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

Product.propTypes = {
	products: PropTypes.array.isRequired,
	selectedProduct: PropTypes.object,
	onProductSelect: PropTypes.func.isRequired,
};

export default Product;
