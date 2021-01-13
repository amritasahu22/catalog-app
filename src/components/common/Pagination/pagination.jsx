import React from "react";
import PropTypes from "prop-types";
import { range } from "lodash";

const Pagination = (props) => {
	const {
		totalItems,
		pageSize,
		currentPage,
		totalPageCount,
		onPageChange,
	} = props;

	const pages = range(1, totalPageCount + 1);

	return (
		<nav className="Paginate">
			<ul
				className="pagination pagination-md
			  justify-content-end clickable"
			>
				<li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
					<a
						className="page-link text-dark bg-light"
						aria-label="Previous"
						onClick={() => onPageChange(currentPage - 1)}
					>
						<span aria-hidden="true">&laquo;</span>
						<span className="sr-only">Previous</span>
					</a>
				</li>

				{pages.map((page) => {
					if (
						page === 1 ||
						(page >= currentPage - 2 && page <= currentPage + 2)
					) {
						return (
							<li
								className={
									page === currentPage ? "page-item active" : "page-item"
								}
								key={page}
							>
								<a
									className="page-link text-dark bg-light"
									onClick={() => onPageChange(page)}
								>
									{page}
								</a>
							</li>
						);
					}
				})}

				<li
					className={
						currentPage === totalPageCount ? "page-item disabled" : "page-item"
					}
				>
					<a
						className="page-link text-dark bg-light"
						aria-label="Next"
						onClick={() => onPageChange(currentPage + 1)}
					>
						<span aria-hidden="true">&raquo;</span>
						<span className="sr-only">Next</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

Pagination.propTypes = {
	totalItems: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	totalPageCount: PropTypes.number,
	onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
