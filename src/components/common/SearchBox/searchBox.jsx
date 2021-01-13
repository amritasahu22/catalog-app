import React from "react";
import PropTypes from "prop-types";

const SearchBox = (props) => {
	const { value, onChange } = props;
	return (
		<input
			type="text"
			name="query"
			className="form-control mx-3"
			placeholder="Search..."
			value={value}
			onChange={(e) => onChange(e.currentTarget.value)}
		/>
	);
};

SearchBox.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};
export default SearchBox;
