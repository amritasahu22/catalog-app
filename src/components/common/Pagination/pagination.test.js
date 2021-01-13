import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Pagination from "./Pagination";

describe("Pagination", () => {
	test("should render properly with props", () => {
		const component = shallow(
			<Pagination
				totalItems={50}
				pageSize={10}
				currentPage={1}
				totalPageCount={5}
				onPageChange={() => {}}
			/>
		);
		expect(toJson(component)).toMatchSnapshot();
	});
});
