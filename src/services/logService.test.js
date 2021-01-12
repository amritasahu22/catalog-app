import logger from "./logService";

describe("Log Service", () => {
	test("should log error to the console", () => {
		console.log = jest.fn();
		const error = "some error";

		logger.log(error);

		expect(console.log.mock.calls[0][0] + console.log.mock.calls[0][1]).toBe(
			"Logging the error: some error"
		);
	});
});
