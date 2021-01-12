import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Footer from "./footer";

test("should render properly", () => {
	const tree = shallow(<Footer />);
	expect(toJson(tree)).toMatchSnapshot();
});
