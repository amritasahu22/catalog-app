import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Product from "./product";

describe("Product", () => {
	const products = [
		{
			sku: "1",
			name: "XYZ",
			price: 22,
			_embedded: {
				brand: {
					name: "Brand",
				},
				images: [
					{
						url: "image",
						thumbnail: "thumbail",
					},
				],
			},
		},
	];

	test("should render properly with props", () => {
		const selectedProduct = null;
		const component = shallow(
			<Product
				products={products}
				selectedProduct={selectedProduct}
				onProductSelect={() => {}}
			/>
		);
		expect(toJson(component)).toMatchSnapshot();
	});
});
