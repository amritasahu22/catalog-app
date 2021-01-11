import { baseApiUrl } from "../config.json";
import http from "./httpService";

const apiEndpoint = baseApiUrl + "/products";

export function getProducts(
	pageNumber,
	sortOrder = "popularity",
	pageSize = 24,
	gender = "female"
) {
	console.log("Query Params:: ", gender, pageNumber, pageSize, sortOrder);
	const params = {
		gender,
		page: pageNumber,
		page_size: pageSize,
		sort: sortOrder,
	};

	return http.get(apiEndpoint, { params });
}
