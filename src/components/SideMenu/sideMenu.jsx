import React from "react";
import ListGroup from "../common/ListGroup/listGroup";

const SideMenu = (props) => {
	const { items, selectedItem, onItemSelect } = props;

	return (
		<div id="accordion">
			<div className="card">
				<div className="card-header" id="headingOne">
					<h5 className="mb-0">
						<button
							className="btn btn-link text-secondary"
							data-toggle="collapse"
							data-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Brands
						</button>
					</h5>
				</div>

				<div
					style={{ overflow: "auto", maxHeight: 300 }}
					id="collapseOne"
					className="collapse"
					aria-labelledby="headingOne"
					data-parent="#accordion"
				>
					<div className="card-body">
						<ListGroup
							items={items}
							selectedItem={selectedItem}
							onItemSelect={onItemSelect}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
