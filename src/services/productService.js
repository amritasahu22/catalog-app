import { baseApiUrl } from "../config.json";
import http from "./httpService";

const apiEndpoint = baseApiUrl + "/products";

export function getProducts(
	pageNumber,
	sortOrder = "popularity",
	brand,
	pageSize = 24,
	gender = "female"
) {
	let queryParams = {
		gender,
		page: pageNumber,
		page_size: pageSize,
		sort: sortOrder,
	};

	const params =
		brand && brand.name !== "All Brands"
			? { ...queryParams, brand: brand.url_key }
			: queryParams;

	return http.get(apiEndpoint, { params });
}
