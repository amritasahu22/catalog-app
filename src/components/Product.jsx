import React from "react";

const Product = (props) => {
	const { products } = props;

	const styles = {
		fontSize: "12px",
		fontFamily: "Arial",
	};

	return (
		<div className="card-columns">
			{products.map((product) => (
				<div
					key={product.sku}
					className="card bg-light border-light m-2 clickable"
				>
					<img
						src={product._embedded.images[0].url}
						alt={product._embedded.images[0].thumbnail}
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
			))}
		</div>
	);
};

export default Product;
