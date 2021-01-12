import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NavBar from "./navbar";

test("should render properly", () => {
	const tree = shallow(<NavBar />);
	expect(toJson(tree)).toMatchSnapshot();
});
