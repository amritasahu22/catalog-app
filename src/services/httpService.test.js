import axios from "axios";

describe("Http Service", () => {
	const axiosInstance = axios.create();
	const interceptors = axiosInstance.interceptors.response;

	beforeEach(() => {
		interceptors.use(null, (err) => {
			const error = new Error(err.response.statusText);
			error.statusCode = err.response.status;
			error.data = err.response.data;
			return Promise.reject(error);
		});
	});

	test("should throw error if server returns expectedError", async () => {
		await expect(
			interceptors.handlers[0].rejected({
				response: {
					statusText: "NotFound",
					status: 404,
					data: { message: "Page not found" },
				},
			})
		).rejects.toMatchObject({
			message: "NotFound",
			statusCode: 404,
			data: { message: "Page not found" },
		});
	});

	test("should log error if server returns unexpected error", async () => {
		await expect(
			interceptors.handlers[0].rejected({
				response: {
					statusText: "Server Error",
					status: 500,
					data: { message: "Technical error occurred" },
				},
			})
		).rejects.toMatchObject({
			message: "Server Error",
			statusCode: 500,
			data: { message: "Technical error occurred" },
		});
	});
});
