// Excepted Error  (404: not found, 400: bad request) - Client Errors
// Unexpected Error - Network Down, Server Down, Database Down,
// Some Bug in our code
// 1 Log them
// 2 Display a generic and friendly error message

import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(null, (error) => {
	console.log("Interceptor called...");

	const expectedError =
		error.response && error.response.status >= 400 && error.response < 500;

	if (!expectedError) {
		logger.log(error);
		toast.error("An unexpected error occurred.");
	}

	return Promise.reject(error);
});

axios.defaults.headers.common["content-type"] = "application/json";

export default {
	get: axios.get,
};
