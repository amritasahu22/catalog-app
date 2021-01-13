import { baseApiUrl } from "../config.json";
import http from "./httpService";

const apiEndpoint = baseApiUrl + "/brands?gender=female&page=1&page_size=1298";

export function getAllBrands() {
	return http.get(apiEndpoint);
}
