import React from "react";
import PropTypes from "prop-types";

const Product = (props) => {
	const { products, selectedProduct, onProductSelect } = props;

	const styles = {
		fontSize: "12px",
		marginBottom: "1px",
	};

	const TYPE = {
		NEW: "NEW",
		SALE: "SALE",
		FINAL_SALE: "FINAL SALE",
		CAMPAIGN: "SPEND $75 SAVE 25%",
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
						<div className="card-body" style={{ height: "20vh" }}>
							<h6 className="card-title" style={styles}>
								{product._embedded.brand.name}
							</h6>
							<p
								className="card-text font-weight-light text-truncate"
								style={styles}
							>
								{product.name}
							</p>
							{product.ribbon === null && (
								<p className="card-text" style={styles}>
									${product.price}
								</p>
							)}

							{product.ribbon === "new" && (
								<p className="card-text" style={styles}>
									${product.price}
								</p>
							)}

							{product.ribbon === "campaign" && (
								<p className="card-text" style={styles}>
									${product.price}
								</p>
							)}

							{product.ribbon === "sale" && (
								<p className="card-text" style={styles}>
									<s> ${product.price}</s>
									<span className="text-danger ml-2">
										${product.special_price}
									</span>
								</p>
							)}

							{product.ribbon === "new" && (
								<p
									className="card-text text-primary font-weight-bold"
									style={styles}
								>
									{TYPE.NEW}
								</p>
							)}

							{product.ribbon === "sale" && (
								<p
									className="card-text text-danger font-weight-bold"
									style={styles}
								>
									{product.final_sale === true ? TYPE.FINAL_SALE : TYPE.SALE}
								</p>
							)}

							{product.ribbon === "campaign" && (
								<p
									className="card-text text-warning font-weight-bold"
									style={styles}
								>
									{TYPE.CAMPAIGN}
								</p>
							)}
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
