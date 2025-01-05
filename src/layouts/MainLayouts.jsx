import { Outlet } from "react-router-dom";
import Navber from "../shared/navbar/Navber";
import Footer from "../shared/footer/Footer";

const MainLayouts = () => {
	return (
		<div>
			<Navber></Navber>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default MainLayouts;
