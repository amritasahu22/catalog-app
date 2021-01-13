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
	//console.log("Query Params:: ", gender, pageNumber, pageSize, sortOrder);
	let params = {
		gender,
		page: pageNumber,
		page_size: pageSize,
		sort: sortOrder,
	};

	params = brand ? { ...params, brand: brand.url_key } : params;

	console.log(params);

	return http.get(apiEndpoint, { params });
}
