import { getAllBrands } from "./brandService";
import axios from "axios";
import { baseApiUrl } from "../config.json";

jest.mock("axios");

describe("Brand Service", () => {
	const url = baseApiUrl + `/brands?gender=female&page=1&page_size=1298`;

	test("should fetch brand list from the server", async () => {
		const mockBrand = [
			{ id: 1, name: "brand 1" },
			{ id: 2, name: "brand 2" },
		];
		const mockData = { data: mockBrand };
		axios.get.mockImplementation(() => Promise.resolve(mockData));

		await expect(getAllBrands()).resolves.toEqual(mockData);
		expect(axios.get).toHaveBeenCalledTimes(1);
		expect(axios.get).toHaveBeenCalledWith(url);
	});

	test("should fail to fetch brand list from server", async () => {
		const exception = "Technical error occurred...";
		axios.get.mockImplementation(() => Promise.reject(exception));

		await expect(getAllBrands()).rejects.toEqual(exception);
		expect(axios.get).toHaveBeenCalledTimes(1);
		expect(axios.get).toHaveBeenCalledWith(url);
	});
});
