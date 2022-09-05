import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item";

const Directory = ({ categories }) => {
	return (
		<div className="directory-container">
			{categories.map((category) => (
				<CategoryItem key={category.key} category={category} />
			))}
		</div>
	);
};

export default Directory;
