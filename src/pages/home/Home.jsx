import Education from "../education/Education";
import ProjectsCard from "../projects/ProjectsCard";
import Skills from "../skills/Skills";
import AboutMe from "./AboutMe";
import Hero from "./Hero";

const Home = () => {
	return (
		<div>
			{/* hero section */}
			<Hero></Hero>
            {/* about me section */}
            <AboutMe></AboutMe>
			{/* skills section */}
			<Skills></Skills>
			{/* education section */}
			<Education></Education>
			{/* projects section */}
			<div className="my-20">
			<ProjectsCard></ProjectsCard>

			</div>
		</div>
	);
};

export default Home;
