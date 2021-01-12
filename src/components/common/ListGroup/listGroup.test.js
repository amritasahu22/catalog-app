import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ListGroup from "./listGroup";

describe("ListGroup", () => {
	const brands = [
		{
			id: 1,
			name: "17 Sundays",
			url_key: "17-sundays",
		},
		{
			id: 2,
			name: "2XU",
			url_key: "2xu",
		},
	];

	test("should render properly with props", () => {
		const component = shallow(
			<ListGroup
				items={brands}
				selectedItem={brands[0]}
				onItemSelect={() => {}}
			/>
		);
		expect(toJson(component)).toMatchSnapshot();
	});
});
