import React from "react";
import PropTypes from "prop-types";

const ListGroup = (props) => {
	const {
		items,
		keyProperty,
		textProperty,
		selectedItem,
		onItemSelect,
	} = props;

	console.log("selectedItem", selectedItem);

	const styles = {
		li: {
			fontSize: "0.8rem",
			padding: "0.5rem",
			fontFamily: "san-serif",
		},
	};

	return (
		<ul className="list-group m-3 clickable">
			{items.map((item) => (
				<li
					key={item[keyProperty]}
					className={
						item === selectedItem
							? "list-group-item list-group-item-action list-group-item-light active"
							: "list-group-item list-group-item-action list-group-item-light"
					}
					style={styles.li}
					onClick={() => onItemSelect(item)}
				>
					{item[textProperty]}
				</li>
			))}
		</ul>
	);
};

ListGroup.defaultProps = {
	keyProperty: "id",
	textProperty: "name",
};

ListGroup.propTypes = {
	items: PropTypes.array.isRequired,
	onItemSelect: PropTypes.func.isRequired,
};

export default ListGroup;
