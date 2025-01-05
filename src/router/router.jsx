import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Skills from "../pages/skills/Skills";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayouts></MainLayouts>,
		errorElement: <h1>error element</h1>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/skills",
				element: <Skills></Skills>,
			},
		],
	},
]);

export default router;
