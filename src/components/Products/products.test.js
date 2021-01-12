import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Products from "./products";

test("should render properly", () => {
	const tree = shallow(<Products />);
	expect(toJson(tree)).toMatchSnapshot();
});
