import React from "react";
import PropTypes from "prop-types";

const SelectMenu = (props) => {
	const { options, selectedOption, onOptionSelect } = props;

	return (
		<select
			className="custom-select clickable"
			value={selectedOption}
			onChange={(e) => onOptionSelect(e.target.value)}
		>
			{options.map((option) => (
				<option key={option.id} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};

SelectMenu.propTypes = {
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.string,
	onOptionSelect: PropTypes.func.isRequired,
};

export default SelectMenu;
