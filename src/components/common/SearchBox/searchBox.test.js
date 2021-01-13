import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
	test("should render properly with props", () => {
		const value = "2xu";
		const component = shallow(<SearchBox value={value} onChange={() => {}} />);
		expect(toJson(component)).toMatchSnapshot();
	});
});
