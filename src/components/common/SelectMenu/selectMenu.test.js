import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SelectMenu from "./selectMenu";

describe("SelectMenu", () => {
	const options = [
		{ id: 1, name: "Popularity", value: "popularity" },
		{ id: 2, name: "New Arrivals", value: "new" },
	];

	test("should render properly with props", () => {
		const component = shallow(
			<SelectMenu
				options={options}
				selectedOption={options[2]}
				onOptionSelect={() => {}}
			/>
		);
		expect(toJson(component)).toMatchSnapshot();
	});
});
