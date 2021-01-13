import React from "react";
import PropTypes from "prop-types";
import "./listGroup.css";

const ListGroup = (props) => {
	const {
		items,
		keyProperty,
		textProperty,
		selectedItem,
		onItemSelect,
	} = props;

	const styles = {
		li: {
			fontSize: "0.9rem",
			padding: "0.1rem",
			fontFamily: "san-serif",
		},
	};

	return (
		<ul className="list-group clickable list-group-ul">
			{items.map((item) => (
				<li
					key={item[keyProperty]}
					className={
						item === selectedItem
							? "list-group-item list-group-item-action list-group-item-light border-white active"
							: "list-group-item list-group-item-action list-group-item-light border-white"
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
