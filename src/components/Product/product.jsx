import React from "react";
import PropTypes from "prop-types";

const Product = (props) => {
	const { products } = props;
	const styles = {
		fontSize: "12px",
		fontFamily: "Arial",
	};

	return (
		<>
			{products.map((product) => (
				<div className="col-md-3" key={product.sku}>
					<div className="card mb-4 box-shadow clickable border border-warning">
						<img
							src={product._embedded.images[0].url}
							alt={product._embedded.brand.name}
							className="card-img-top rounded"
						/>
						<div className="card-body">
							<h6 className="card-title">{product._embedded.brand.name}</h6>
							<p className="card-text" style={styles}>
								{product.name}
							</p>
							<p className="card-text" style={styles}>
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
};

export default Product;
