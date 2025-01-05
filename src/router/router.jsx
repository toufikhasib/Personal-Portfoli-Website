import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Skills from "../pages/skills/Skills";
import ProjectsCardDetails from "../pages/projects/ProjectsCardDetails";

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
			{
				path: "/projectsDetails/:id",
				element: <ProjectsCardDetails></ProjectsCardDetails>,
				loader: async ({ params }) => {
					const response = await fetch("projects.json");
					const projects = await response.json();
					return projects.find((project) => project.id === parseInt(params.id));
				},
			},
		],
	},
]);

export default router;
