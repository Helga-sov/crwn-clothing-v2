import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
	return (
		<div className="category-preview-container">
			<h2>
				{/* span is inside h2 because we want the span to be clickable, not the h2 and its whole space */}
				<Link className="title" to={title.toLowerCase()}>
					{title.toUpperCase()}
				</Link>
			</h2>
			{/*the callback is going to get the product. we use _ (underscore) to ignore the 'product, 2nd argument is index */}
			<div className="preview">
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
