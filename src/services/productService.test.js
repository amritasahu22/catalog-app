import { getProducts } from "./productService";
import axios from "axios";

jest.mock("axios");

describe("Product Service", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test("should fetch product data from service successfully", async () => {
		const mockProduct = { id: 1, name: "Product 1" };
		const mockData = {
			data: mockProduct,
		};
		axios.get.mockImplementation(() => Promise.resolve(mockData));

		await expect(getProducts("1", "popularity")).resolves.toEqual(mockData);
		expect(axios.get).toHaveBeenCalledTimes(1);
	});

	test("should fail to fetch product data from service", async () => {
		const exception = "Technical error occurred.";
		axios.get.mockImplementation(() => Promise.reject(exception));

		await expect(getProducts("1", "popularity")).rejects.toEqual(exception);
		expect(axios.get).toHaveBeenCalledTimes(1);
	});
});
