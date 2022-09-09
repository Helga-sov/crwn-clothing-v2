import { Outlet } from "react-router-dom";
import Directory from "../../directory/directory";
import categories from "../../category-menu/category-menu";

const Home = () => {
	return (
		<div>
			<Outlet />
			<Directory categories={categories} />
		</div>
	);
};

export default Home;
